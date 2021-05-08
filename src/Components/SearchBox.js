import './SearchBox.css';
import {ReactComponent as SearchSvg} from '../svg/search.svg';

const SearchBox = ({state, setState, setSend}) => {

    const handleChange = (e) => {
        setState(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setSend(true)
    }
return(
    <section className='section-searchbox'>
        <form onSubmit={onSubmit}>
            <div style={{position: 'absolute', left: '6px', top: '6px'}}>
            <SearchSvg/>
            </div>
            <input type='text' placeholder='Find a country e.g Poland' className='input-search' onChange={handleChange} value={state}/>
        </form>
    </section>
)
}

export default SearchBox