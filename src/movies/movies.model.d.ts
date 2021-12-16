//d means that it is a type definition file and it is used for exporting interfaces

import { actorMovieDTO } from "../actors/actors.model";

//DTO stands for data transfer Object its purpose is to be data container
export interface movieDTO {
    id: number;
    title: string;
    poster: string; // image of the movie
}

export interface movieCreationDTO{
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?:number[];
    movieTheatersIds?:number[]
    actors?: actorMovieDTO[];
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upComingReleases?: movieDTO[];
}