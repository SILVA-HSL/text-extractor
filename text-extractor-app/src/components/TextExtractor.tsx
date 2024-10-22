import React from 'react'
import { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageUploader from './ImageUploader';

const TextExtractor = () => {
    const [isLoading,setIsLoading]=useState(false);
    const[extractedText,setExtractedText]=useState('');
    const[copySuccess,setCopySuccess]=useState('Copy Text');
    const handleImageUpload=(File: any)=>{
        setIsLoading(true);
        Tesseract.recognize(File,'eng',{logger:m=>console.log(m)}).then(({data:{text}})=>{
            setExtractedText(text);
            setIsLoading(false);
        }).catch((err)=>{
            console.log(err);
            setIsLoading(false);
        });
        
    }
    const handleCopyText=()=>{
        navigator.clipboard.writeText(extractedText)
        .then(()=>{
            setCopySuccess('Copied!');
        })
        .catch((err)=>{
            console.log(err);
        });
    }
  return (
    <div className='container my-4  '>
        <h1 className='text-center mb-4'>Extract Text from Image</h1>
        <ImageUploader onImageUpload={handleImageUpload}/>
        {isLoading?(
            <p className="text-center mt-4">Extracting Text...</p>
        ):(
           <>
            <textarea
            className="form-control mt-4"
            rows={10}
            value={extractedText}
            placeholder="Extracted text will appear here..."
            readOnly
            />
            <div className='text-center'>
            <button
            className='btn btn-primary mt-2'
            onClick={handleCopyText}>
                {copySuccess}
            </button>
            </div>
            
</>
        )
        }
      
    </div>
  );
};

export default TextExtractor
