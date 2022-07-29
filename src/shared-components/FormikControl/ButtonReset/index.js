import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from '@mui/material'

export default function ButtonReset() {
    const { resetForm } = useFormikContext();

    const handleReset = () => {
        resetForm();
    }

    const configResetButton = {
        variant: 'contained',
        color: 'inherit',
        fullWidth: true,
        onClick: handleReset
    }

    return (
        <Button
            {...configResetButton}
        >
            Reset
        </Button>
    )
}
