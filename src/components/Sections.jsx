import React, { Component } from 'react'

//Components
import SectionForm from './SectionForm'
import SectionList from './SectionList.jsx'

export default class Sections extends Component {
    render () {
        const { sections, addSection, selectSection } = this.props
        return (
            <>
                <SectionForm onSubmit={addSection}/>
                <SectionList selectSection={selectSection} sections={sections} />
            </>
        )
    }
}