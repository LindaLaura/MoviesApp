import { Link} from "react-router-dom";
import {Formik, Form, FormikHelpers}  from 'formik';
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import {genreCreationDTO} from './genres.model'

export default function GenreForm(props: genreFormProps){
    return(
        <>
            <Formik initialValues={props.model} 
                onSubmit={ props.onSubmit}
                validationSchema={Yup.object({
                    name: Yup.string().required('this field is required').firstLetterUppercase()
                })}>
                    {(formikProps) => 
                        <Form>
                            <TextField field='name' displayName='Name'/>
                            <Button className='btn btn-primary' disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                            <Link className='btn btn-secondary' to='/genres'>Cancel</Link>
                        </Form>
                    }
            </Formik>
        </>
    )
}

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void
}