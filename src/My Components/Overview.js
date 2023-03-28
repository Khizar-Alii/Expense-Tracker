import styled from "styled-components";
import React, { useState } from 'react'

const Container = styled.div`
display : flex;
flex-direction : column;
align-items : center;
margin : 10px;
font-family: 'Source Sans Pro', sans-serif;
width : 100%;
`
const BalanceBox  = styled.div`
font-size : 17px;
font-weight : bold;
width : 100%;
display : flex;
justify-content : space-between;
align-items : center;
`
const AddTransaction = styled.div`
background : cyan;
color : black;
font-size : 15px;
font-weight :bold;
text-align : center;
padding : 5px 10px;
border-radius : 5px;
cursor : pointer;
border: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background : #f2f2f2;
  }
`
const AddTransactionContainer = styled.div`
display : flex;
flex-direction : column;
gap : 10px;
padding : 15px 20px;
width : 100%;
margin : 20px;
& input {
outline : none;
padding : 10px 12px ;
border-radius : 5px;
border: 1px solid #e6e8e9;
font-size: 14px;
}
`
const RadioBox = styled.div`
display : flex;
width : 100%;
align-items : center;
& input{
  width:unset;
  margin : 0 10px
  }
`
const ExpenseContainer = styled.div`
display : flex;
gap : 12px;
margin : 20px;
`
const ExpenseBox = styled.div`
display : flex;
flex-direction : column;
border-radius : 4px;
border : 1px solid #e6e8e9;
padding : 15px 20px;
width : 135px;
font-size : 14px;
& span{
font-weight : bold;
font-size : 20px;
color : ${(props) => (props.isIncome ? 'green' : 'red')}
  }
`

const AddTransactionView = (props) =>{
  const [amount , setAmount] = useState("")
  const [desc , setDesc] = useState("")
  const [type , settype] = useState('EXPENSE')
  const Add = () => {
    props.addTransaction({
      amount : Number(amount),desc,type, id : Date.now()
    })
    props.togggelBtn()
  }
  
  const handleChangeAmount = (e) =>{
    setAmount(e.target.value)
  }
  const handleChangeDesc = (e) =>{
    setDesc(e.target.value)
  }

  return(
    <AddTransactionContainer>
      <input type="number" placeholder="Amount" value={amount} onChange = {handleChangeAmount}/>
      <input type="text" placeholder="Description" value={desc} onChange = {handleChangeDesc}/>
      <RadioBox>
        <input type="radio" name="type" id="expense" value='EXPENSE' checked = {type === "EXPENSE"} onChange ={(e)=>settype(e.target.value)}/>
        <label htmlFor="expense">Expense</label>
        <input type="radio" name="type" id="income" value='INCOME' checked = {type === "INCOME"} onChange ={(e)=>settype(e.target.value)}/>
        <label htmlFor="income">Income</label>
      </RadioBox>
      <AddTransaction onClick={Add}>Add Transaction</AddTransaction>
    </AddTransactionContainer>
  );
};
function Overview(props) {
  const [addBtnVisible , togggelBtn] = useState(false)
  return (
    <Container>
      <BalanceBox>Balance : ${props.income - props.expense}
        <AddTransaction onClick={()=>togggelBtn(!addBtnVisible)}>{addBtnVisible ? 'Cancel' : 'Add'}</AddTransaction>
      </BalanceBox>
      {addBtnVisible && <AddTransactionView togggelBtn = {togggelBtn} addTransaction = {props.addTransaction}/>}
      <ExpenseContainer>
        <ExpenseBox isIncome = {false}>
          Expense <span>${props.expense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome = {true}>
          Income <span>${props.income}</span>
        </ExpenseBox>
      </ExpenseContainer>
    </Container>
  )
}

export default Overview
