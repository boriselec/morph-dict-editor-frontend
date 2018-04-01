import React, {Component} from 'react';
import $ from 'jquery';

class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meta: {revision: 0},
            link: []
        }
    }

    componentDidMount() {
        $.ajax({
            url      : this.props.url + '/api/link',
            type     : 'GET',
            crossDomain: true,

            success: data => {
                this.setState(data)
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        function statusBadge(revision, link) {
            if (link.revision === revision) {
                return badgeTemplate('success', 'UP TO DATE')
            } else if (link.revision < revision) {
                return badgeTemplate('warning', 'OUTDATED')
            } else {
                return badgeTemplate('danger', 'NO DATA')
            }
        }

        function badgeTemplate(className, description) {
            return <span className={'badge-width badge badge-' + className}>{description}</span>
        }

        return (
            <div className={'container'}>
                <div className={'paginationContainer'}>
                    <div className='my-3 p-3 bg-white rounded box-shadow'>
                        <table className='table'>
                            <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Dictionary</th>
                                <th scope='col'>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.link.map(function (link, i) {
                                return <tr>
                                    <th scope='row'>{i + 1}</th>
                                    <td>
                                        {link.url
                                        ? <a href={link.url} target='_blank'>{link.name}</a>
                                        : link.name + ': NO DATA'}
                                    </td>
                                    <td>
                                        {statusBadge(this.state.meta.revision, link)}
                                    </td>
                                </tr>
                            }, this)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Download;