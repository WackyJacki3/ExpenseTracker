import React, { useState } from 'react'
import style from './AddForm.module.css'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './SuccessModal';

const AddForm = () => {
    // const cat = Categories;
    // const [categoryDropdown, setCategoryDropdown] = useState(true); 
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleAmount = (event) => {
        const amount = parseFloat(event.target.value);
        isNaN(amount) === true ? (setAmount('')) : 
        setAmount(amount);
    }

    const handleCategory = (category) => {
        setCategory(category.target.value);
    }

    const handleSubmit = () => {
        if (title === '' || amount === '' || category === '') {
            const notify = () => toast("Please fill in data!");
            notify();
            return;
        } else {
            const data = {
                title,
                amount,
                category,
                createdAt: new Date(),
            }
            console.log(data);
            dispatch(addExpense(data))
            setModalOpen(true);
        }
        
    }   

  return (
    // Add expense Menu
    <div className={style.addForm}>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            theme="light"
        />
        <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <div className={style.topAddForm}>
            <div className={style.formItem}>
                <label>Title</label>
                <input 
                    placeholder='What did you spend?' 
                    value={title}
                    onChange={(e) => handleTitle(e)}
                />
            </div>
            <div className={style.formItem}>
                <label>Amount $</label>
                <input 
                    className={style.amountInput}
                    placeholder='How much was it?' 
                    value={amount}
                    onChange={(e) => handleAmount(e)}
                />
            </div>
            <div className={style.formItem}>
                <label>Category: </label>
                <input 
                    className={style.categoryInput}
                    placeholder='e.g. Food, Entertainment, etc...' 
                    value={category}
                    onChange={(e) => handleCategory(e)}
                />
            </div>
        </div>
        <div className={style.bottomAddForm}>
            <div className={style.addButton}>
                <div onClick={handleSubmit}>
                    <label>Add</label>
                </div>
            </div>
        </div>
        {/* drop down for categories */}
        {/* <div className={style.categoryContainer}>
            <div className={style.category}>
                <div 
                    className={style.categoryDropdown} 
                    onClick={()=> setCategoryDropdownTrue(categoryDropdown)}
                >
                    <label>Category</label>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
            </div>
            {categoryDropdown === true ? (<div className={style.categoryDropdownMenu}>
                    {cat.map(category => {
                        <div    
                            className={style.categoryItem}
                            style={{
                                borderRight: `5px solid ${category.color}`
                            }}
                            key={category.id}
                            onClick={()=>handleCategory(category)}
                        >
                            <label>{category.title}</label>
                        </div>
                    })}
                </div>) : 
                <div>Please work</div>}
                
        </div> */}
    </div>
  )
}

export default AddForm