import React from 'react'
import { TextField } from '@mui/material'
// import { useField } from 'formik'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// export default function DatePicker({
//     name,
//     ...rest
// }) {

//     const [field, meta] = useField(name);

//     const configDatePicker = {
//         ...field,
//         ...rest,
//         type: 'date',
//         variant: 'outlined',
//         fullWidth: true,
//         size: 'small',
//         InputLabelProps: {
//             shrink: true
//         }
//     }

//     if (meta && meta.touched && meta.error) {
//         configDatePicker.error = true;
//         configDatePicker.helperText = meta.error;
//     }

//     return (
//         <TextField {...configDatePicker} />
//     )
// }

export default function DatePicker(props) {

    const {
        field, form: { setFieldValue, errors, touched },

        label, size, variant
    } = props;

    const { name, value } = field;

    // const configDatePicker = {
    //     ...field,
    //     label: label || '',
    //     type: 'date',
    //     // inputFormat: "dd/mm/yyyy",
    //     variant: variant || 'outlined',
    //     fullWidth: true,
    //     size: size || 'small',
    //     InputLabelProps: {
    //         shrink: true
    //     }
    // }
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
        // <TextField {...configDatePicker} />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                value={value}
                inputFormat="dd/MM/yyyy"
                onChange={value => setFieldValue(name, value)}
                renderInput={(params) => <TextField {...params} {...configInput} />}
            />
        </LocalizationProvider>
    )
}
