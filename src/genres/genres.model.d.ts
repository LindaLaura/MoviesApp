export interface genreCreationDTO {
    name: string;
}

//serve per display an already existing genre since we don't use the DB
export interface genreDTO{
    id: number;
    name: string;
}