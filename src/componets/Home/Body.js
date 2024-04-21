import React from 'react'
import { useRef } from 'react';
import { toPng } from 'html-to-image';

const Body = () => {
    const contentRef = useRef(null);

    // Function to handle the download action
    const handleDownload = () => {
        const content = contentRef.current;

        // Convert HTML content to an image
        toPng(content,{ width: 200, height: 200 })
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
      <div className='text-box'>
        <input type='text' placeholder='Enter Your Search'/>
        <button>Search</button>
      </div>
      <div>
        <div ref={contentRef} className='picture'>
            <div className='pic'>
              <h1>Hello world</h1>
            </div>
        </div>
        <button onClick={handleDownload}>Download Above Content as Image</button>
      </div>
    </div>
  )
}

export default Body
