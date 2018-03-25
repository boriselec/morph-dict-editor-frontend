import React, {Component} from 'react';
import Lemma from "./Lemma";

class LemmaList extends Component {
    render() {
        let url = this.props.url;
        let lemmaNodes = this.props.data.map(function (lemma) {
            return (
                <Lemma data={lemma} url={url}/>
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