import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LemmaPaginator from './LemmaPaginator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LemmaPaginator perPage={10} url={'http://localhost:8080/api/lemma'} searchText={undefined}/>, document.getElementById('root'));
registerServiceWorker();
