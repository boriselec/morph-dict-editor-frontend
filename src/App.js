import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import LemmaList from "./LemmaList";
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0
        }
    }

    load() {
        $.ajax({
            url      : this.props.url,
            data     : {limit: this.props.perPage, offset: this.state.offset},
            dataType : 'json',
            type     : 'GET',
            crossDomain: true,

            success: data => {
                this.setState({data: data.lemmata, pageCount: Math.ceil(data.meta.total / this.props.perPage)});
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    componentDidMount() {
        this.load();
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);

        this.setState({offset: offset}, () => {
            this.load();
        });
    };

    render() {
        return (
            <div className="lemmaBox">
                <LemmaList data={this.state.data}/>
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={this.state.pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"}/>
            </div>
        );
    }
}

export default App;
