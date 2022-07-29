import {
    Checkbox, FormControl, FormControlLabel
} from "@mui/material";
import { pink } from '@mui/material/colors';
import { ErrorMessage } from "formik";
import { useState } from "react";


export default function CheckboxConfirm(props) {
    const {
        field, form: { setFieldValue },

        label
    } = props;

    const { name, value } = field

    return (
        <>
            <FormControl>
                <FormControlLabel
                    {...props}
                    control={
                        <Checkbox
                            {...field}
                            checked={value}
                            size='small'
                            onChange={(e) => {
                                setFieldValue(name, e.target.checked)
                            }}
                            style={{
                                color: pink[800],
                                '&.MuiChecked': {
                                    color: pink[600],
                                },
                                padding: '0 11px',
                            }}
                        />
                    }
                    label={label}
                />
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

        </>
    )
}
