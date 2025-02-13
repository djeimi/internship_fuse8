import React from 'react';
import './Card.css';

const Card = ({ id, name, species, status, created }) => {
  return (
    <a className='container' href={'https://rickandmortyapi.com/api/character/' + id}>
      <p className='nameSpec'>{name} - {species}</p>
      <div className='subContainer'>
        <p className='stat'>
            Status: <span style={{ color: status.toLowerCase().includes('alive') ? 'green' :
                              status.toLowerCase().includes('dead') ? 'red' : 'inherit',
                              fontWeight: 700}}>
                                {status}
                    </span>
        </p>
      <p className='date'>Created: {new Date(created).toLocaleDateString()}</p>
      </div>
    </a>
  );
};

export default Card;
