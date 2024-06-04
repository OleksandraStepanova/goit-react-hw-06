import { useDispatch } from 'react-redux';
import { changeFilter} from '../../redux/filtersSlice';
import css from './SearchBox.module.css'

export default function SearchBox() {

    const dispatch = useDispatch();    
    const handleFilter = e => dispatch(changeFilter(e.target.value.trim()))
    return (
        <>
            <h2>Find contact by name</h2>
            <input type="text" onChange ={handleFilter} className={css.input} />
        </>
    )
}