import { Button, Grid } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikControl/index';

export default function LoginForm() {

    // const selectList = [
    //     { id: 1, label: 'Test1' },
    //     { id: 2, label: 'Test2' },
    //     { id: 3, label: 'Test3' },
    //     { id: 4, label: 'Test4' },
    // ]

    // const genderList = [
    //     { id: 1, title: 'Male' },
    //     { id: 2, title: 'Female' },
    //     { id: 3, title: 'Other' },
    // ]

    // const favoriteList = [
    //     { id: 1, title: 'Coding' },
    //     { id: 2, title: 'Female' },
    //     { id: 3, title: 'Music' },
    // ]


    const initialLoginModel = {
        userName: "",
        userPassword: "",
        // skills: null, // only one selection
        // skills: [], // multiple selection
        // gender: 1,
        // favorite: [],
        // date: new Date(),
        // confirm: false
    };

    const loginFormValidation = Yup.object().shape({
        userName: Yup.string()
            .required("Username is required !"),
        userPassword: Yup.string()
            .required("Password is required !"),
        // skills: Yup.object().required("Skill is required !").nullable(), only one selection
        // skills: Yup.array().min(1, "Skill is required !"), // multiple selection

        // favorite: Yup.array().min(1, "Favorite is required, asleast 1 !"),
        // date: Yup.date().required("Date is required !"),
    });


    return (
        <Formik
            initialValues={{ ...initialLoginModel }}
            validationSchema={loginFormValidation}
            onSubmit={(values, { setStatus, resetForm }) => {
                console.log(values)
                resetForm()
            }}
        >
            <Form style={{ marginTop: '20px' }}>
                <Grid
                    container spacing={2}
                >
                    <Grid item xs={12}>
                        <FastField
                            focus
                            name='userName'
                            label='Username'

                            component={FormikControl.Input}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FastField
                            name='userPassword'
                            label='Password'
                            type='password'

                            component={FormikControl.Input}
                        />
                    </Grid>

                    {/* <Grid item xs={12}>
                        <FastField
                            name="skills"
                            label="Skills"
                            options={selectList}
                            multiple

                            component={FormikControl.DropdownList}
                        />
                    </Grid> */}

                    {/* <Grid item xs={12}>
                        <FastField
                            name="gender"
                            label="Gender"
                            options={genderList}
                            row={+true}

                            component={FormikControl.RadioGroup}
                        />
                    </Grid> */}

                    {/* <Grid item xs={12}>
                        <FastField
                            name="favorite"
                            label="Favorite"
                            options={favoriteList}
                            row={+true}

                            component={FormikControl.CheckboxList}
                        />

                    </Grid> */}

                    {/* <Grid item xs={12}>
                        <FastField
                            name="date"
                            label="Date"

                            component={FormikControl.DatePicker}
                        />
                    </Grid> */}

                    {/* <Grid item xs={12}>
                        <FastField
                            name="confirm"
                            label="I agree"

                            component={FormikControl.CheckboxConfirm}
                        />
                    </Grid> */}

                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            {/* <Grid item xs={4} /> */}

                            <Grid item xs={6}>
                                <FormikControl.ButtonReset />
                            </Grid>

                            <Grid item xs={6}>
                                {/* <FormikControl.ButtonSubmit /> */}
                                <Button
                                    type="submit"
                                    style={{ backgroundColor: '#42a5f5', color: 'inherit' }}
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}
