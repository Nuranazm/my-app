import "./App.css";
import React,{useState} from "react";
import NewExpenses from "./components/newExpenses.js/NewExpenses";
import  Expenses  from "./components/expenses/Expenses";
function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Dress",
      price: 450,
      date: new Date(2023, 2, 19),
    },
    {
      title: "New TV",
      price: 800,
      date: new Date(2022, 11, 21),
    },
    {
      title: "Iphone 14 pro Max",
      price: 1500,
      date: new Date(2021, 8, 5),
    },
    {
      title: "Gucci bag",
      price: 990,
      date: new Date(2020, 1, 17),
    },
    {
      title: "Toilet Paper",
      price: 300,
      date: new Date(2022, 8, 9),
    },
    {
      title: "Shoes",
      price: 780,
      date: new Date(2021, 1, 27),
    },
    {
      title: "Headphones",
      price: 220,
      date: new Date(2019, 7, 14),
    },
    {
      title: "MacBook M2 Air",
      price: 1980,
      date: new Date(2023, 7, 31),
    },

    {
      title: "Chocolate-covered Strawberries",
      price: 340,
      date: new Date(2020, 0, 16),
    },
  ]);

  console.log(new Date().getMonth());

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} />

      <Expenses setExpenses={setExpenses} expenses={expenses} />
    </div>
  );
}

export default App;
