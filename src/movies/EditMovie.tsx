import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movietheaters/movieTheater.model';
import MovieForm from './MovieForm';

export default function EditMovie(){

    const nonSelectedGenres: genreDTO[]= [
        {id:2, name:'Drama'}
    ]
    const selectedGenres: genreDTO[]= [
        {id:1, name:'Comedy'}
    ]

    const nonSelectedMovieTheaters: movieTheaterDTO[]= [
        {id:2, name:'Agora'}
    ]

    const selectedMovieTheaters: movieTheaterDTO[]= [
        {id:1, name:'Sambil'}
    ]
    
    return(
        <>
            <h3>Edit Movie </h3>
            <MovieForm 
                model={{title:'Toy Story', inTheaters: false, trailer:'url', releaseDate: new Date('2019-01-01T00:00:00')}}
                onSubmit={values => console.log(values)}
                selectedGenres={selectedGenres}
                nonSelectedGenres={nonSelectedGenres}
                selectedMovieTheaters={selectedMovieTheaters}
                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedActors={[]}
            />
        </>
    )
}