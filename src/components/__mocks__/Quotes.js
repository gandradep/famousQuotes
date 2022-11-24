import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getQuotes } from '../../redux/quotes/quotes';
import classess from './quotes.module.css';

const Quotes = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);
  const quotes = useSelector((state) => state.quotes);
  const authorInfo = authors.filter((el) => el.slug === slug)[0];
  const objThunk = {
    slug: 'test',
    quotes: 9
  };
  useEffect(() => {
    dispatch(getQuotes(objThunk));
  }, [dispatch]);
  return (
    <div>
      <header className="bgTitle dFlex">
        <NavLink to="/">
          <span>&lt;</span>
        </NavLink>
        <h3 className={classess.title}>quotes</h3>
      </header>
      <div className={`bgCLight dFlex ${classess.author}`}>        
        <div>
          <h2>Author Name</h2>
          <p>Description</p>
        </div>
      </div>
      <h4 className="bgTitle">MOST KNOWN QUOTES:</h4>
      <ul>
        {quotes?.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
