import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App perPage={10} url={'http://localhost:8080/api/lemma'}/>, document.getElementById('root'));
registerServiceWorker();
