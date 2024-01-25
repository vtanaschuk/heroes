import {createAction} from "@reduxjs/toolkit";
import {heroesFetching, heroesFetched, heroesFetchingError} from '../components/heroesList/heroesSlice';
import {filtersFetching, filtersFetched, filtersFetchingError} from '../components/heroesFilters/filterSlice'
export const fetchHeroes = (request) => (dispatch) =>{
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) =>{
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => {
            console.log(data);
            return dispatch(filtersFetched(data));
        })
        .catch(() => dispatch(filtersFetchingError()))
}