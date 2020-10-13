import React, { Component } from 'react';
import './search.css'

export default class Search extends Component {
    state={output:""}
    render() {
        return (
            <div>
                <h1 class="header">MY SEARCH APP by Emma</h1>
                <div className="FormSearch">
                    <form>
                        <input type="text" placeholder="Search.." onChange={e=>this.setState({output: e.target.value})}/>

                    </form>
                  <p>{this.state.output}</p>
                </div>
            </div>
        )
    }
}