const initialState = {
    pages: 0,
    pokemons: [],
    loading: false
}

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

function rootReducer(state=initialState, action){
    switch(action.type){
        case 'GET_POKEMONS':
            let pokemons = action.payload;
            if(pokemons instanceof Error === false){
                pokemons = pokemons.results.map(el => {
                    return {
                        name: el.name.split('-').map(el => el[0].toUpperCase() + el.substring(1)).join(' '),
                        img: `${imgUrl}${el.url.split('/').slice(-2,-1)}.png`
                    }
                })
            }
            return {
                ...state,
                pages: pokemons instanceof Error ? 0 : Math.ceil(action.payload.count/30),
                pokemons: pokemons,
                loading: false
            }
        case 'LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default: return state; 
    }
}

export default rootReducer;