import React from 'react'

export const Select = ({handleSelect}) => {
    return (
        <select onChange={handleSelect}>
            <option value='europe'>Europe</option>
            <option value='asia'>Asia</option>
            <option value='africa'>Africa</option>
            <option value='americas'>Americas</option>
            <option value='oceania'>Oceania</option>
        </select>
    )
}