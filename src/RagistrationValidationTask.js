import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'


function RagistrationValidationTask() {

    const [tableList, setTableList] = useState([])

    const onSubmit = (data) => {
        console.log('this is value', data)
        console.log('en,sdkjfdd', data.email)
        // alert(JSON.stringify(data))

        const item = {
            firstname: data.firstname,
            lastname: data.lastname,
            company: data.company,
            email: data.email,
            area: data.area,
            phone: data.phone,
            gender: data.gender,
            hobby: data.hobby,
            skill: data.skill,
        }

        setTableList(prev => ([...prev, item]))

    }

    const initialValues = {
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
        area: "",
        gender: "",
        hobby: "",
        skill: []
    }

    const validationSchema = yup.object({
        firstname: yup.string().required('First name is required'),
        lastname: yup.string().required('Last name is required'),
        company: yup.string().required('Company is required'),
        email: yup.string().email().required('Email is required'),
        phone: yup.number().required('Phone is required'),
        area: yup.number().required('Area is required'),
        gender: yup.string().required('Gender is required'),
        hobby: yup.string().required('Hobby is required'),
        skill: yup.array().min(1, 'Please select atleast one').required('Skill is required')

    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    console.log("Formik is::", formik)

    return (
        <>
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='container'>
                    <div className='py-3 px-5'>

                        <div className='row my-3'>
                            <div className='col bg-dark  text-center mx-2 my-auto p-2'><p className='text-light h5 my-auto'>REGISTRATION FORM</p></div>
                        </div>

                        <div className='row my-5'>
                            <div className='col-2 text-center'>
                                <label>Name</label>
                            </div>
                            <div className='col-5'>
                                <input type='input' className='form-control' name='firstname' value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your first Name' />
                                {(formik.errors.firstname && formik.touched.firstname) && <div className='text-danger'>{formik.errors.firstname}</div>}

                            </div>
                            <div className='col-5'>
                                <input type='input' className='form-control' name='lastname' vlaue={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your last name' />
                                {(formik.errors.lastname && formik.touched.lastname) && <div className='text-danger'>{formik.errors.lastname}</div>}
                            </div>
                        </div>

                        <div className='row my-4'>
                            <div className='col-2 text-center'>
                                <label>Company</label>
                            </div>
                            <div className='col-10'>
                                <input type='input' className='form-control' name='company' vlaue={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your company name' />
                                {(formik.errors.company && formik.touched.company) && <div className='text-danger'>{formik.errors.company}</div>}
                            </div>
                        </div>

                        <div className='row my-5'>
                            <div className='col-2 text-center'>
                                <label>Email</label>
                            </div>
                            <div className='col-10'>
                                <input type='input' className='form-control' name='email' vlaue={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='nameexample@email.com' />
                                {(formik.errors.email && formik.touched.email) && <div className='text-danger '>{formik.errors.email}</div>}

                            </div>
                        </div>

                        <div className='row my-2'>
                            <div className='col-2 text-center'>
                                <label>Phone</label>
                            </div>
                            <div className='col-2'>
                                <input type='input' className='form-control' name='area' value={formik.values.area} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter Area code' />
                                {(formik.errors.area && formik.touched.area) && <div className='text-danger'>{formik.errors.area}</div>}
                            </div>
                            <div className='col-8 '>
                                <input type='input' className='form-control' name='phone' vlaue={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your phone no.' />
                                {(formik.errors.phone && formik.touched.phone) && <div className='text-danger'>{formik.errors.phone}</div>}
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-md d-flex'>
                                <div className='col-md-2 text-center'>
                                    <label>Gender</label>
                                </div>
                                <div className='col-md-10'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="male" checked={formik.values.gender === "male"} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="female" onChange={formik.handleChange} onBlur={formik.handleBlur} checked={formik.values.gender === "female"} />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                    {(formik.errors.gender && formik.touched.gender) && <div className='text-danger'>{formik.errors.gender}</div>}

                                </div>
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-md-2 text-center'>
                                <label>Hobby</label>
                            </div>
                            <div className='col-md-10 d-flex'>
                                <select className="form-select form-control w-25" name="hobby" ariaLabel="Default select example" value={formik.values.hobby} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                                    <option >Select your hobby</option>
                                    <option value="dancing">Dancing</option>
                                    <option value="singing">Singing</option>
                                    <option value="cricket">Cricket</option>
                                    <option value="football">Football</option>
                                    <option value="hocy">Hocy</option>
                                    <option value="runing">Runing</option>
                                </select>

                                {(formik.errors.hobby && formik.touched.hobby) && <div className='text-danger'>{formik.errors.hobby}</div>}
                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className='col-md-2 text-center'>
                                Skills
                            </div>
                            <div className='col-md-10 '>
                                <div className="form-check">
                                    <input className="form-check-input" name='skill' type="checkbox" id="flexCheckDefault" value="html" checked={formik.values.skill.includes('html')} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        HTML
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" name="skill" type="checkbox" id="flexCheckChecked" value="css" checked={formik.values.skill.includes('css')} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        CSS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" name="skill" type="checkbox" id="flexCheckChecked" value="java" checked={formik.values.skill.includes('java')} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        JAVA
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" name="skill" type="checkbox" id="flexCheckChecked" value="bootStrap" checked={formik.values.skill.includes('bootStrap')} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        BOOTSTRAP
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" name="skill" type="checkbox" id="flexCheckChecked" value="react" checked={formik.values.skill.includes('react')} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        REACT
                                    </label>
                                </div>
                                {(formik.errors.skill && formik.touched.skill) && <div className='text-danger'>{formik.errors.skill}</div>}

                            </div>
                        </div>
                        <div className='row my-5'>
                            <div className=' col-md text-center'>
                                <button type='submit' className='btn btn-danger w-25'>REGISTER</button>
                            </div>
                        </div>


                    </div>
                </div>

            </form >
            <div className='row'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Company</th>
                            <th scope="col">Email</th>
                            <th scope="col">Area</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Skill</th>
                        </tr>
                    </thead>
                    {tableList.map((item, index) => {
                        return (<tbody className='col-md mx-2' key={index}>

                            <tr>
                                <th scope="row">1</th>
                                <td>{item.firstname}</td>
                                <td>{item.lastname}</td>
                                <td>{item.company}</td>
                                <td>{item.email}</td>
                                <td>{item.area}</td>
                                <td>{item.phone}</td>
                                <td>{item.gender}</td>
                                <td>{item.hobby}</td>
                                <td>{item.skill}</td>

                            </tr>

                        </tbody>


                        )

                    })}
                </table>
            </div >
</div>
        </>
    )
}
export default RagistrationValidationTask