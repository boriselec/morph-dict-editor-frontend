import React, {Component} from 'react';
import $ from 'jquery';

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        $.ajax({
            url      : this.props.url + '/api/link',
            type     : 'GET',
            crossDomain: true,

            success: data => {
                this.setState({data: data})
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'paginationContainer'}>
                    <div className='my-3 p-3 bg-white rounded box-shadow'>
                        <table className='table'>
                            <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Dictionary</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.data.map(function (link, i) {
                                return <tr>
                                    <th scope='row'>{i + 1}</th>
                                    <td>
                                        {link.url
                                        ? <a href={link.url} target='_blank'>{link.name}</a>
                                        : link.name + ': NO DATA'}
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download;