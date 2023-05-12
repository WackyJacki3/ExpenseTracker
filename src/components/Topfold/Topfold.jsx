import React, { useState } from 'react'
import style from "./Topfold.module.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/actions';

const Topfold = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setSearchValue(event.target.value);
        dispatch(searchExpense(e.target.value));
    }

    return (
        // Search bar and Add expense 
        <div className={style.topFold}>
            {window.location.pathname === '/' ? 
                <div className={style.homeTopFold}>
                    {/* Search bar */}
                    <div className={style.searchBar}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            value={searchValue}
                            placeholder='Search expenses'
                            onChange={(event) => handleChange(event)}
                        />
                    </div>
                    {/* Add expense */}
                    <Link to='/add-expense'>
                        <div className={style.addButton}>
                            <i className="fa-solid fa-plus"></i>
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
            :
            // Create page for adding items
                <div className={style.addTopFold}>
                    {/* Back button */}
                    <Link to='/'> 
                        <div className={style.addTopFoldButton}>
                            <i className="fa-solid fa-chevron-left"></i>
                            <label>Back</label>
                        </div>
                    </Link>
                    {/* Cancel button */}
                    <Link to='/'>
                        <div className={style.addTopFoldButton}>
                            <i className="fa-solid fa-xmark"></i>
                            <label>Cancel</label>
                        </div>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Topfold