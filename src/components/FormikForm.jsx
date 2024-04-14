import { Field, Form as FormikForm, Formik, useField } from 'formik';
import Form from "react-bootstrap/Form"
import React, { memo } from 'react';
import {data} from './utils/Data'
import VirtuosoExample from './VirtuosoExample';

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
    const optionValues = ["1", "2", "3", "4"];


    return (
        <Formik
        initialValues={{members: []}}
        onSubmit={() => {}}
        validateOnBlur={false}>
            {({values, setFieldValue}) => (
                <div className='form-container'>
                <FormikForm>
                        <Field name="members" type="checkbox" value="0" checked={JSON.stringify(data.map((_, i) => { return (i + 1).toString()})) === JSON.stringify(values.members)} as={MasterCheckBox} setFieldValue={setFieldValue}  />
                        <VirtuosoExample />
                </FormikForm>
                <pre>{`values: ${JSON.stringify(values, null, 2)}`}</pre>
                </div>
            )}
        </Formik>
    );
});


FormikFormComponent.displayName = "FormikFormComponent"

export default FormikFormComponent;