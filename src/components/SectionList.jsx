export default function SectionList ({ selectSection, sections }) {

    const handleClick = id => (e) => {
        e.preventDefault()
        selectSection(id)
    }

    return(
        <ul className="list-group mr-auto">
            {sections.map(x => 
                <li 
                    id="success-outlined" 
                    className="list-group-item btn btn-dark" 
                    onClick={handleClick(x.id)} 
                    key={x.id}
                    >
                        {x.name}
                </li>)}
        </ul>
    )
}