import { Field, Form as FormikForm, Formik, useField } from 'formik';
import Form from "react-bootstrap/Form"
import React, { memo } from 'react';

const MasterCheckBox = (props) => {
    const [field] = useField(props);
    const {setFieldValue, checked} = props;

    return (
        <Form.Check 
        {...field}
        {...props}
        onChange={() => {checked ? setFieldValue("members", []) : setFieldValue("members", ["1", "2", "3", "4"])}}
        />
    )
}

const NormalCheckBox = (props) => {
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
                        <Field name="members" type="checkbox" value="0" checked={JSON.stringify(optionValues) === JSON.stringify(values.members)} as={MasterCheckBox} setFieldValue={setFieldValue} label={"Master Check Box"} />
                        <Field name="members" type="checkbox" value="1" label={"Checkbox 1"} as={NormalCheckBox}/>
                        <Field name="members" type="checkbox" value="2" label={"Checkbox 2"} as={NormalCheckBox}/>
                        <Field name="members" type="checkbox" value="3" label={"Checkbox 3"} as={NormalCheckBox}/>
                        <Field name="members" type="checkbox" value="4" label={"Checkbox 4"} as={NormalCheckBox}/>
                </FormikForm>
                <pre>{`values: ${JSON.stringify(values, null, 2)}`}</pre>
                </div>
            )}
        </Formik>
    );
});


FormikFormComponent.displayName = "FormikFormComponent"

export default FormikFormComponent;