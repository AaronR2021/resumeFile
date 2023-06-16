import React, { useEffect, useState } from 'react'
import {articleData} from './articleData.js';
import Image from 'next/image.js';

function Articles() {
    const [data,setData]=useState([])
    useEffect(()=>{
        setData[articleData]
    },[])
  return (
    <div>
{
    articleData?articleData.map(article=>(
        <div>

           <a href={article.link} target='_blank'>
           <Image loader={() => article.img} src={article.img} width={300}
            height={300}/>
           <h5>{article.title}</h5>
            </a> 
        </div>
    )):''
}
    </div>
  )
}

export default Articles