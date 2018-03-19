import React, {Component} from 'react';
import Lemma from "./Lemma";

class LemmaList extends Component {
    render() {
        let lemmaNodes = this.props.data.map(function (lemma) {
            return (
                <Lemma data={lemma}/>
            );
        });

        return (
            <div>
                {lemmaNodes}
            </div>
        );
    }
}

export default LemmaList;