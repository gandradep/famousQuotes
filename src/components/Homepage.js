import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../redux/homepage/homepage';

const Homepage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthors());   

    }, [dispatch]);
    return (
        <div>
            Test
        </div>
    );
};

export default Homepage;