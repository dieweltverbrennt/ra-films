import React, { useState } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import Star from './star';

const Stars = ({ count }) => {

    if (Number.isInteger(count) && count > 1 && count < 5) {
        return (
            <ul className="card-body-stars u-clearfix">
                {[...Array(count)].map((n) => (
                    <Star key={uuidv4()} />
                ))}
            </ul>
        );
    }

};

export default Stars;