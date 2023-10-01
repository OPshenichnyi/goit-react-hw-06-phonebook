import { Formik,ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import { CssInput, WrapperForm } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я ]*$/, 'Must be string')
        .min(3, 'Must be at least 3 characters long')
        .required('Required'),
    number: Yup.number().required('Required'),
});

export const ContactForm = ({addConacts}) => {  
    return (
        <Formik
            validationSchema={SignupSchema}

            initialValues={{
                name: '',
                number: ''
            }}          

            onSubmit={(values, actions) => { 
                values.id = nanoid()
                addConacts(values)
                actions.resetForm(true)
            }}
        >
            <WrapperForm>
                <label htmlFor="name">Name</label>
                <br />
                <CssInput id="name" name="name" placeholder="Name" />
                <br />
                <ErrorMessage name="name" />
                <br />
                <label htmlFor="number">Number</label>
                <CssInput id="number" name="number" placeholder="Number" />
                <br />
                <ErrorMessage name="number" />
                <br />    
                <button type="submit">Submit</button>
            </WrapperForm>
        </Formik>
    )
} 