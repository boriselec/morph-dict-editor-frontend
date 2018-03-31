import React from 'react';

const WordForm = ({data, onClick, onDelete, isMain}) => (
    <div className={'media text-muted pt-3 ' + (isMain ? 'mainForm' : 'otherForm')}
         onClick={onClick}>
        <p className='media-body pb-3 mb-0 small lh-125 border-bottom border-gray lemmaDescription'>
            <strong className='d-block text-gray-dark'>{data.text}</strong>
            {data.description}
        </p>
        <button className='btn btn-outline-danger my-2 my-sm-0 deleteButton'
                hidden={onDelete === undefined}
                onClick={function (e) {e.stopPropagation();
            onDelete()
        }}>
            delete
        </button>
    </div>
);

export default WordForm;