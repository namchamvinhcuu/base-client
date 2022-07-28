import { Autocomplete, TextField } from '@mui/material';

export default function DropdownList(props) {

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

