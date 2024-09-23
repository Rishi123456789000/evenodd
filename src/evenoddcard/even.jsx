import React, { useState } from 'react';
import Evencard from '../card/card1';

const Evenoddcard = () => {
    const [numbers] = useState(Array.from({ length: 100 }, (_, i) => i + 1));

    const handleClick = (number) => {
        alert(number % 2 === 0 ? 'Even' : 'Odd');
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {numbers.map((number) => (
                <Evencard
                    key={number}
                    number={number}
                    onClick={() => handleClick(number)}
                />
            ))}
        </div>
    );
};

export default Evenoddcard;
