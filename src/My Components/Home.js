import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import Overview from "./Overview"
import Trancation from "./Trancation"

const Container = styled.div`
display : flex;
flex-direction : column;
align-items : center;
margin : 10px;
font-family: 'Source Sans Pro', sans-serif;
width : 360px;
`
function Home() {
  const [transaction, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
      let exp = 0;
      let inc = 0;
      transaction.map((payload) =>
          payload.type === "EXPENSE"
              ? (exp = exp + payload.amount)
              : (inc = inc + payload.amount),
      );
      updateExpense(exp);
      updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transaction]);

  const addTransaction = (payload) => {
      const transactionArray = [...transaction];
      transactionArray.push(payload);
      updateTransaction(transactionArray);
  };
  return ( 
    <Container>
      <Overview addTransaction = {addTransaction } expense = {expense} income = {income}/>
      <Trancation transaction = {transaction}/>
    </Container>
  )
}

export default Home
