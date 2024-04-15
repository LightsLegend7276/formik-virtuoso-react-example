import { Field, Form as FormikForm, Formik, useField } from 'formik';
import Form from "react-bootstrap/Form"
import React, { memo } from 'react';
import {data} from './utils/Data'
import VirtuosoList from './VirtuosoList';

const MasterCheckBox = (props) => {
    const [field] = useField(props);
    const {setFieldValue, checked} = props;

    return (
        <Form.Check 
        {...field}
        {...props}
        onChange={() => {checked ? setFieldValue("members", []) : setFieldValue("members", data.map((_, i) => { return (i + 1).toString()}))}}
        />
    )
}

export const NormalCheckbox = (props) => {
    const [field] = useField(props);

    return (
        <Form.Check
        {...field}
        {...props}
        />
    )
}

const FormikFormComponent = memo(() => {

    return (
        <Formik
        initialValues={{members: []}}>
            {({values, setFieldValue}) => (
                <div className='form-container'>
                <FormikForm>
                        <Field className={"master-checkbox"} name="members" type="checkbox" value="0" checked={JSON.stringify(data.map((_, i) => { return (i + 1).toString()})) === JSON.stringify(values.members)} as={MasterCheckBox} setFieldValue={setFieldValue} />
                        <VirtuosoList />
                </FormikForm>
                <pre>{`values: ${JSON.stringify(values, null, 2)}`}</pre>
                </div>
            )}
        </Formik>
    );
});


FormikFormComponent.displayName = "FormikFormComponent"

export default FormikFormComponent;