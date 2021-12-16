import { Formik, FormikHelpers, Form} from "formik";
import {Link} from "react-router-dom";
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import {actorCreationDTO} from './actors.model';
import * as Yup from 'yup';
import DateField from '../forms/DateField';
import ImageField from '../forms/ImageField';
import MarkDownField from '../forms/MarkdownField';

export default function ActorForm(props: actorFormProps){
    return(
        <Formik initialValues={props.model} onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('this field is required').firstLetterUppercase(),
            dateOfBirth: Yup.date().nullable().required('this field is required')
        })}>
            {(formikProps) => (
                <Form>
                    <TextField  displayName='Name' field='name'/>
                    <DateField displayName='Date of Birth' field='dateOfBirth'/>
                    <ImageField displayName='Picture' imageURL={props.model.pictureURL} field='picture' />
                    <MarkDownField displayName='Biography' field='biography'/>
                    <Button disabled={formikProps.isSubmitting} type='submit' onClick={() => ''} className='btn btn-primary'> Save Changes </Button>
                    <Link to='/actors' className='btn btn-secondary'>Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface actorFormProps{
    model: actorCreationDTO;
    onSubmit(values: actorCreationDTO, action: FormikHelpers<actorCreationDTO>): void;
}