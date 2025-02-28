import * as Yup from 'yup';

export const authNamaEmailSchema =  Yup.object().shape({
    nama: Yup.string().required("Password must be filled"),
    email: Yup.string().email('Email not valid').required('Email must be filled'),
})