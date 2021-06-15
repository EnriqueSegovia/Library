import React, { Component } from 'react'

export default class SectionList extends Component {
    handleClick = id => () => {
        const {  selectSection  } = this.props
        selectSection(id)
    }

    render(){
        const { sections } = this.props
        return(
            <ul className="list-group">
                {sections.map(x => 
                    <li 
                        id="success-outlined" 
                        className="list-group-item btn btn-dark" 
                        onClick={this.handleClick(x.id)} 
                        key={x.id}>
                            {x.name}
                    </li>)}
            </ul>
        )
    }
}