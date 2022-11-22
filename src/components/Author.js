import React from 'react';
import { NavLink } from 'react-router-dom';

const Author = (props) => {
    const {
        name, description, id, quotes, slug,
     } = props;
    return (
        <NavLink to={`/${slug}`}>
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
}

export default Author;