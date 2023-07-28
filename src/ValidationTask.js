import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function ValidationTask() {
    const initialValues = {
        title: "",
        heading: ""
    }

    const validationSchema = yup.object({
        title: yup.string().required(),
        heading: yup.string().required()
    })

    const onSubmit = (data) => {
        console.log("Value is::", data)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
console.log("error",formik)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type='input' className='form-control mb-2' name="title" value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                {(formik.errors.title && formik.touched.title && <div className='text-danger'>{formik.errors.title}</div>)}

                <input type='input' className='form-control mb-2' name="heading" value={formik.values.heading} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                {(formik.errors.heading && formik.touched.heading && <div className='text-danger'>{formik.errors.heading}</div>)}

                <button type='submit' className='btn btn-info mx-2' >Click</button>
            </form>
        </div>
    )
}

export default ValidationTask