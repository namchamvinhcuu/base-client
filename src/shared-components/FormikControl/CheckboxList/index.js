import {
    Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel
} from "@mui/material";
import { pink } from '@mui/material/colors';
import { ErrorMessage, useField } from "formik";

// export default function CheckboxList({
//     options,
//     label,
//     name,
//     row = false,
//     ...props
// }) {

//     const [field] = useField(name);
//     const { value } = field;

//     return (
//         <FormControl>
//             {label && <FormLabel size='small' style={{ fontSize: '0.8rem' }}>{label}</FormLabel>}

//             <FormGroup row={row}>
//                 {options.map((opt) => (
//                     <FormControlLabel
//                         {...field}
//                         {...props}
//                         control={
//                             <Checkbox
//                                 value={opt.id}
//                                 checked={value.includes(opt.id.toString())}
//                                 size='small'
//                                 style={{
//                                     color: pink[800],
//                                     '&.MuiChecked': {
//                                         color: pink[600],
//                                     },
//                                     padding: '0 11px',
//                                 }}
//                             />
//                         }
//                         key={opt.id}
//                         label={opt.title}
//                     />
//                 ))}
//             </FormGroup>

//             <ErrorMessage name={name} component="span" style={
//                 {
//                     color: '#d32f2f'
//                     , fontSize: '0.75rem'
//                     , fontWeight: '400'
//                     , letterSpacing: '0.03333em'
//                     , marginLeft: '14px'
//                 }
//             } />
//         </FormControl>
//     )
// }

export default function CheckboxList(props) {

    const {
        field,

        label, options, row
    } = props;

    const { name, value } = field

    return (
        <FormControl>
            {label && <FormLabel size='small' style={{ fontSize: '0.8rem' }}>{label}</FormLabel>}

            <FormGroup row={row === 1 ?? false} >
                {options.map((opt) => (
                    <FormControlLabel
                        {...field}
                        {...props}
                        control={
                            <Checkbox
                                value={opt.id}
                                checked={value.includes(opt.id.toString())}
                                size='small'
                                style={{
                                    color: pink[800],
                                    '&.MuiChecked': {
                                        color: pink[600],
                                    },
                                    padding: '0 11px',
                                }}
                            />
                        }
                        key={opt.id}
                        label={opt.title}
                    />
                ))}
            </FormGroup>

            <ErrorMessage name={name} component="span" style={
                {
                    color: '#d32f2f'
                    , fontSize: '0.75rem'
                    , fontWeight: '400'
                    , letterSpacing: '0.03333em'
                    , marginLeft: '14px'
                }
            } />
        </FormControl>
    )
}
