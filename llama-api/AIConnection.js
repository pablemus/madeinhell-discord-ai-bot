import axios from 'axios';

export default async function sendToLlama(question) {
    const payload = {
        model: "phi4-mini:latest",
        prompt: question,
        stream: false,
        options: {
            num_predict: 200,
            temperature: 0.7,
            top_p: 0.9,
            repeat_penalty: 1.1,
            presence_penalty: 0.2,
            frequency_penalty: 0.2
        }
    }
    try {
        console.log('Preparando respuesta de IA...')
        const res = await axios.post('http://127.0.0.1:11434/api/generate', payload);
        console.log('Respuesta de IA obtenida con exito')
        return res.data.response;
    } catch (err) {
        console.error(err)
        return ('No se la respuesta :(')
    }
}