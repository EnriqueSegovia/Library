import SectionForm from './SectionForm'
import SectionList from './SectionList.jsx'

export default function Sections ({  sections, addSection, selectSection }) {
    return (
        <>
            <SectionForm onSubmit={addSection}/>
            <SectionList selectSection={selectSection} sections={sections} />
        </>
    )
}