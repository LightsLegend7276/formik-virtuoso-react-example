import { Field, Form, Formik, useField } from 'formik';
import React, { memo } from 'react';

const FormikForm = memo(() => {
    const optionValues = ["1", "2", "3", "4"];


    return (
        <Formik
        initialValues={{members: []}}
        onSubmit={() => {}}
        validateOnBlur={false}>
            {({values, setFieldValue}) => (
                <div className='form-container'>
                <Form>
                    <label>Master Check Box
                        <Field name="members" type="checkbox" value="0" onChange={() => {checked ? setFieldValue("members", []) : setFieldValue("members", ["1", "2", "3", "4"])}} checked={JSON.stringify(optionValues) === JSON.stringify(values.members)} />
                    </label>
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
                </Form>
                <pre>{`values: ${JSON.stringify(values, null, 2)}`}</pre>
                </div>
            )}
        </Formik>
    );
});

// const MasterCheckBox = (props) => {
//     const [field] = useField(props);

//     return (
//         <Form.Check 
//     )
// }

FormikForm.displayName = "FormikForm"

export default FormikForm;