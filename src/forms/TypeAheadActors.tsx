import {actorMovieDTO} from '../actors/actors.model';
import {Typeahead} from 'react-bootstrap-typeahead';
import { ReactElement, useState } from 'react';

export default function TypeAheadActors(props:typeAheadActorsProps){
    const actors = [
        {id:1, name:'Linda', character:'', picture:'https://media.allure.com/photos/5f42721d23bef1617fd1311c/1:1/w_1750,h_1750,c_limit/selena-gomez-rare-lede.jpg'},
        {id:2, name:'Laura', character:'', picture:'https://biografieonline.it/img/bio/i/Irene_Grandi.jpg'},
        {id:3, name:'Jonathan', character:'', picture:'https://tv-fanatic-res.cloudinary.com/iu/s--X7MJLlhK--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1583173002/impatient-rehabber-all-american-s2e15.jpg'}
    ]
    //console.log(actors);

    const selected:actorMovieDTO[] = [];
    const [draggedElement, setDraggedElement] = useState<actorMovieDTO | undefined>(undefined);

    function handleDragStart(actor:actorMovieDTO){
        setDraggedElement(actor);
    }

    function handleDragOver(actor:actorMovieDTO){
        if(!draggedElement){
            return;
        }
        if(actor.id !== draggedElement.id){
            const draggedElementIndex = props.actors.findIndex(x => x.id === draggedElement.id);
            const actorIndex = props.actors.findIndex(x => x.id === actor.id);

            const actors =[...props.actors];
            actors[actorIndex] = draggedElement;
            actors[draggedElementIndex] = actor;
            props.onAdd(actors); 
        }
    }

    return(
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead 
                id="typeahead"
                filterBy={['name']} 
                labelKey="name"
                onChange={actors => {
                    if(props.actors.findIndex(x => x.id === actors[0].id) === -1){
                        props.onAdd([...props.actors, actors[0]]);
                    }
                    console.log(actors);}}
                options={actors}
                placeholder='Write the name of the actor...'
                minLength={1}
                flip={true}
                selected={selected}
                renderMenuItemChildren ={actor =>(
                    <>
                        <img alt='actor' src={actor.picture} 
                        style={{height:'64px' , marginRight:'10px', width:'64px'}}
                        />
                        <span>{actor.name}</span>
                    </>
                )}
            /> 
            <ul className='list-group'>
                {props.actors.map(actor => 
                <li key={actor.id} 
                    draggable={true} 
                    onDragStart={()=> handleDragStart(actor)}
                    onDragOver={()=> handleDragOver(actor)}
                    className='list-group-item list-group-item-action'>
                    {props.listUI(actor)}
                    <span className='badge badge-primary badge-pill pointer text-dark'
                    style={{marginLeft:'0.5rem'}}
                    //onClick={()=> console.log(actor)}
                     onClick={()=> props.onRemove(actor)}
                    >X</span>
                </li>)}
            </ul>
        </div>
    )
}

interface typeAheadActorsProps{
 displayName: string;
 actors: actorMovieDTO[];
 onAdd(actors:actorMovieDTO[]): void;
 onRemove(actor:actorMovieDTO): void;
 listUI(actor:actorMovieDTO): ReactElement
}