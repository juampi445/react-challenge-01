import './../styles/list.css';
import { getPokemons, setLoader } from "../actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import Pagination from './myPagination';
import LoadingGif from '../images/LoadingGif.gif'
import { Card } from './Card'

export const ListPokemons = () => {

  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);

  const [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(setLoader());
    dispatch(getPokemons(0))
  },[dispatch])

  const pagination = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <div className='all-container'>

            <div className='container-list'>
                {
                    loading ?
                    <img style={{height:'20%'}} src={ LoadingGif } alt='gif de loading'/> :
                    pokemons instanceof Error ? 
                    <label className='message'>No se encontraron pokémon, revise su conexión</label> :
                    pokemons.map(el => {
                        return <Card pokemon={el}/>
                    })
                }
            </div>
        
        <Pagination
            items={pokemons.length}
            page={page}
            pagination={pagination}
        />
    </div>
  )
}