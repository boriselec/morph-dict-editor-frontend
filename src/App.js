import React, {Component} from 'react';
import Navigation from "./Navigation";
import LemmaPaginator from "./LemmaPaginator";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText: undefined}
    }

    handleSearch(text) {
        this.setState({searchText: text ? text : undefined})
    }

    render() {
        return (
            <div>
                <Navigation onSearch={this.handleSearch.bind(this)}/>
                <LemmaPaginator perPage={10} url={'http://localhost:8080/api/lemma'} searchText={this.state.searchText}/>
            </div>
        )
    }
}

export default App;