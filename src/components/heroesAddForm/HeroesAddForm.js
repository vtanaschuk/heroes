import {useHttp} from '../../hooks/http.hook';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {heroCreated, heroesFetchingError} from '../heroesList/heroesSlice'
import { selectAll} from '../heroesFilters/filterSlice';
import store from "../../store";
import { useCreateHeroMutation } from "../../api/apiSlice";

const HeroesAddForm = () => {
    const {filtersLoadingStatus} = useSelector(state => state.filters);
    const filters = selectAll(store.getState())
    const dispatch = useDispatch();
    const {request} = useHttp();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')

    const [createHero, {isLoading}] = useCreateHeroMutation()

    const elOptions =  filters.map(el=> {
        // if( el.name === 'all' ) return
        return <option value={el.name}>{el.label}</option>
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(element);
        const newHero =     {
            id: Date.now(),
            name,
            description,
            element
        }

        createHero(newHero).unwrap();
        // request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
        //     .then(res => console.log(res))
        //     .then(dispatch(heroCreated(newHero)))
        //     .catch(() => dispatch(heroesFetchingError()))


        setName('')
        setDescription('');
        setElement('')
    }
    return (
        <form
            className="border p-4 shadow-lg rounded"
            onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Ім'я нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name"
                    placeholder="Як мене звуть?"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Опис</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Що я вмію?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Обрати супер силу</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e)=>setElement(e.target.value)}>
                    {elOptions}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Створити</button>
        </form>
    )
}

export default HeroesAddForm;