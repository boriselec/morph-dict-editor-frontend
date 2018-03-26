import React from 'react';
import Navigation from "./Navigation";
import LemmaPaginator from "./LemmaPaginator";

const App = () => (
    <div>
        <Navigation/>
        <LemmaPaginator perPage={10} url={'http://localhost:8080/api/lemma'} searchText={undefined}/>
    </div>
);

export default App;