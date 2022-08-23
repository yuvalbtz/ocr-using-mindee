import React, {useEffect,useState } from 'react'
import './App.css'

import {createWorker} from 'tesseract.js'
import Img from './assets/licencenew.jpg'
import axios from 'axios';
import FormData from 'form-data'
import imageSRC from './assets/licence.jpg'
function App() {
// console.log(import.meta.env.VITE_API_SECRET);
let data = new FormData()   
let image = new Image()
image.src = imageSRC
data.append('document','https://img.freepik.com/free-vector/modern-credit-card-template-design_48190-383.jpg?size=338&ext=jpg')
  
const predict = async () => {
    try {
     let result = await axios(  
      {
        method:'POST',
        url:'https://api.mindee.net/v1/products/yuval/ocr/v1/predict',
        headers: { 
          'Authorization':`${import.meta.env.VITE_API_SECRET}`,
          'Content-Type': 'multipart/form-data',
              },
              data
      }) 

      console.log(result.data.document.inference.pages[0].prediction);
  } catch (error) {
    console.log(error);
   }
  };
 

  


  return (
    <>
    <button className="predictButton" onClick={predict}>
       predict
    </button>
    <div className="App">
   
    </div>
    </>
    
  )
}

export default App
