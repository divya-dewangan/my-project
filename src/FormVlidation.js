import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function FormVlidation() {
  const onSubmit = (data) => {
    console.log("This is a value ::",data)
  }

  const initialValues = {
    address : "",
    number : ""
  }
  
const validationSchema = yup.object({
address : yup.string().required(),
number : yup.number().required()
})

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    // console.log("error",formik)
    return(
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input type='input' className='form-control mb-3' name='address' value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Address'/>
            {(formik.errors.address && formik.touched.address && <div className='text-danger'>{formik.errors.address}</div>)}
            <input type='input' className='form-control mb-3' name='number' value={formik.values.number} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter Pincode' />
            {(formik.errors.number && formik.touched.number && <div className='text-danger'>{formik.errors.number}</div>)}
            <button type='submit' className='btn btn-info'>Submit</button>
        </form>
    </div>
  )
}

export default FormVlidation