/* global backendUrl */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import $ from 'jquery';
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

let $body = $('body');
$(document).on({
    ajaxStart: function () {$body.addClass('loading')},
    ajaxStop: function () {$body.removeClass('loading')}
});
ReactDOM.render(<App url={backendUrl}/>, document.getElementById('root'));
registerServiceWorker();
