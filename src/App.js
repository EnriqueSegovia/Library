import React, { Component } from 'react'
import './App.css';
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Components
import Sections from './components/Sections';
import { addSection, selectSection } from './reducers/Sections'
import { addBooks } from './reducers/Books'
import Books from './components/Books';

class App extends Component {
  render () {
    const { 
      sections, 
      addSection, 
      books, 
      addBooks, 
      selectSection, 
      selected, 
    } = this.props

    return (
      <Router>
        <div className="container">
          <h1>Library</h1>
          <Sections 
            selectSection={selectSection} 
            addSection={addSection} 
            sections={sections}
            />
          <hr />
          <Books addBooks={addBooks} selectedSection={selected} books={books}/>
        </div>
      </Router>
  );
}
}

const mapStateToProps = state => {
  const { Sections: { data: sections, selected }} = state
  const { Books: { data: books }} = state

  return {
    sections,
    books: books.filter(x => x.sectionId === selected),
    selected,
  }
}

const mapDispatchToProps = dispatch => ({
  addSection: payload => {
    dispatch(addSection(payload))
    dispatch(reset('section'))
  },
  selectSection: payload => dispatch(selectSection(payload)),
  addBooks: payload => {
    dispatch(addBooks(payload))
    dispatch(reset('book'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
