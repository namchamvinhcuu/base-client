import React from 'react'
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@mui/material';
import { pink } from '@mui/material/colors';
import _ from 'lodash'

export default function RadioGroupWrapper(props) {

    const {
        field, form: { setFieldValue },

        label, options, size, row
    } = props;

    const { name, value, onChange, onBlur } = field;


    return (
        <FormControl>
            <FormLabel style={{ fontSize: '0.8rem' }}>{label}</FormLabel>
            <RadioGroup
                row={row === 1 ?? false}
                value={value}
                onChange={(event) => {
                    setFieldValue(name, event.target.value);
                }}
            >
                {
                    options.map(
                        (option) => (
                            <FormControlLabel
                                key={option.id}
                                value={option.id}
                                control={
                                    <Radio
                                        size={size || 'small'}
                                        style={{
                                            color: pink[800],
                                            '&.MuiChecked': {
                                                color: pink[600],
                                            },
                                            padding: '0 11px',
                                        }}
                                    />}
                                label={option.title} />
                        )
                    )
                }
            </RadioGroup>
        </FormControl>
    )
}