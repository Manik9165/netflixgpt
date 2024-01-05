import OpenAI from 'openai';
import React, { useRef } from 'react'
import { GPT_QUERY, OPENAI_API_KEY } from '../Utils/Constants';

const GPTSearchBar = () => {

    const gptFieldRef = useRef(null);

    const handleGPTFormSubmit = (e) => {
        e.preventDefault();
    }

    const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });

    const handleGPTFormClick = async () => {
        const gptQuery = GPT_QUERY + gptFieldRef.current.value;
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        console.log(chatCompletion);
    }

    return (
        <div className='w-6/12 pt-[10%] relative m-auto'>
            <div className='flex justify-start bg-black py-10 pl-5 opacity-90 rounded-lg'>
                <form className='w-10/12 m-auto' onSubmit={handleGPTFormSubmit}>
                    <input className='w-9/12 p-5 rounded-lg' placeholder='Hello 👋. What can i suggest you today !!' ref={gptFieldRef} />
                    <button className='text-white w-2/12 bg-red-800 p-5 ml-5 rounded-lg' onClick={handleGPTFormClick}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default GPTSearchBar