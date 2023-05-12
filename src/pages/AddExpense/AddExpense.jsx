import React from 'react'
import Topfold from '../../components/Topfold/Topfold'
import style from './AddExpense.module.css'
import AddForm from '../../components/AddForm/AddForm'

const AddExpense = () => {
  return (
    <div className={style.addExpense}>
        <Topfold />
        <AddForm />
    </div>
  )
}

export default AddExpense