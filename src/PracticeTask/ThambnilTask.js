import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import * as yup from 'yup'

function ThambnilTask() {
    const [data, setData] = useState([])

    const initialValues = {
        title: "",
        thumbnail: "",
        type: "",
        url: "",
        vedioDiscription: "",
        gnre: "",
    }

    const validationSchema = yup.object({
        title: yup.string().required(),
        thumbnail: yup.string().required(),
        type: yup.string().required(),
        url: yup.string().required(),
        vedioDiscription: yup.string().required(),
        gnre: yup.string().required(),

    })

    const onSubmit = (flag) => {
        console.log("validation::", flag)
        const data = {
            title: flag.title,
            thumbnail: flag.thumbnail,
            type: flag.type,
            url: flag.url,
            vedioDiscription: flag.vedioDiscription,
            gnre: flag.gnre,
        }
        setData(prev => ([...prev, data]))

    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='m-5'>
                    <label>Title</label>
                    <input type='text' className='form-control w-50 m-2' name='title' value={formik.values.title} onChange={formik.handleChange} />
                    {(formik.errors.title && formik.touched.title && <div className='text-danger'>{formik.errors.title}</div>)}

                    <label>ThumbNail</label>
                    <input type='text' className='form-control w-50 m-2' name='thumbnail' value={formik.values.thumbnail} onChange={formik.handleChange} />
                    {(formik.errors.thumbnail && formik.touched.thumbnail && <div className='text-danger'>{formik.errors.thumbnail}</div>)}

                    <label>Type</label>
                    <input type='text' className='form-control w-50 m-2' name='type' value={formik.values.type} onChange={formik.handleChange} />
                    {(formik.errors.type && formik.touched.type && <div className='text-danger'>{formik.errors.type}</div>)}

                    <label>Url</label>
                    <input type='text' className='form-control w-50 m-2' name='url' value={formik.values.url} onChange={formik.handleChange} />
                    {(formik.errors.url && formik.touched.url && <div className='text-danger'>{formik.errors.url}</div>)}

                    <label>Vedio Discription</label>
                    <input type='text' className='form-control w-50 m-2' name='vedioDiscription' value={formik.values.vedioDiscription} onChange={formik.handleChange} />
                    {(formik.errors.vedioDiscription && formik.touched.vedioDiscription && <div className='text-danger'>{formik.errors.vedioDiscription}</div>)}

                    <label>Gnre</label>
                    <input type='text' className='form-control w-50 m-2' name='gnre' value={formik.values.gnre} onChange={formik.handleChange} />
                    {(formik.errors.gnre && formik.touched.gnre && <div className='text-danger'>{formik.errors.gnre}</div>)}

                    <button className='btn btn-info m-5 d-flex justify-content-center'>Submit</button>
                </div>
            </form>

            {/* {data.map((item, index) => {
                return (<Card key={index} className='my-5' style={{ width: '35rem', height: '50px', background: item }}>
                    <Card.Body className='p-0'>
                        <div className='d-flex justify-content-between m-2'>
                            <div className=''>{item.title}</div>
                            <div >
                                <img style={{ width: '20rem', height: '200px' }} alt='thumbnail' src={item} className='my-5' />
                            </div>
                            <div className=''>{item.type}</div>
                            <div className=''>{item.url}</div>
                            <div className=''>{item.vedioDiscription}</div>
                            <div className=''>{item.gnre}</div>
                        </div>
                    </Card.Body>
                </Card>)
            })} */}
            {data.map((item, index) => {

              return(  <div className="card" style={{width: '18rem'}} key={index}>
                    <img src={item.thumbnail} className="card-img-top" alt="...." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.type}</p>
                            <p className="card-text">{item.url}</p>
                            <p className="card-text">{item.vedioDiscription}</p>
                            <p className="card-text">{item.gnre}</p>
                        </div>
                </div>)
            })}
        </>
    )
}

export default ThambnilTask