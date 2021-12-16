import {Field, useFormikContext} from 'formik';
import ReactMarkdown from 'react-markdown';
import './MarkdownField.css';

export default function MarkdownField(props: markDownFieldProps){

    const {values} = useFormikContext<any>(); //acces value of the field
    return(
        <div className='mb-3 form-markdown'>
            <div>
                <label>{props.displayName}</label>
                <div>
                    <Field name={props.field} as='textarea' className='form-textarea'/>
                </div>
                <div>
                    <label>{props.displayName} (preview):</label>
                    <div>
                        <ReactMarkdown>{values[props.field]}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface markDownFieldProps{
    displayName:string;
    field:string
}