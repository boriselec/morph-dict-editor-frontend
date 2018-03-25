import React, {Component} from 'react';
import WordForm from "./WordForm";

class Lemma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOtherForms: false,
            lemmaStateCode: props.data.state
        }
    }

    handleClick() {
        this.setState({showOtherForms: !this.state.showOtherForms});
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

        function lemmaClass(state) {
            switch (state.lemmaStateCode) {
                case '1': return 'entered';
                case '2': return 'deleted';
                default: return '';
            }
        }

        return (
            <div className={lemmaClass(this.state)}>
                <WordForm data={mainForm} onClick={this.handleClick.bind(this)}/>
                <div className='formContainer'>
                    {this.state.showOtherForms ? otherForms : null}
                </div>
            </div>
        );
    }
}

export default Lemma;