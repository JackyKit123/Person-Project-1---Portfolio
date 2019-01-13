import * as History from "history";
import * as React from 'react';
import Background from '../Background/App';
import Particle from '../Particle/App'
import Trail from '../Trail/App'
import notFound from './404.png';
import './index.css'

interface IHistory {
    history: History.History;
}

export default class extends React.Component<IHistory> {
    constructor(props: IHistory) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    public render() {
        return (
            <Background>
                <Particle />
                <div id='container'>
                    <div className='message'>Oh well you found me, but this is probably not what you are looking for, try again!</div>
                    <div><img src={notFound} /></div>
                    <div className='message message404 pointer' onClick={this.goBack}>404 Not found, click here to go back!</div>
                </div>
                <Trail />
            </Background>
        )
    }

    private goBack() {
        this.props.history.goBack();
    }
}