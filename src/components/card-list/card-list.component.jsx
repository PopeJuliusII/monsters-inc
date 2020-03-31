import React from 'react';

import Card from '../card/card.component'

import uuidv4 from 'uuid';

import './card-list.styles.css'

export const CardList = (props) => (
    <div className='card-list'>
            {props.monsters.map(monster => (
            <Card key={uuidv4()} monster={ monster } />
        ))}
        </div>
);

export default CardList;
