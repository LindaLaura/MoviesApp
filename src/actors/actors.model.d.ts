export interface actorCreationDTO{
    name: string;
    dateOfBirth?: Date ;// means that the DOB is optional
    picture?: File; // if the user selects a new image it will put in this property(picture)
    pictureURL?: string; // (editing)to put the url for an existing image
    biography?: string;
}

export interface actorMovieDTO{
    id:number;
    name:string;
    character:string;
    picture:string

}