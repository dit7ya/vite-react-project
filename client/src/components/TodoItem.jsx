import React from 'react';
import CloseIcon from './closeIcon';

const TodoItem = (props) => {
  return (
    <div className='flex justify-between pl-2 pr-2'>
      <div className='flex'>
        <input
          type='checkbox'
          checked={props.isDone}
          onChange={() => props.toggleTodo(props._id)}
        />
        <span
          className={
                        `pl-2 text-sm ${(props.isDone ? 'line-through italic text-gray-500' : '')}`
                    }
        >
          {props.text}
        </span>
      </div>

      <div>
        <button
          className='focus:outline-none text-gray-300 hover:text-pink-600 transform motion-safe:hover:scale-120 '
          onClick={() => props.deleteTodo(props._id)}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
