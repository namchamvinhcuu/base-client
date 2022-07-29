import {
    Checkbox, FormControlLabel
} from "@mui/material";
import { pink } from '@mui/material/colors';


export default function CheckboxConfirm(props) {
    const {
        field, form: { setFieldValue },

        label
    } = props;

    const { name, value } = field

    return (
        <FormControlLabel
            control={
                <Checkbox
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
    )
}
