import "./App.css";
import React,{useEffect, useState,useRef, createRef} from "react";
import NewExpenses from "./components/newExpenses.js/NewExpenses";
import Login from "./components/login/Login";
import Header from "./components/Header/Header";
import  Expenses  from "./components/expenses/Expenses";
import Counter from "./components/Test/Counter";
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
 const [isLogin,setIsLogin] = useState(false);
//  const[color,setColor] = useState('red')
 const[datas,setDatas]=useState()
// const currentRef = useRef();
const someRef = useRef()



 useEffect (() => {
  const localIsLogin = localStorage.getItem('Auth')
  setIsLogin(localIsLogin);
 },[])

//  useEffect(() => {
//   currentRef.current = setInterval(() => {
//     setColor((prev) => {
//       if(prev === 'red') {
//         return'black'
//       }
//       return'red';

//     })
//   },1000);
//   return() => {
//     clearInterval(currentRef.current);
//   }
//  },[]);
// }


useEffect(() => {
  async function getData() {
    const response= await fetch(
      'https://jsonplaceholder.typicode.com/albums'
      );
    const dataw=await response.json()
    setDatas(dataw);
  }
  getData();
  // .then((response) =>response.json())
  // .then((dataObject) => setData(dataObject))
},[])
//  useEffect(() => {
//      setTimeout(()=>{
//       clearInterval(currentRef.current)
//      },3000)
//  },[])

// function getLocalstorageValue () {
//  const localIsLogin = localStorage.getItem('Auth')
//  setIsLogin(localIsLogin)

// }
  const loginHandler = () =>  {
         setIsLogin(true)
         localStorage.setItem('Auth',!isLogin);
  }


function logOutHandler ()  {
  setIsLogin(false);
  localStorage.removeItem('Auth')
}


 

  console.log(new Date().getMonth());

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
 
 {/* {datas.map((el) => (<div>{el.title}</div>))} */}

 
      <Header isLogin={isLogin} onLogout={logOutHandler} />
      <>
      {isLogin ? ( 
      <div>
      <NewExpenses onNewExpenseAdd={addNewExpenseHandler} ref={someRef} />
      <Expenses 
      setExpenses={setExpenses} 
      expenses={expenses} 
      />
      </div>
      
       ) : (
        <div>
      <Login onLogin={loginHandler}/>

      {/* <Counter/> */}
        </div>
    
      ) }
            {/* <Counter/> */}

      </>
    </div>
  );
}

export default App;
