import { Field, Form as FormikForm, Formik, useField } from 'formik';
import Form from "react-bootstrap/Form"
import React, { memo } from 'react';

const MasterCheckBox = (props) => {
    const [field] = useField(props);
    const {setFieldValue, checked} = props;

    return (
        <Form.Check 
        label={"Master Check Box"}
        {...field}
        {...props}
        onChange={() => {checked ? setFieldValue("members", []) : setFieldValue("members", ["1", "2", "3", "4"])}}
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
                        <Field name="members" type="checkbox" value="0" checked={JSON.stringify(optionValues) === JSON.stringify(values.members)} as={MasterCheckBox} setFieldValue={setFieldValue} />
                    <label>Checkbox 1
                        <Field name="members" type="checkbox" value="1"/>
                    </label>
                    <label>Checkbox 2
                        <Field name="members" type="checkbox" value="2"/>
                    </label>
                    <label>Checkbox 3
                        <Field name="members" type="checkbox" value="3"/>
                    </label>
                    <label>Checkbox 4
                        <Field name="members" type="checkbox" value="4"/>
                    </label>
                </FormikForm>
                <pre>{`values: ${JSON.stringify(values, null, 2)}`}</pre>
                </div>
            )}
        </Formik>
    );
});


FormikFormComponent.displayName = "FormikFormComponent"

export default FormikFormComponent;