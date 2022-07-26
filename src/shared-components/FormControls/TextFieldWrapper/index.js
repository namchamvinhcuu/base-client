import { TextField } from '@mui/material'
import React from 'react'
import { useField } from 'formik'

const TextFieldWrapper = ({
    name,
    variant,
    size,
    type,
    fullWidth,

    ...otherProps
}) => {


    const [field, metaData] = useField(name)

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth: !fullWidth ? true : false,
        variant: variant || "outlined",
        size: size || "small",
        type: type || "text"
    };

    if (metaData && metaData.touched && metaData.error) {
        configTextField.error = true;
        configTextField.helperText = metaData.error;
    }

    return (
        <TextField {...configTextField} />
    )
};

export default TextFieldWrapper;

