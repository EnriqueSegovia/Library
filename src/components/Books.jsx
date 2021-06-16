import React, { Component } from 'react'

//Components
import BookForm from './BookForm'
import BookList from './BookList.jsx'

export default class Books extends Component {
    handleSubmit = payload => {
        const { addBooks, selectedSection } = this.props
        addBooks({...payload, sectionId: selectedSection})
    }
    render () {
        const { books } = this.props
        return (
            <>
                <BookForm onSubmit={this.handleSubmit}/>
                <BookList books={books} />
            </>
        )
    }
}