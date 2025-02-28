'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { authNamaEmailSchema } from '../features/auth/formikNamaEmail/schemas/authNamaEmailSchema'




const CompFormik = () => {
 
  const handleSubmit = (nama:string,email:string) => {
    console.log('berhasil ke trigger',nama," ",email)
  }
  return (
    <div>
      <Formik
      initialValues={{
        nama:'',
        email:''
      }}
      validationSchema={authNamaEmailSchema}
      onSubmit={(values) =>
        handleSubmit(values.nama,values.email)
      }
      >
      {({values}) => (
        <Form>
           <label className="input-field">
                <Field name="nama" type="text" className="grow" placeholder="nama" />
            </label>
            {values.nama}
            <ErrorMessage name='nama' className='text-red-700' component={'div'}/>
            <label className="input-field">
                <Field name="email" type="text" className="grow" placeholder="Email" />
            </label>
            {values.email}
            <ErrorMessage name='email' className='text-red-700' component={'div'}/>
            <button type="submit">
              Simpan
            </button>
        </Form>
      )}

      </Formik>
    </div>
  );
}

export default CompFormik