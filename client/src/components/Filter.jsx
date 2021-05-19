import React, { useState } from 'react';

const Filter = (props) => {
  const [state, setState] = useState('all');

  return (
    <div className='mt-2 mb-2 pl-2 pr-2 rounded flex justify-left text-xs bg-purple-100 text-gray-600'>
      <div className='pr-3'>
        <input
          type='radio'
          checked={state === 'all'}
          onChange={() => {
            setState('all');
            props.handleFilterState('all');
          }}
        />
        <span className='pl-1'>All</span>
      </div>
      <div className='pr-3'>
        <input
          type='radio'
          checked={state === 'completed'}
          onChange={() => {
            setState('completed');
            props.handleFilterState('completed');
          }}
        />
        <span className='pl-1'>Completed</span>
      </div>

      <div className='pr-3'>
        <input
          type='radio'
          checked={state === 'incomplete'}
          onChange={() => {
            setState('incomplete');
            props.handleFilterState('incomplete');
          }}
        />
        <span className='pl-1'>Incomplete</span>
      </div>
    </div>
  );
};

export default Filter;
