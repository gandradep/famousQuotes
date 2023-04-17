import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../redux/homepage/homepage';
import Author from './Author';
import classes from './homepage.module.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors);

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <div className="d-flex flex-wrap">
      <h3 className={`w100 bgTitle ${classes.title}`}>famous quotes</h3>
      <div className={`d-flex justify-content-center align-items-center bgCLight w-100 ${classes.container}`}>
        <i className="fa-regular fa-comment" />
        <h4 className={`${classes.divTitle}`}>WORLD QUOTES</h4>
      </div>
      {authors?.map((author, index) => (
        <Author
          key={author.id}
          id={author.id}
          index={index}
          name={author.name}
          slug={author.slug}
          quotes={author.quotes}
          picture={author.picture}
        />
      ))}
    </div>
  );
};
export default Homepage;
