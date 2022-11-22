import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../redux/homepage/homepage';
import Author from './Author';

const Homepage = () => {
    const dispatch = useDispatch();
    const authors = useSelector((state) => state.authors);
    useEffect(() => {
        dispatch(getAuthors());   
        
    }, [dispatch]);
    
    return (
        <div>
            {authors?.map((author) => (
                <Author 
                    key={author.id}
                    id={author.id}
                    name={author.name}
                    slug={author.slug}
                    description={author.description}
                    quotes={author.quotes}
                />
            ))}
        </div>
    );
};
export default Homepage;