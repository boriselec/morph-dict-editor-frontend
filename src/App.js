import React, {Component} from 'react';
import Navigation from './Navigation';
import LemmaPaginator from './LemmaPaginator';
import About from './About';
import Download from "./Download";
import Edit from "./Edit";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText: undefined, tabIndex: 0}
    }

    handleSearch(text) {
        this.setState({searchText: text ? text : undefined})
    }

    handleTab(index) {
        this.setState({tabIndex: index});
    }

    page(tabIndex) {
        switch (tabIndex) {
            case 0: return <LemmaPaginator perPage={10} url={'http://localhost:8080/api/lemma'} searchText={this.state.searchText}/>;
            case 1: return <Download/>;
            case 2: return <Edit/>;
            case 3: return <About/>;
            default:return 'Error';
        }
    };

    render() {
        return (
            <div>
                <Navigation onSearch={this.handleSearch.bind(this)}
                            onTab={this.handleTab.bind(this)}
                            activeIndex={this.state.tabIndex}/>
                {this.page(this.state.tabIndex)}
            </div>
        )
    }
}

export default App;