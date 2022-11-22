import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Quotes = (props) => {
    const { slug }= useParams();
    const authors = useSelector((state) => state.authors);    
    const authorInfo = authors.filter((el)=> el.slug === slug)[0];
    console.log(authorInfo);
    return(  
        
            <div >
                <header>
                    <NavLink to="/">
                        <h3>&lt;</h3>
                    </NavLink>
                    
                    <h2>{authorInfo.name}</h2>                    
                </header>
                <p>{authorInfo.description}</p>
            </div>
        
    );}


export default Quotes;