import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";

// Name
// Email
// Password
// Terms of Service(checkbox)
// A Submit button to send our form data to the server.

function UserForm({ values }) {
    // const [user, setUser] = useState('');
    return (
        <Form>
            <Field type="text" name="name" placeholder="Enter Name" />
            <Field type="email" name="email" placeholder="Enter Email" />
            <Field type="password" name="password" placeholder="Enter Password" />
            <Field  type="checkbox" name="terms" /> <label htmlFor="terms">Terms of Service</label>
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikUserForm = withFormik({

})(UserForm);

export default FormikUserForm;