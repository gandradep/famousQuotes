import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Author = (props) => {
  const {
    name, id, quotes, slug, index,
  } = props;
  return (
    <NavLink to={`/${slug}`} data-testid={`author-${index}`}>
      <div id={id}>
        <h4>
          {name}
        </h4>
        <span>
          {quotes}
        </span>
      </div>
    </NavLink>
  );
};
Author.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quotes: PropTypes.number.isRequired,
};
export default Author;
