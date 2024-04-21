import React from 'react'
import {  useState } from 'react'
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import "../BulletPoints/BulletPoints.css"
import Button from '@mui/material/Button';
import { GoogleGenerativeAI } from '@google/generative-ai';

const CodeSnippets = () => {

    const[text,setText] = useState('')
    const[data,showdata] = useState("")
    const contentRefs = useRef([]);

    const genAI = new GoogleGenerativeAI("AIzaSyCfq2ghe39qXEpMN67AnGchQBY8xz5YDtw");

    const apiCall = async() =>{
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
      const prompt = `please generate different type of approach factorial program code and create a array each approach should push into that array and finnaly return that array to render in react`
    
      const result = await model.generateContent(prompt);
      //const response = await result.response;
      //const text = result.response.json();
      console.log(result?.response?.candidates[0].content.parts[0].text);
      const resultSnippet = result?.response?.candidates[0].content.parts[0].text
      const codeSnippets = resultSnippet.split(/\*\*\d+\.\s/).filter(Boolean);
      console.log("last",codeSnippets);
    }

  return (
    <div>
      <div className='text-box'>
        <input type='text' placeholder='Enter Your Search' 
         onChange={(e) => setText(e.target.value)}
        />
        <Button variant="contained" style={{marginLeft:"10px",backgroundColor:"rgb(205, 179, 229)",color:"black"}}
         onClick={apiCall}
        >
         Search
        </Button>
      </div>
    </div>
  )
}

export default CodeSnippets
