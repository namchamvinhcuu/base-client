// import { Autocomplete } from '@mui/material'
// import { Autocomplete } from 'material-ui-formik-components/Autocomplete'
import React from 'react'
import { fieldToTextField } from 'formik-material-ui'
import { Autocomplete, TextField } from '@mui/material'

const DropdownList = ({
    variant,
    size,
    label,
    ...props
}) => {
    const {
        form: { setTouched, setFieldValue }
    } = props
    const { error, helperText, ...field } = fieldToTextField(props)
    const { name } = field

    return (
        <Autocomplete
            {...props}
            {...field}
            onChange={(_, value) => setFieldValue(name, value)}
            onBlur={() => setTouched({ [name]: true })}
            isOptionEqualToValue={(item, current) => item === current}
            renderInput={props => (
                <TextField
                    {...props}
                    helperText={helperText}
                    error={error}
                    variant={variant || "outlined"}
                    size={size || "small"}
                    label={label || ""}
                />
            )}
        />
    )
}

export default DropdownList;