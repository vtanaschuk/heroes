import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    activeFilter: 'all',
    filtersLoadingStatus: 'idle',
    filteredHeroes: []
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        filtersFetching: state => { state.filtersLoadingStatus= 'loading' },
        filtersFetched: (state, action)=>{
            console.log(action.payload, '777');
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
        filtersFetchingError: state => {
            state.filtersLoadingStatus = 'error';
        },
        filterChange: (state, action)=>{
            state.activeFilter= action.payload
        },
    }
})

const {actions, reducer} = filterSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterChange,
} = actions;