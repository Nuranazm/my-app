import './App.css';
import NewExpense from './components/newExpenses.js/NewExpenses';
import Expenses from "./components/expenses/Expenses"
import { useState } from 'react';
// import ExpensesForm from "./components/newExpenses.js/ExpensesForm"

const productData =[
  {
    title:'Alma',
    price:120,
    date:new Date(2020,7,14),
    id:'1'
  },
  {
    title:'Car',
    price:200,
    date:new Date(2021,8,15),
    id:'2' 
  },
  {
    title:'Flower',
    price:30,
    date:new Date(2022,9,16),
    id:'1',
  },
];
function App() {
  const[newProduct,setNewProduct]=useState(productData)
 

  const addNewExpensesHandler = (data) => {
   const newArr= [...newProduct,data];
   setNewProduct(newArr);
  }


  function deleteExpense (id) {
    const newData = newProduct.filter((el) => el.id !==id );
    setNewProduct(newData);   
  }
  console.log(newProduct,'arr');
  
  return (
    <div className="App">
      {/* <Input children={"Price"}/>
      <Button>Click</Button> */}
       <NewExpense onSubmit={addNewExpensesHandler}/>
       <button ></button>
       
       <Expenses data={newProduct} onDelete={deleteExpense}/>
       {/* <ExpensesForm/> */}
    </div>
  );
}

export default App;
