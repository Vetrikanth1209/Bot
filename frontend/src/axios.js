import axios from 'axios'

const url = 'https://bot-a1tl.onrender.com'

export const callpublish = async(obj)=>{
    const log = await axios.post(`${url}/chat`,obj)
    return log
}