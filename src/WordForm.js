import React from 'react';

const WordForm = ({data, onClick}) => (
    <div onClick={onClick}>
        <div className="media text-muted pt-3">
            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <strong className="d-block text-gray-dark">{data.text}</strong>
                {data.description}
            </p>
        </div>
        <div>

        </div>
    </div>
);

export default WordForm;