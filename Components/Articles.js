import React, { useEffect, useState } from 'react'
import {articleData} from './articleData.js';
import Image from 'next/image.js';
import style from './Article.module.css'

function Articles() {
    const [data,setData]=useState([])
    useEffect(()=>{
        setData[articleData]
    },[])
  return (
    <div className={style.articleList}>
{
    articleData?articleData.map(article=>(
        <div className={style.card}>

           <a href={article.link} target='_blank'>
            <div className={style.ImageHolder}>
            <Image loader={() => article.img} src={article.img} 
            className={style.articleImage} 
            fill={true}/>
            </div>
           <h5 className={style.strong}>{article.title}</h5>
            </a> 
        </div>
    )):''
}
    </div>
  )
}

export default Articles