import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function ImageField(props: imageFieldProps){
    const [imageBase64, setImageBase64] = useState(''); // I am using it because i want to rerender the compenent so  the user can be able to see it on the screen
    const [imageURL, setImageURL] = useState(props.imageURL);
    const {values} = useFormikContext<any>(); // allow us to acces the values of the formik form

    const divStyle = {marginTop:'10px'};
    const imgStyle ={width:'425px'};

    const handleOnchange = (eventsArgs: ChangeEvent<HTMLInputElement>) =>{
        if(eventsArgs.currentTarget.files){
            const file = eventsArgs.currentTarget.files[0];
            if(file){ //the image come from the computer
                toBase64(file)
                .then((base64Representation: string) => setImageBase64(base64Representation))
                .catch(error => console.error(error));
                values[props.field] = file; //if the user selects the file from its compute, sending up the file to the parent component
                setImageURL(''); // because I don't want to have 2 images at the same time when the user select an image from its computer
            }else{
                setImageBase64(''); //if the user wants to select the file and then select cancel
            }
        }
    }

    //helperfunction
    const toBase64 = (file: File) =>{
        return new Promise<string>((resolve, reject) =>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=> resolve(reader.result as string);
            reader.onerror = ()=> reject(Error);
        })
    }

    return(
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <div>
                <input type='file' accept='.jpg, .jpeg, .png' onChange={handleOnchange}/>
            </div>
            {imageBase64 ? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageBase64} alt='selected'/>
                </div>
            </div>: null}
            {imageURL ? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imageURL} alt='selected'/>
                </div>
            </div>: null}
        </div>
    )
}

interface imageFieldProps{
    displayName: string;
    imageURL: string; // useful when we are editing an actor. I have to be able to retrieve the url of the choosen file
    field: string //  I need it to pass to the parent component the selected image
}

ImageField.defaultProps ={
    imageURL:''
}