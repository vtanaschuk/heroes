
// Завдання для цього компонента:
// Реалізувати створення нового героя із запровадженими даними. Він має потрапляти
// у загальний стан і відображатись у списку + фільтруватися
// Унікальний ідентифікатор персонажа можна згенерувати через uiid
// Ускладнене завдання:
// Персонаж створюється і файлі json за допомогою методу POST
// Додатково:
// Елементи <option></option> бажано сформувати на базі
// даних із фільтрів

import {useState} from "react";

const HeroesAddForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [element, setElement] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('hello')
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