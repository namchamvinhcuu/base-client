import { Button, Grid } from '@mui/material';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../FormikControl/index';

export default function LoginForm() {

    const selectList = [
        { 'id': 1, 'label': 'Test1' },
        { 'id': 2, 'label': 'Test2' },
        { 'id': 3, 'label': 'Test3' },
        { 'id': 4, 'label': 'Test4' },
    ]

    const genderList = [
        { 'id': 1, 'title': 'Male' },
        { 'id': 2, 'title': 'Female' },
        { 'id': 3, 'title': 'Other' },
    ]

    const favoriteList = [
        { 'id': 1, 'title': 'Coding' },
        { 'id': 2, 'title': 'Female' },
        { 'id': 3, 'title': 'Music' },
    ]

    const initialLoginModel = {
        userName: "123",
        userPassword: "1234",
        // skills: null,
        skills: [],
        gender: 1,
        favorite: [],
        date: new Date()
    };
    const loginFormValidation = Yup.object().shape({
        userName: Yup.string()
            .required("Username is required !"),
        userPassword: Yup.string()
            .required("Password is required !"),
        skills: Yup.array().min(1, "Skill is required !"),
        // skills: Yup.object().required("Skill is required !").nullable(),
        favorite: Yup.array().min(1, "Favorite is required, asleast 1 !"),
        // favorite: Yup.array().min(1).of(Yup.string().required()).required(),

        date: Yup.date().required("Date is required !"),
    });


    return (
        <Formik
            initialValues={{ ...initialLoginModel }}
            validationSchema={loginFormValidation}
            onSubmit={(values, { setStatus, resetForm }) => {
                console.log(values);
                resetForm()
            }}
        >
            {/* {formikProps => {
                const { values, error, touched } = formikProps;
                console.log({ values, error, touched })

                return ( */}
            <Form style={{ marginTop: '20px' }}>
                <Grid
                    container spacing={2}
                >
                    <Grid item xs={12}>
                        <FastField
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

                    <Grid item xs={12}>
                        <FastField
                            name="skills"
                            component={FormikControl.DropdownList}

                            label="Skills"
                            options={selectList}
                            multiple
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FastField
                            name="gender"
                            component={FormikControl.RadioGroup}

                            label="Gender"
                            options={genderList}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <FastField
                            name="favorite"
                            label="Favorite"
                            options={favoriteList}
                            row={1}

                            component={FormikControl.CheckboxList}
                        />

                    </Grid>

                    <Grid item xs={12}>
                        {/* <FormikControl.DatePicker
                            name="date"
                            label="Date"
                        /> */}

                        <FastField
                            name="date"
                            label="Date"

                            component={FormikControl.DatePicker}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button type='submit'>Submit</Button>
                    </Grid>
                </Grid>
            </Form>
            {/* ) */}
            {/* }} */}
        </Formik>
    )
}
