export default function SectionList ({ selectSection, sections }) {
    const handleClick = id => () => {
        selectSection(id)
    }
    return(
        <ul className="list-group">
            {sections.map(x => 
                <li 
                    id="success-outlined" 
                    className="list-group-item btn btn-dark" 
                    onClick={handleClick(x.id)} 
                    key={x.id}>
                        {x.name}
                </li>)}
        </ul>
    )
}