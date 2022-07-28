import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { pink } from '@mui/material/colors';

export default function RadioGroupWrapper(props) {

    const {
        field,

        label, options
    } = props;

    // const { name, value, onChange, onBlur } = field;

    return (
        <FormControl>
            <FormLabel size='small' style={{ fontSize: '0.8rem' }}>{label}</FormLabel>
            <RadioGroup row
                {...field}
            >
                {
                    options.map(
                        (option, index) => (
                            <FormControlLabel size='small' key={index} value={option.id} control={<Radio size='small' style={{
                                color: pink[800],
                                '&.MuiChecked': {
                                    color: pink[600],
                                },
                                padding: '0 11px',
                            }} />} label={option.title} />
                        )
                    )
                }
            </RadioGroup>
        </FormControl>
    )
}