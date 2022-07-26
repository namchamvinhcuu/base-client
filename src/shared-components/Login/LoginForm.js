import { Button, Grid } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormControls from '../FormControls';

export default function LoginForm() {

    const selectList = [
        { 'id': 1, 'label': 'Test1' },
        { 'id': 2, 'label': 'Test2' },
        { 'id': 3, 'label': 'Test3' },
        { 'id': 4, 'label': 'Test4' },
    ]

    const initialLoginModel = {
        userName: "",
        userPassword: "",
        skills: null,
        // skills: [],
    };
    const loginFormValidation = Yup.object().shape({
        userName: Yup.string()
            .required("Username is required !"),
        userPassword: Yup.string()
            .required("Password is required !"),
        // skills: Yup.array().min(1, "Skill is required !")
        skills: Yup.object().required("Skill is required !").nullable(),
    });


    return (
        <Formik
            initialValues={{ ...initialLoginModel }}
            validationSchema={loginFormValidation}
            onSubmit={(values, { setStatus, resetForm }) => {
                console.log(values);
                resetForm({ ...initialLoginModel })
            }}
        >
            {formikProps => {
                const { values, error, touched } = formikProps

                return (
                    <Form>
                        <Grid
                            container spacing={2}
                        >
                            <Grid item xs={12}>
                                <FastField
                                    name="userName"
                                    component={FormControls.Input}

                                    label="Username"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                {/* <FormControls.InputField
                                    name="userPassword"
                                    label="Password"
                                    type="password"
                                /> */}
                                <FastField
                                    name="userPassword"
                                    component={FormControls.Input}

                                    label="Password"
                                    type="password"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FastField
                                    name="skills"
                                    component={FormControls.DropdownList}

                                    label="Skills"
                                    options={selectList}
                                // multiple
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type='submit'>Submit</Button>
                            </Grid>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
}
