
// Завдання для цього компонента:
// Фільтри повинні формуватися на підставі завантажених даних
// Фільтри повинні відображати лише потрібних героїв під час виборів
// Активний фільтр має клас active
// Змінювати json-файл для зручності МОЖНА!
// Уявіть, що ви попросили бекенд-розробника про це

import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filtersFetched, filtersFetching, filtersFetchingError, filterChange} from '../../actions';

const HeroesFilters = () => {
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
        // eslint-disable-next-line
    }, []);
    const renderFiltersList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фільтрів поки немає</h5>
        }

        return arr.map(({name, label, className}) => {
            return (
                <button
                    className={`btn ${className}  ${activeFilter===name ? 'active' : '' }`}
                    onClick={()=>dispatch(filterChange(name))}>
                    {label}
                </button>
            )
        })
    }

    const elements = renderFiltersList(filters);

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Відфільтруйте героев силі</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;