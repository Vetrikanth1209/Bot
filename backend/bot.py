import sys
import requests
from bs4 import BeautifulSoup
import wikipediaapi
import re
import json

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
        # Use BeautifulSoup to get HTML and extract paragraphs
        url = f"https://en.wikipedia.org/wiki/{query.replace(' ', '_')}"
        response = requests.get(url, headers={"User-Agent": user_agent})
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            paragraphs = soup.find_all('p')
            
            # Extract the first 3 to 4 paragraphs with content
            clean_paragraphs = []
            for paragraph in paragraphs:
                text = paragraph.get_text(strip=True)
                if text:
                    clean_paragraphs.append(clean_output(text))
                if len(clean_paragraphs) >= 4:
                    break

            # Join the paragraphs with a line break between them
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
    # Remove unwanted symbols, references, and extra spaces
    text = re.sub(r'\[.*?\]', '', text)  # Remove reference brackets
    text = re.sub(r'\s+', ' ', text)     # Replace multiple spaces with a single space
    text = re.sub(r'\([^)]*\)', '', text) # Remove text within parentheses
    return text.strip()

def main():
    # Retrieve user input from command line arguments
    user_input = sys.argv[1] if len(sys.argv) > 1 else ""
    
    if not user_input:
        print("No input provided")
        sys.exit(1)

    if user_input.lower() == "bye":
        response = "Goodbye! Have a great day!"
    elif user_input.lower().startswith("search "):
        query = user_input[7:].strip()
        response = search_wikipedia(query)
        if response is None:
            response = "I'm sorry, I didn't understand that. Please type 'help' for assistance."
    
    # Print the response to standard output
    # Use JSON to format for the web page
    print(json.dumps({"chatbotResponse": response}))

if __name__ == "__main__":
    main()
