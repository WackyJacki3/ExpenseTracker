import React from 'react'
import style from './ExpenseList.module.css'
import Card from './Card';
import { useSelector } from 'react-redux';
import { addExpense } from '../../redux/actions/actions'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExpenseList = () => {
    
    const expenses = useSelector((state) => state.expenseList);
    const query = useSelector((state) => state.expenseList);

    const notifySuccess = () => toast.success("Expense Deleted!");
    // console.log(expenses);
    // const array = expenseList.length;
  return (
    <div className={style.expenseList}>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme="light"
        />
        {expenses.length ? expenses.map(item=>(
            <Card item={item} key={item.title} notifySuccess={notifySuccess}/>

        )) 
        :
        <div className={style.emptyState}>
            <img 
                src="https://img.freepik.com/free-vector/men-multitasking-with-computer-phone_23-2148409476.jpg?w=826&t=st=1683894541~exp=1683895141~hmac=664860ee286417b9f470275f9d5d2a4a4e535163b9071fb937558895801e030d" 
                alt="Empty List" 
                className={style.emptyImage}
            />
            <label>Currently Empty...</label>
        </div>}

    </div>
  )
}

export default ExpenseList