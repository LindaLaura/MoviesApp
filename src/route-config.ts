//Genres
import IndexGenres from './genres/IndexGenres';
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';

import LandingPage from './movies/LandingPage';

//Actors
import IndexActors from './actors/IndexActors';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';

//MovieTheaters
import IndexMoviesTheaters from './movietheaters/IndexMoviesTheaters';
import CreateMovieTheater from './movietheaters/CreateMovieTheater';
import EditMovieTheater from './movietheaters/EditMovieTheater';


//Movies
import EditMovie from './movies/EditMovie';
import CreateMovie from './movies/CreateMovie';
import FilterMovies from './movies/FilterMovies';

//Redirect page
import RedirectToLandingPage from './utils/RedirectToLandingPage';
 
const routes = [
    { path: '/genres', component: IndexGenres, exact: true },
    { path: '/genres/create', component: CreateGenre },
    { path: '/genres/edit/:id', component: EditGenre },

    { path: '/actors', component: IndexActors, exact: true },
    { path: '/actors/create', component: CreateActor},
    { path: '/actors/edit/:id', component: EditActor },

    { path: '/movietheaters', component: IndexMoviesTheaters, exact: true },
    { path: '/movietheaters/create', component: CreateMovieTheater},
    { path: '/movietheaters/edit/:id', component: EditMovieTheater },

    { path: '/movies/create', component: CreateMovie},
    { path: '/movies/edit/:id', component: EditMovie },
    { path: '/movies/filter', component: FilterMovies },

    { path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes