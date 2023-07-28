import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function ValidationTaskthree() {

    const onSubmit = (data) => {
        console.log ('this is value',data)
    }
    const initialValues = {
        email : "",
        number : ""
    }

    const validationSchema = yup.object({
        email: yup.string().email().required("Email Dalo"),
        number: yup.number().required("Only numnber dalo")
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    // console.log("Formik is::", formik)

    
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input type='input' className='form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email'   />
            {(formik.errors.email && formik.touched.email) && <span className='text-danger'>{formik.errors.email}</span>}
            <input type='input' className='form-control mb-2' name='number' value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your Mo.no.'  />
            {(formik.errors.number && formik.touched.number) && <span className='text-danger'>{formik.errors.number}</span>}
            <br />
            <button type='submit' className='btn btn-info'>Submit</button>
        </form>
    </div>
  )
}

export default ValidationTaskthree