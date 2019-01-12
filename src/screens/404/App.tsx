import * as React from 'react';
import * as History from "history";
import notFound from './404.png';
import './index.css'
import Particle from '../Particle/App'
import Trail from '../Trail/App'

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
            <>
                <Particle />
                <div id='container'>
                    <div className='message'>Oh well you found me, but this is probably not what you are looking for, try again!</div>
                    <div><img src={notFound} /></div>
                    <div className='message message404 pointer' onClick={this.goBack}>404 Not found, click here to go back!</div>
                </div>
                <Trail />
            </>
        )
    }

    private goBack() {
        this.props.history.goBack();
    }
}