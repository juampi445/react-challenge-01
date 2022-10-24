import axios from 'axios';

export function setLoader(){
    return {
        type:'LOADING',
        payload: true
    }
}

export function getPokemons(page){
    return async function(dispatch){
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${page*30}`)
        .then((json => {
            return dispatch({
                type: 'GET_POKEMONS',
                payload: json.data
            })
        }))
        .catch((error)=>{return dispatch({
            type: 'GET_POKEMONS',
            payload: error
        })})
    }
}
