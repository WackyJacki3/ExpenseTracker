import React from 'react'
import Topfold from '../../components/Topfold/Topfold'
import ExpenseList from '../../components/ExpenseList/ExpenseList'

const Home = () => {
  return (
        <div className='home'>
            <Topfold />
            <ExpenseList />
        </div>
  )
}

export default Home