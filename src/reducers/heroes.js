import {createReducer} from "@reduxjs/toolkit";

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroesDelete,
} from '../actions'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = createReducer(initialState, {

        [heroesFetching] : state => {
            state.heroesLoadingStatus = 'loading'
        },
        [heroesFetched] : (state, action)=>{
            state.heroesLoadingStatus = 'idle';
            state.heroes= action.payload;
        },
        [heroesFetchingError] : state => {
            state.heroesLoadingStatus = 'error';
        },
        [heroCreated] : (state, action)=>{
            state.heroes.push(action.payload);
        },
        [heroesDelete] : (state, action)=>{
            state.heroes= state.heroes.filter(item=> item.id !== action.payload);
        },
    },
    [],
    state => state
)



// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading'
//         })
//         .addCase(heroesFetched, (state, action)=>{
//             state.heroesLoadingStatus = 'idle';
//             state.heroes= action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(heroCreated,(state, action)=>{
//             state.heroes.push(action.payload);
//         })
//         .addCase(heroesDelete,(state, action)=>{
//             state.heroes= state.heroes.filter(item=> item.id !== action.payload);
//         })
//         .addDefaultCase(()=>{})
// })

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle',
//             }
//         case 'HEROES_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item=> item.id !== action.payload),
//
//             }
//         case 'HERO_CREATED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'error'
//             }
//         default: return state
//     }
// }

export default heroes;