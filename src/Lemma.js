import React, {Component} from 'react';
import WordForm from "./WordForm";
import $ from 'jquery';

class Lemma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOtherForms: false,
            lemmaState: Lemma.decodeLemmaState(props.data.state)
        }
    }

    static decodeLemmaState(stateCode) {
        switch (stateCode) {
            case '1': return 'entered';
            case '2': return 'deleted';
            default: return '';
        }
    }

    handleClick() {
        this.setState({showOtherForms: !this.state.showOtherForms});
    }

    handleDelete() {
        $.ajax({
            url      : this.props.url + '?' + $.param({'id': this.props.data.id}),
            type     : 'DELETE',
            crossDomain: true,

            success: data => {
                this.setState({lemmaState: 'deleted'});
            },

            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        function form(element) {
            return {
                text: element.t,
                description: element.g ? element.g.join(',') : 'no description'
            }
        }

        let mainForm = form(this.props.data.l);

        let otherForms = this.props.data.f.map(function (formData) {
            let props = form(formData);
            return <WordForm data={props}/>
        });

        return (
            <div className={this.state.lemmaState}>
                <WordForm data={mainForm} onClick={this.handleClick.bind(this)} onDelete={this.handleDelete.bind(this)}/>
                <div className='formContainer'>
                    {this.state.showOtherForms ? otherForms : null}
                </div>
            </div>
        );
    }
}

export default Lemma;