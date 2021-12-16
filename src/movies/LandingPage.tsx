import MoviesList from './MoviesList';
import {landingPageDTO} from './movies.model';
import React, { useEffect, useState } from 'react';

export default function LandingPage(){
    const [movies, setMovies] = useState <landingPageDTO>({});
    useEffect(() => {
      const timerId = setTimeout(()=>{
        setMovies({
          inTheaters:[
            {
              id: 1,
              title: 'Spider-Man: Far From Home',
              poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
            },
            {
              id: 2,
              title: 'Luca',
              poster: 'https://images.penguinrandomhouse.com/cover/9780736441957'
            },
            {
              id: 3,
              title: 'Harry Potter and the Goblet On fire',
              poster: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png'
            }
          ],
          upComingReleases:[
            {
              id: 4,
              title: 'Soul',
              poster: 'https://i.pinimg.com/736x/0a/12/a4/0a12a44258331bcb12c218584b40d0f6.jpg'
            }
          ]
        })
      }, 1000);
      return () => clearTimeout(timerId); //I am cleaning up the resources
    });
  
    return(
        <>
             <h3>In theaters</h3>
            <MoviesList movies={movies.inTheaters}/>

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upComingReleases}/>
        </>
    )
}