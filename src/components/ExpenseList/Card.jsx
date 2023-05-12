import React from 'react'
import style from './Card.module.css'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/actions/actions';

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }

  return (
    <div className={style.card}>
      <div className={style.cardInfo}>
        <label className={style.cardTitle}>{item.title}</label>
        <label className={style.cardTime}>{time}</label>
      </div>
      <div className={style.cardRight}>
        <div>
          <label className={style.cardAmount}>$ {item.amount}</label>
        </div>
        <div className={style.deleteButton} onClick={handleDelete}>
          <label>Delete</label>
        </div>
      </div>
    </div>
  )
}

export default Card