import React from 'react'
import ButtonComponents from './ReusableComponent/ButtonComponents'
import InputComponents from './ReusableComponent/InputComponents'
import TextareaComponents from './ReusableComponent/TextareaComponents'
import * as yup from 'yup'
import { useFormik } from 'formik'


function AppointmentForm() {
    const initialValues = {
        name: "",
        email: "",
        phoneNumber: "",
        comment: ""
    }

    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Enter vailed Email').required('Email is required'),
        phoneNumber: yup.number().required('Phone Number is required'),
        comment: yup.string().required('Comment is required')
    })

    const onSubmit = (data) => {
        console.log('this is value', data)
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log("error", formik)

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='container-fluid'>
                    <div className='py-3 px-5'>
                        <h1>Appointment Form</h1>
                        <div className='row my-4'>
                            <div className='col-md'>
                                <label>Name</label>
                                <InputComponents type='text' name='name' className='form-control w-50' placeholder='Enter Your Name' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                {(formik.errors.name && formik.touched.name && <div className='text-danger'>{formik.errors.name}</div>)}
                            </div>
                            <div className='row my-4'>
                                <div className='col-md'>
                                    <label>Email</label>
                                    <InputComponents type='email' name='email' className='form-control w-50' placeholder='Enter Your Email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {(formik.errors.email && formik.touched.email && <div className='text-danger'>{formik.errors.email}</div>)}

                                </div>
                            </div>
                            <div className='row my-1'>
                                <div className='col-md'>
                                    <label>Phone Number</label>
                                    <InputComponents type='number' name='phoneNumber' className='form-control w-50' placeholder='Enter Your Phone number' value={formik.values.phoneNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {(formik.errors.phoneNumber && formik.touched.phoneNumber && <div className='text-danger'>{formik.errors.phoneNumber}</div>)}

                                </div>
                            </div>
                            <div className='row my-4'>
                                <div className='col-md'>
                                    <p>Comment</p>
                                    <TextareaComponents name='comment' className='w-25' placeholder='Enter Your Comment' />
                                    {(formik.errors.comment && formik.touched.comment && <div className='text-danger'>{formik.errors.comment}</div>)}

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md'>
                                    <ButtonComponents type='submit' variant='info' name='Submit' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>

    )
}

export default AppointmentForm