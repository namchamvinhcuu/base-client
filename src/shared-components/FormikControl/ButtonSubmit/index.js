import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from '@mui/material'

export default function ButtonSubmit() {

    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configSubmitButton = {
        variant: 'contained',
        color: 'primary',
        fullWidth: true,
        onClick: handleSubmit
    }

    return (
        <Button
            {...configSubmitButton}
        >
            Submit
        </Button>
    )
}
