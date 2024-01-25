import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchFilters, fetchHeroes} from '../../actions';
import {filtersFetching, filtersFetched, filtersFetchingError, filterChange} from './filterSlice'

const HeroesFilters = () => {
    const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state.filters);

    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {

        dispatch(fetchFilters(request));

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