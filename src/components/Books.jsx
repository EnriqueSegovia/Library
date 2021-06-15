import React, { Component } from 'react'

//Components
import BookForm from './BookForm'
import BookList from './BookList.jsx'

export default class Books extends Component {
    handleSubmit = payload => {
        payload.preventDefault()
        const { addBooks, selectedSection } = this.props
        addBooks({...payload, sectionId: selectedSection})
        console.log(payload);
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