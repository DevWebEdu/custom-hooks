import React, {useState }from 'react'


export const useForm = (initialForm = {}) => {

    const [formValues, setFormValues] = useState(initialForm)


    const handleForm = ({target}) =>{
        const {name , value } = target
        setFormValues({
            ...formValues,
            [name] : value
        })
    }

    const handleFormReset = () =>{
        setFormValues(initialForm)
    }

    return {
        formValues,
        handleForm,
        handleFormReset
    }
}
