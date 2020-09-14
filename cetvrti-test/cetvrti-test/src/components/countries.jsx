import React from 'react';

export const Countries = ({ country }) => {
        return (country.map(countries => 
            <p>
                <img
                style={{width: '250px' }}
                alt = ''
                src ={countries.flag}
                />
            </p>
        ))
}