import { Formik } from "formik";
import * as yup from 'yup'
import s from './form.module.css'

const Form = (props) => {

    const validationsShema = yup.object().shape({
        first_name: yup.string().typeError('Введите верное Имя').required('Имя'),
        last_name: yup.string().typeError('Введите верную Фамилию').required('Фамилия'),
        email: yup.string().email('Введите верный email').required('Email'),
    })

    return (
        <div  >
            <Formik
                initialValues={{
                    id: '',
                    email: '',
                    first_name: '',
                    last_name: '',
                    avatar: ''
                }}
                onSubmit={(values) => { props.pushUser(values) }}
                validationSchema={validationsShema}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className={s.form_inner}>
                        <div >
                            <p className={s.form_name_input}>Имя:</p>
                            <p className={s.form_name_input}>Фамилия:</p>
                            <p className={s.form_name_input}>Email:</p>
                        </div>
                        <div>
                            <p className={s.form_input}>
                                <label htmlFor={'name'}> </label>
                                <input
                                    placeholder='Введите имя'
                                    className={s.form_input_name}
                                    type={'text'}
                                    name={'first_name'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name} />
                            </p>
                            <p className={s.form_input}>
                                <label htmlFor={'last_name'}></label>
                                <input
                                    placeholder='Введите фамилию'
                                    className={s.form_input_last_name}
                                    type={'text'}
                                    name={'last_name'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name} />
                            </p>
                            <p className={s.form_input}>
                                <label htmlFor={'email'}></label>
                                <input
                                    placeholder='Введите Email'
                                    className={s.form_input_email}
                                    type={'text'}
                                    name={'email'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
                            </p>
                            <button
                                className={s.form_btn}
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type='submit'>
                                Добавить сотрудника
                            </button>
                        </div>
                        <div className={s.form_errors}>
                            <span >
                                {touched.first_name && errors.first_name && <p className={s.form_error}>{errors.first_name}</p>}
                            </span>
                            <span >
                                {touched.last_name && errors.last_name && <p className={s.form_error}>{errors.last_name}</p>}
                            </span>
                            <span >
                                {touched.email && errors.email && <p className={s.form_error}>{errors.email}</p>}
                            </span>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Form;