import {useHttp} from '../../hooks/http.hook';
import {useState} from "react";
import {heroCreated, heroesFetchingError} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const HeroesAddForm = () => {
    const dispatch = useDispatch();
    const {request} = useHttp();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        const newHero =     {
            id: Date.now(),
            name,
            description,
            element
        }
        console.log(newHero);

        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
            .then(res => console.log(res))
            .then(dispatch(heroCreated(newHero)))
            .catch(() => dispatch(heroesFetchingError()))


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
                    <option >Моя супер сила...</option>
                    <option value="fire">Вогонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Вітер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Створити</button>
        </form>
    )
}

export default HeroesAddForm;