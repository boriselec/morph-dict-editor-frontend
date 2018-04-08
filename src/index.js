import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import properties from './application-properties.json'
import $ from 'jquery';

let $body = $('body');
$(document).on({
    ajaxStart: function () {$body.addClass('loading')},
    ajaxStop: function () {$body.removeClass('loading')}
});
ReactDOM.render(<App url={properties.url}/>, document.getElementById('root'));
registerServiceWorker();
