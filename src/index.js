import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./App";

ReactDOM.render(<App url={'http://localhost:8080/api/lemma'}/>, document.getElementById('root'));
registerServiceWorker();
