import axios from 'axios'

const url = 'http://localhost:1234'

export const callpublish = async(obj)=>{
    const log = await axios.post(`${url}/chat`,obj)
    return log
}