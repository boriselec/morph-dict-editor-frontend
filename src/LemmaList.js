import React, {Component} from 'react';

class LemmaList extends Component {
    render() {
        let lemmaNodes = this.props.data.map(function(lemma, index) {
            return (
                <div key={index}>{lemma.l.t}</div>
            );
        });

        return (
            <div id="project-lemmata" className="lemmaList">
                <ul>
                    {lemmaNodes}
                </ul>
            </div>
        );
    }
}

export default LemmaList;