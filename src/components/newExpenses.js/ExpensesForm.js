import { useState } from "react";
import "./ExpensesForm.css"
import Button from "../UI/Button";


const ExpensesForm = ({onClick,onSubmit}) => {
  const[inputText , setInputText] = useState('')
  const[inputNumber , setInputNumber] = useState(0)
  const[inputDate , setInputDate] = useState(null)

  function getInputValue (e) {
   setInputText(e.target.value)
   console.log(inputText)
  }
  function getNumberInput (e) {
    setInputNumber(e.target.value)
    console.log(inputNumber)
}

function getDateInput (e) {
   setInputDate(e.tearget.value);
   console.log(inputDate)
}


 function sumbitHandler() {
  const prodacts ={
    title:inputText,
    price:inputNumber,
    date:new Date,
  }
onSubmit(prodacts)


setInputText('');
setInputNumber('');
setInputDate('');


console.log('click')
  
 }

     return < >
      <div className="new-expense_forms">
            <div className="new-expense_form">
            <label>Title</label>
            <input 
            placeholder="title" 
            type="text" 
            value={inputText}
            onChange={getInputValue}
            />
           </div>
           </div>


         <div className="new-expense_forms">
           <div className="new-expense_form">
                <label>Amount</label>
            <input 
            placeholder="number" 
            type="number"
            value={inputNumber} 
            onChange={getNumberInput}
            />
            </div>
         </div>


           <div className="new-expense_forms">
          <div className="new-expense_form">
            <label>Date</label>
            <input 
            placeholder="date" 
            type="date" 
            min='2022-01-01'
            max='2024-12-21' 
            />
            </div>
            </div>

             <div className ="new-expense_forms">
             <div className="actions-btn">
              <button onClick={onClick}>Отмена</button>
           <button  onClick={sumbitHandler}>Добавить расход</button>

            </div>
            </div>


     </>
     




        
     
}

export default ExpensesForm;