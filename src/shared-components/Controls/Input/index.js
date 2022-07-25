import { TextField } from '@mui/material'
import React from 'react'

export default function Input(props) {

    const { name, type, label, value, error = null, onChange, ...other } = props;
    return (
        <TextField
            variant='outlined'
            type={type}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && { error: true, helperText: error })}
            size="small"
        />
    )
}
