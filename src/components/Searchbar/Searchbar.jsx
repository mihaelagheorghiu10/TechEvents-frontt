import React, { useContext } from 'react'
import * as Yup from 'yup'
import EventListContext from '../../context/EventListContext'
import { useFormik } from 'formik'
import styles from './searchbar.module.css'

const Searchbar = () => {
  const context = useContext(EventListContext)
  console.log(context)
  let searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, 'Introduce al menos 3 caracteres a buscar')
      .max(20, 'El número máximo de caracteres es 20'),
  })

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: searchSchema,
    onSubmit: (values) => {
      console.log(values)
      context.setFilterBy(values.search);      
      // TODO go to component eventlist
    },
  })

  return (
    <div className={styles.searchbarContainer}>
      <form onSubmit={formik.handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Introduce texto a buscar (min 3 caracteres)..."
          onChange={formik.handleChange}
          value={formik.values.search}
          className={styles.inputSearchbar}
        />
        {formik.errors.search ? (
          <div className={styles.formikErrorMsg}>{formik.errors.search}</div>
        ) : null}
        <button type="submit" className={styles.btnSearch}>
          buscar
        </button>
      </form>
    </div>
  )
}

export default Searchbar
