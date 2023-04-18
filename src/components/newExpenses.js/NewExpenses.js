import Button from "../UI/Button";
import ExpensesForm from "./ExpensesForm";
import React,{useState} from "react";


const NewExpense = ({onSubmit}) => {

   

    const[showForm,setShowForm] =useState(false);
 
 
    function openExpensesHundler () {
        setShowForm ((prev) =>!prev);
    }


         return (
            <div style={{
            backgroundColor:'#AS9BE9',
            height:"100px", 
            paddingTop:'20px'
            
            }}>
                
                
                {showForm ? ( 
                <ExpensesForm onSubmit={onSubmit} onClick={openExpensesHundler}/>  ): ( <Button onClick={openExpensesHundler}>добавить новый расход</Button>
                    
               ) }

            </div>
         )
}

export default NewExpense;