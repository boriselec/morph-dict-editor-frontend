import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import LemmaList from "./LemmaList";
import $ from 'jquery';
import Search from "./Search";

class LemmaPaginator extends Component {
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
            data     : {
                limit: this.props.perPage,
                offset: this.state.offset,
                text: this.props.searchText},
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
            <div className={"container"}>
                <div className={"paginationContainer"}>
                    <div className="my-3 p-3 bg-white rounded box-shadow">
                        <Search searchText={this.props.searchText}/>
                        <LemmaList data={this.state.data} url={this.props.url}/>
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
                </div>
            </div>
        );
    }
}

export default LemmaPaginator;
