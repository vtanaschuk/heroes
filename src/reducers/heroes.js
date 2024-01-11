const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: state.activeFilter === 'all' ?
                    action.payload :
                    action.payload.filter(item => item.element === state.activeFilter),
                heroesLoadingStatus: 'idle',
            }
        case 'HEROES_DELETED':
            const newHeroList = state.heroes.filter(item=> item.id !== action.payload)
            return {
                ...state,
                heroes: newHeroList,
                filteredHeroes: state.activeFilter === 'all' ?
                    newHeroList :
                    newHeroList.filter(item => item.element === state.activeFilter)
            }
        case 'HERO_CREATED':
            const newCreatedHeroList = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newCreatedHeroList,
                filteredHeroes: state.activeFilter === 'all' ?
                    newCreatedHeroList :
                    newCreatedHeroList.filter(item => item.element === state.activeFilter)
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        default: return state
    }
}

export default heroes;