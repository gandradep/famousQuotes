import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classess from './author.module.css';

const Author = (props) => {
  let bgclass = 'bgC2';
  const {
    name, id, quotes, slug, index, picture,
  } = props;
  if (index % 3 === 1) {
    bgclass = 'bgC1';
  } else if (index % 3 === 2) {
    bgclass = 'bgCLight';
  }
  return (
    <>
      <NavLink to={`/${slug}`} data-testid={`author-${index}`} id={id} className={`d-flex flex-column flex-wrap justify-content-between align-items-center col-6 col-sm-3 ${classess.container} ${bgclass}`}>
        <img className={classess.imgDiv} src={picture} alt={name} />
        <h4 className="bold min-cont align-self-sm-end">
          {name}
        </h4>
        <span className="align-self-sm-end">
          {quotes}
        </span>
      </NavLink>
    </>
  );
};
Author.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quotes: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};
export default Author;
