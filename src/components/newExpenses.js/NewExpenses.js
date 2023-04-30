import styled from "styled-components";
import React, { useState } from "react";
import Button from "../UI/Button";
import ExpensesForm from "./ExpensesForm";

 const NewExpenses = ({ onNewExpenseAdd }) => {
  const [state, setState] = useState(false);

  function openAndCloseFormHadler() {
    setState((prev) => !prev);
  }

  return (
    <div>
      {state ? (
        <ExpensesForm
          onNewExpenseAdd={onNewExpenseAdd}
          onClick={openAndCloseFormHadler}
        />
      ) : (
        <ButtonDiv>
          <Button onClick={openAndCloseFormHadler}>Add a new expense</Button>
        </ButtonDiv>
      )}
    </div>
  );
};

export default NewExpenses;

const ButtonDiv =styled.div`
background-color:#ad9be9;
height: 100px;
width: 810px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 12px;
margin-top: 50px`


