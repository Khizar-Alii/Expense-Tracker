import styled from "styled-components";
import Home from "./My Components/Home"

const Container = styled.div`
display : flex;
flex-direction : column;
align-items : center;
margin : 30px 0 10px;
font-family: 'Source Sans Pro', sans-serif;
`

const Header = styled.span`
font-size : 36px;
font-weight : bold;
color: #333;
`
function App() {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <Home/>
    </Container> 
  );
}

export default App;
