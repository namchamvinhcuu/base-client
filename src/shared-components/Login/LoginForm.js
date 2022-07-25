import { Button, TextField } from '@mui/material';
import { FastField, Form, Formik } from 'formik'
import React from 'react'
import Controls from '../Controls';

export default function LoginForm() {
    return (
        <Formik>
            {formikProps => {
                //do something here ...
                const { values, errors, touched } = formikProps;

                return (
                    <Form>

                        <FastField
                            name="userName"
                            component={Controls.Input}

                            margin="normal"
                            required
                            fullWidth
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="userName"
                            autoComplete="userName"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Form>
                )
            }}
        </Formik>
    )
}
