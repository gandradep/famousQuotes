import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Quotes = (props) => {
    const { slug }= useParams();
    const authors = useSelector((state) => state.authors);    
    const authorInfo = authors.filter((el)=> el.slug === slug);
    console.log(authorInfo);
    return(  
        
            <div >
                <h2>{authorInfo[0].name}</h2>
            </div>
        
    );}


export default Quotes;