import React from 'react';

import './card-list.styles.css'

export const CardList = (props) => {
    console.log(props)
    return <h1>Hello {props.children}</h1>;
};

export default CardList;
