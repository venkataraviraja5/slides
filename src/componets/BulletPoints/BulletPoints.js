import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { toPng } from 'html-to-image';
import "../BulletPoints/BulletPoints.css"
import Button from '@mui/material/Button';
import { GoogleGenerativeAI } from '@google/generative-ai';
import FlashMessage from '../FlashMessage/FlashMessage';

const BulletPoints = () => {
    const[text,setText] = useState('')
    const[data,showdata] = useState("")
    const contentRefs = useRef([]);
    const[flashMessage,setFlashMessage] = useState(false)

    //function for bullet points API
    const genAI = new GoogleGenerativeAI("AIzaSyCfq2ghe39qXEpMN67AnGchQBY8xz5YDtw");

  const apiCall = async() =>{
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = `give me few more than 20 points about ${text} without side headings and each point less than 10 words,please give me points in the form of array `
  
     if(text.length > 0){
        const result = await model.generateContent(prompt);
        //const response = await result.response;
        //const text = result.response.json();
        //console.log(result?.response?.candidates[0].content.parts[0]);
    
        if(result?.response?.candidates[0].content.parts[0].text){
            const groupedArr = []
            const arr = result?.response?.candidates[0].content.parts[0].text.split("\n")
           // console.log(newDataArray);
            for(let i=0 ; i<= arr.length ; i = i+3){
                groupedArr.push(arr.slice(i,i+3))
            }
            //console.log(groupedArr);
            showdata(groupedArr)
        }
     }
     else{
        setFlashMessage(true)
        setTimeout(() => {
          setFlashMessage(false)
        },2000)
     }
  }

    // Function to handle the download action
    const handleDownload = (content) => {

        // Convert HTML content to an image
        toPng(content,{ width: 230, height: 250 , padding: 20})
          .then(function (dataUrl) {
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'slides.png';
    
            // Trigger a click on the anchor element to start the download
            document.body.appendChild(link);
            link.click();
    
            // Clean up
            document.body.removeChild(link);
          });
    };
  return (
    <div>
        <div>
        <FlashMessage booleanValue = {flashMessage}/>
        </div>
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
      <div>
        {
            data.length > 0 ? 
           <div className='pics'>
              {
                 data.map((insideArr,outerIndex) => (
                    <div>
                    <div className='picdiv' key={outerIndex} ref={(ref) => contentRefs.current[outerIndex] = ref}>
                        {insideArr.length > 0 ? insideArr.map((item,index) => (
                        <div key={index} className='data-items'>
                            <p>{item}</p>
                        </div>
                    )):null}
                    </div>
                    <Button variant="contained" color="success" style={{width:"240px"}}
                      onClick={() => handleDownload(contentRefs.current[outerIndex])}
                    >
                       Download
                    </Button>
                    </div>
                ))
              }
            </div>
           :
           null
        }
      </div>
      <div>
      </div>
    </div>
  )
}

export default BulletPoints
