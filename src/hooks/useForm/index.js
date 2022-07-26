import React, { useState } from 'react'

export default function useForm(initialModel) {
    const [values, setValues] = useState(initialModel);

    const resetForm = () => {
        setValues(initialModel);
    }

    return {
        values,
        setValues,
        resetForm
    }
}
