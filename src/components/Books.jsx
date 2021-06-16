import BookForm from './BookForm'
import BookList from './BookList'

export default function Books ({ addBooks, selectedSection, books }) {

    const handleSubmit = (payload) => {
        addBooks({...payload, sectionId: selectedSection})
    }
        return (
            <>
                <BookForm onSubmit={handleSubmit}/>
                <BookList books={books} />
            </>
        )
    }
