import {createAction} from "@reduxjs/toolkit";

export const fetchHeroes = (request) => (dispatch) =>{
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) =>{
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }


export const heroesDelete = createAction('HEROES_DELETED');
// export const heroesDelete = (id) => {
//     return {
//         type: 'HEROES_DELETED',
//         payload: id
//     }
// }

export const heroCreated = createAction('HERO_CREATED');
// export const heroCreated = (newHero) => {
//
//     return {
//         type: 'HERO_CREATED',
//         payload: newHero
//     }
// }
export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}
export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}
export const filterChange = (name) => (dispatch) =>{
    setTimeout(()=>{
        dispatch (
            {
                type: 'FILTER_CHANGE',
                payload: name
            }
        )
    }, 1000)
}