import SectionForm from './SectionForm'
import SectionList from './SectionList'

export default function Sections ({  sections, addSection, selectSection }) {
    return (
        <>
            <SectionForm onSubmit={addSection}/>
            <SectionList selectSection={selectSection} sections={sections} />
        </>
    )
}