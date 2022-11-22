import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuotes } from '../redux/quotes/quotes';
import { NavLink } from 'react-router-dom';

const Quotes = (props) => {
    const { slug }= useParams();
    const dispatch = useDispatch();
    const authors = useSelector((state) => state.authors);  
    const quotes = useSelector((state) => state.quotes);  
    const authorInfo = authors.filter((el)=> el.slug === slug)[0];
    const objThunk = {
        slug,
        quotes: authorInfo.quotes,
    };
    

    useEffect(() => {
        dispatch(getQuotes(objThunk));           
    }, [dispatch]);    
    return(  
        
            <div >
                <header>
                    <NavLink to="/">
                        <h3>&lt;</h3>
                    </NavLink>
                    
                    <h2>{authorInfo.name}</h2>                    
                </header>
                <p>{authorInfo.description}</p>
                <ul>
                    {quotes?.map((item) => (
                        <li key={item.id}>{item.content}</li>
                    ))}
                </ul>
            </div>
        
    );}


export default Quotes;