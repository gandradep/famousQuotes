import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classess from './author.module.css';

const Author = (props) => {
  let bgclass = 'bgC2';
  const {
    name, id, quotes, slug, index, picture,
  } = props;
  if (index % 4 === 1 || index % 4 === 2) {
    bgclass = 'bgC1';
  }
  return (
    <div className={`w50 ${bgclass} `}>
      <NavLink to={`/${slug}`} data-testid={`author-${index}`}>
        <div id={id} className={`dFlex colDirFlex ${classess.divContainer}`}>
          <img className={classess.imgDiv} src={picture} alt={name} />
          <h4 className={`${classess.aSelf} bold`}>
            {name}
          </h4>
          <span className={classess.aSelf}>
            {quotes}
          </span>
        </div>
      </NavLink>
    </div>
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
