import dotenv from 'dotenv';
import OpenAI from "openai";
dotenv.config();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function sendToGPT(question) {
    try{
        const res = await client.responses.create({
            model: "gpt-5",
            input: question
        })
        return res.output_text;
    } catch(err){
        console.error(err)
        return('No se la respuesta :(')
    }
}