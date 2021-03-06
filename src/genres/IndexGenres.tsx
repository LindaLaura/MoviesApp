import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { genreDTO } from './genres.model';
import {urlGenres} from '../endpoints';

export default function IndexGenres(){
    useEffect(() => {
        axios.get("https://localhost:5001/api/genres")
        .then((response: AxiosResponse<genreDTO[]>) => {
            console.log(response.data);
        })
    }, []);
    console.log(urlGenres, ' ENDPOINTS');
    return(
        <>
            <h3>Genres</h3>
            <Link className='btn btn-primary' to='/genres/create' >Create genre</Link>
        </>
    )
}