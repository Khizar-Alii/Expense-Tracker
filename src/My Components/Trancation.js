import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;
font-family: 'Source Sans Pro', sans-serif;
padding : 10px 22px;
font-size  : 18px;
width : 100%;
gap : 10px;
font-weight:bold;
& input{
padding : 10px 12px;
border-radius : 12px;
background : #e6e8e9;
border : 1px solid #e6e8e9;
width : 100%;
outline: none;
}
`
const Cell = styled.div`
display : flex;
flex-direction : row;
padding : 10px 15px;
font-size : 14px;
border-radius : 2px;
align-items: center;
font-weight : normal;
width : 100%;
justify-content : space-between;
border : 1px solid #e6e8e9;
border-right : 4px solid ${(props)=>(props.isExpense ? 'red' : 'green')}
`
const TransactionCell = (props) =>{
  return(
    <Cell isExpense = {props.payload?.type === 'EXPENSE'}>
      <span>{props.payload?.desc}</span>
      <span>${props.payload?.amount}</span>
    </Cell>
  )
}
function Trancation(props) {
  const [searchText, updateSearchText] = useState("");
  const [filteredTransaction, updateTxn] = useState(props.transaction);

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTxn(props.transaction);
      return;
    }
    let txn = [...props.transaction];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
    updateTxn(txn);
  };

  useEffect(() => {
    filterData(searchText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.transaction]);

  return (
    <Container>
      Transactions
      <input
        placeholder="Search"
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction?.map((payload) => (
        <TransactionCell payload={payload} key={payload.id}/>
      ))}
    </Container>
  );
};


export default Trancation
