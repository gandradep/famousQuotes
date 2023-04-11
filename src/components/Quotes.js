import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { getQuotes } from '../redux/quotes/quotes';
import classess from './quotes.module.css';

const Quotes = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);
  const quotes = useSelector((state) => state.quotes);
  const authorInfo = authors.filter((el) => el.slug === slug)[0];
  useEffect(() => {
    const objThunk = {
      slug,
      quotes: authorInfo.quotes,
    };
    dispatch(getQuotes(objThunk));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div>
      <header className="bgTitle d-flex">
        <NavLink to="/">
          <span>&lt;</span>
        </NavLink>
        <h3 className={classess.title}>quotes</h3>
      </header>
      <div className={`bgCLight d-flex ${classess.author}`}>
        <img src={authorInfo.picture} alt={authorInfo.name} />
        <div>
          <h2>{authorInfo.name}</h2>
          <p>{authorInfo.description}</p>
        </div>
      </div>
      <h4 className="bgTitle">MOST KNOWN QUOTES:</h4>
      <ul className="p-0">
        {quotes?.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
