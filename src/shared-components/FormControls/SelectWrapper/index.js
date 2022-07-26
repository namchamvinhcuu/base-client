import React from 'react'
import { fieldToTextField } from 'formik-material-ui'
import { Autocomplete, TextField } from '@mui/material'

// const DropdownList = ({
//     variant,
//     size,
//     label,
//     ...props
// }) => {
//     const {
//         form: { setTouched, setFieldValue }
//     } = props
//     const { error, helperText, ...field } = fieldToTextField(props)
//     const { name } = field

//     return (
//         <Autocomplete
//             {...props}
//             {...field}
//             onChange={(_, value) => setFieldValue(name, value)}
//             onBlur={() => setTouched({ [name]: true })}
//             isOptionEqualToValue={(item, current) => item === current}
//             filterSelectedOptions
//             renderInput={props => (
//                 <TextField
//                     {...props}
//                     helperText={helperText}
//                     error={error}
//                     variant={variant || "outlined"}
//                     size={size || "small"}
//                     label={label || ""}
//                 />
//             )}
//         />
//     )
// }

const DropdownList = (props) => {

    const {
        field, form: { setTouched, setFieldValue, errors, touched },

        label, size, variant
    } = props;

    const { name } = field

    const configInput = {
        label: label,
        size: size || "small",
        variant: variant || "outlined",
        fullWidth: true,
    };

    if (touched[name] && errors[name]) {
        configInput.error = true;
        configInput.helperText = errors[name];
    }

    return (
        <Autocomplete
            {...props}
            {...field}
            onChange={(_, value) => setFieldValue(name, value)}
            // onBlur={() => setTouched({ [name]: true })}
            isOptionEqualToValue={(item, current) => item === current}
            filterSelectedOptions
            renderInput={props => (
                <TextField
                    {...props}
                    {...configInput}
                />
            )}
        />
    )
}

export default DropdownList;