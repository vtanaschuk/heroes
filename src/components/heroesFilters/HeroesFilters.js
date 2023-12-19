
// Завдання для цього компонента:
// Фільтри повинні формуватися на підставі завантажених даних
// Фільтри повинні відображати лише потрібних героїв під час виборів
// Активний фільтр має клас active
// Змінювати json-файл для зручності МОЖНА!
// Уявіть, що ви попросили бекенд-розробника про це

const HeroesFilters = () => {
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Відфільтруйте героев силі</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active">Всі</button>
                    <button className="btn btn-danger">Вогонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Вітер</button>
                    <button className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;