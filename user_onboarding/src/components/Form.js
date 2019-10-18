import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from "yup";
import axios from 'axios';

function UserForm({ values, errors, touched }) {
    const [user, setUser] = useState({});
    return (
        <Form>
            <Field type="text" name="name" placeholder="Enter Name" />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field type="email" name="email" placeholder="Enter Email" />
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <Field type="password" name="password" placeholder="Enter Password" />
            {touched.name && errors.name && <p className="error">{errors.password}</p>}
            <label htmlFor="terms"><Field  type="checkbox" name="terms" checked={values.terms} id="terms" /> Terms of Service</label>
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues: ({ name, email, password, terms }) => {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Enter your name'),
        email: Yup.string().email().required('Enter your email'),
        password: Yup.string().min(4, 'Password must be longer than 4 characters').required('Enter your password')
    }),
    handleSubmit(values, { resetForm }) {
        axios.post('https://reqres.in/api/users', values)
        .then(response => {
            console.log(response.values);
            resetForm();
        }).catch(error => {
            console.log(error);
        })
        console.log(values);
    }
})(UserForm);

export default FormikUserForm;