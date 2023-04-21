import * as yup from "yup";

export const optFormIntialValues = {
    email: ''
}

export const optFormValidationSchema = yup.object().shape({
    email: yup.string().required('Required!')
})