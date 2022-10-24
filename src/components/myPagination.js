import React from "react";
import {Pagination, Stack} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, setLoader } from "../actions";


export default function MyPagination({ items, page, pagination })  {

    const pages = useSelector((state) => state.pages);
    const dispatch = useDispatch();

    const handleChange = (event, value) => {
        dispatch(setLoader())
        pagination(value);
        dispatch(getPokemons(value-1))
      };

    const styles = {
        container: {
            backgroundColor:'#F2F2F2', 
            borderRadius: '10px', 
            marginBottom:'20px'
        },
        pagination: {
            padding:'10px', 
            fontWeight:'900'
        }
    }  

    return(
        <Stack spacing={2} sx={styles.container}>
            <Pagination 
                className='pagination'
                count={pages} 
                defaultPage={6} 
                page={page} 
                onChange={handleChange} 
                size="large"
                variant="outlined" 
                shape="rounded"
                color='primary'
                sx={styles.pagination}
            />
        </Stack>    
        ) 
}