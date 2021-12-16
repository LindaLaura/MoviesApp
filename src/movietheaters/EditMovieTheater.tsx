import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater(){
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name:'Sambil', latitude:18.49312174643837, longitude:-69.9304246902466}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}