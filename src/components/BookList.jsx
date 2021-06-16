import React, { Component } from 'react'

export default class BookList extends Component {
    render(){
        const { books } = this.props
        return(
            books.map(x => 
                <div key={x.id} class="card">
                    <div class="card-body">
                        <h5 class="card-title">{x.title}</h5>
                        <p class="card-text">{x.author}</p>  
                    </div>
                </div>
            )
        )
    }
}