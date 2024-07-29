from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import wikipediaapi
import re
import os  
from werkzeug.urls import unquote
# Import the os module

app = Flask(__name__)

def get_response(user_input):
    responses = {
        "hi": "Hello! How can I help you today?",
        "hello": "Hi there! How can I assist you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "help": "I am here to help you. Ask me anything or type 'search <topic>' to search Wikipedia."
    }
    user_input = user_input.lower()
    return responses.get(user_input, None)

def search_wikipedia(query):
    user_agent = 'bot.py (vetrigokul2018@gmail.com)'
    wiki_wiki = wikipediaapi.Wikipedia(language='en', user_agent=user_agent)
    page = wiki_wiki.page(query)
    if page.exists():
        url = f"https://en.wikipedia.org/wiki/{query.replace(' ', '_')}"
        response = requests.get(url, headers={"User-Agent": user_agent})
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            paragraphs = soup.find_all('p')
            clean_paragraphs = []
            for paragraph in paragraphs:
                text = paragraph.get_text(strip=True)
                if text:
                    clean_paragraphs.append(clean_output(text))
                if len(clean_paragraphs) >= 4:
                    break
            organized_content = " ".join(clean_paragraphs)
            title = page.title
            fullurl = page.fullurl
            response_text = f"Page - Title: {title} {organized_content} URL: {fullurl}"
        else:
            response_text = f"Failed to retrieve the page for '{query}'."
    else:
        response_text = f"Sorry, I couldn't find anything on '{query}' on Wikipedia."
    return response_text

def clean_output(text):
    text = re.sub(r'\[.*?\]', '', text)  # Remove reference brackets
    text = re.sub(r'\s+', ' ', text)     # Replace multiple spaces with a single space
    text = re.sub(r'\([^)]*\)', '', text) # Remove text within parentheses
    return text.strip()

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('query', '')
    if not user_input:
        return jsonify({"error": "No input provided"}), 400

    if user_input.lower() == "bye":
        response = "Goodbye! Have a great day!"
    elif user_input.lower().startswith("search "):
        query = user_input[7:].strip()
        response = search_wikipedia(query)
    else:
        response = get_response(user_input)
        if response is None:
            response = "I'm sorry, I didn't understand that. Please type 'help' for assistance."
    
    return jsonify({"chatbotResponse": response})

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))  # Use the port from environment or default to 5000
    app.run(host='0.0.0.0', port=port, debug=True)
