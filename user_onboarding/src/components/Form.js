import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';

// Name
// Email
// Password
// Terms of Service(checkbox)
// A Submit button to send our form data to the server.

function UserForm({ values }) {
    // const [user, setUser] = useState('');
    return (
        <Form>
            <Field type="text" name="name" placeholder="name" />
        </Form>
    )
}

const FormikUserForm = withFormik({

})(UserForm);

export default UserForm;