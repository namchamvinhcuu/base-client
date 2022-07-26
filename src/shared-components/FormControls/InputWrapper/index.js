import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

InputWrapper.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
}

// InputWrapper.defaultProps = {
//     type: "text",
//     label: "",
//     disabled: false,
//     size: "small",
//     variant: "outlined"
// }

export default function InputWrapper(props) {

    const {
        field, form,

        type, label, size, variant
    } = props;

    const { name, value, onChange, onBlur } = field;

    const { errors, touched } = form;


    const configInput = {

        ...field,

        label: label,
        type: type || "text",
        size: size || "small",
        variant: variant || "outlined",
        fullWidth: true,
    };


    if (touched[name] && errors[name]) {
        configInput.error = true;
        configInput.helperText = errors[name];
    }

    return (
        <TextField
            {...configInput}
        />
    )
}
