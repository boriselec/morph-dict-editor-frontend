import React from 'react';

const NavigationTab = ({title, index, onClick, activeIndex}) => (
    <li className={'nav-item' + (activeIndex === index ? ' active' : '')} onClick={function() {onClick(index)}}>
        <a className='nav-link'>{title}</a>
    </li>
);

export default NavigationTab;