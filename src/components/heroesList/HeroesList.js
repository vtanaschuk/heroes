import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect, useMemo} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import {createSelector} from "reselect";

import {heroesDelete, fetchHeroes, selectAll} from './heroesSlice';

import { useGetHeroesQuery } from "../../api/apiSlice";

const HeroesList = () => {

    const {
        data: heroes = [],
        isLoading,
        isError,
    } = useGetHeroesQuery();

    const activeFilter = useSelector(state => state.filters.activeFilter)

    const filteredHeroes = useMemo(() => {
        if (activeFilter === 'all') {
            return heroes;
        } else {
            return heroes.filter(item => item.element === activeFilter);
        }
    }, [heroes, activeFilter]);



    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();


    useEffect(() => {
        dispatch(fetchHeroes());
        // eslint-disable-next-line
    }, []);

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(data => console.log(data, 'Deleted'))
            .then(dispatch(heroesDelete(id)))
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [request]);



    if (isLoading) {
        return <Spinner/>;
    } else if (isError) {
        return <h5 className="text-center mt-5">Помилка завантаження</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героїв поки немає</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props} onDelete={(id)=>onDelete(id)}/>
        })
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const filteredHeroes = (heroes);
    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;