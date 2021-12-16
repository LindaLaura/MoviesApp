import {Formik, Form, FormikHelpers} from 'formik';
import {movieCreationDTO} from './movies.model';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import Button from '../utils/Button';
import TextField from '../forms/TextField';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import CheckboxField from '../forms/CheckboxField';
import TypeAheadActors from '../forms/TypeAheadActors';
import MultipleSelector, { multipleSelectorModel } from '../forms/MultipleSelector';
import { useState } from 'react';
import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movietheaters/movieTheater.model';
import { actorMovieDTO } from '../actors/actors.model';


export default function MovieForm(props:movieFormProps){

    const [selectedGenres, setSelectedGenres] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenres] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setselectedMovieTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    const [selectedActors, setSelectedActors] = useState(props.selectedActors)


    function mapToModel(items:{id:number, name:string}[]): multipleSelectorModel[]{
        return items.map(item =>{
            return{key: item.id, value: item.name}
        })
    }

    return(
        <Formik initialValues={props.model} 
            onSubmit={(values, actions) => {
                values.genresIds= selectedGenres.map(item => item.key);
                values.movieTheatersIds= selectedMovieTheaters.map(item => item.key);
                values.actors = selectedActors;
                props.onSubmit(values, actions);
            }} 
            validationSchema= {Yup.object({
                title: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField displayName='Title' field='title'/>
                    <CheckboxField displayName='In Theaters' field='inTheaters'/>
                    <TextField displayName='Trailer' field='trailer'/>
                    <DateField displayName='releaseDate' field='releaseDate'/>
                    <ImageField displayName='Poster' field='poster' 
                        imageURL={props.model.posterURL}
                    />

                    <MultipleSelector displayName='Genres' nonSelected={nonSelectedGenres} selected={selectedGenres}
                        onChange={(selected, nonSelected) =>{
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }}
                    />

                    <MultipleSelector displayName='Movie Theaters' nonSelected={nonSelectedMovieTheaters} selected={selectedMovieTheaters}
                        onChange={(selected, nonSelected) =>{
                            setselectedMovieTheaters(selected);
                            setNonSelectedMovieTheaters(nonSelected);
                        }}
                    />

                    <TypeAheadActors displayName= '' actors={selectedActors}
                        onAdd={actors =>{ setSelectedActors(actors)}}
                        onRemove={ actor =>{
                            console.log('Sono in remove', actor)
                             const actors = selectedActors.filter(x => x !== actor);
                             setSelectedActors(actors);
                        }}
                        listUI={(actor: actorMovieDTO) => 
                            <>
                                {actor.name} / <input placeholder='Character' type='text' value={actor.character}
                                onChange={e =>{
                                    const index = selectedActors.findIndex(x => x.id === actor.id);
                                    const actors = [...selectedActors];
                                    actors[index].character = e.currentTarget.value;
                                    setSelectedActors(actors);
                                }} />
                            </>
                        }
                    />

                    <Button className='btn btn-primary' disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className='btn btn-secondary' to='/movies'>Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps{
    model: movieCreationDTO
    onSubmit(values: movieCreationDTO, actions:FormikHelpers<movieCreationDTO>): void;
    selectedGenres:genreDTO[];
    nonSelectedGenres:genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    selectedActors:actorMovieDTO[];
}