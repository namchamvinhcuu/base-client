import { TextField } from '@mui/material'
import React from 'react'
import { useField } from 'formik'

// export default function Input({
//     name,
//     variant,
//     size,
//     type,
//     fullWidth,

//     ...rest
// }) {
//     const [field, meta] = useField(name)

//     const configInput = {
//         ...field,
//         ...rest,
//         fullWidth: !fullWidth ? true : false,
//         variant: variant || "outlined",
//         size: size || "small",
//         type: type || "text"
//     };


//     if (meta && meta.touched && meta.error) {
//         configInput.error = true;
//         configInput.helperText = meta.error;
//     }

//     return (
//         <TextField {...configInput} />
//     )
// }

export default function Input(props) {

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
