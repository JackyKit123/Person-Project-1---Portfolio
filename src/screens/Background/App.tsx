import * as React from 'react';
import './index.css';

export default class extends React.Component {
    public render() {
        return (
            <div id='background'>
                {this.props.children}
            </div>
        )
    }
}