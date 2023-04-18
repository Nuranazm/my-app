 const ExpenseCard = ({el,onDelete}) => {
      const{date} = el;
     //  const year = date.getFullYear()
     //  const day = date.getDay()
       return (
       <div style={{border:'1px solid'}} >
            <h3> {el.title}</h3>
            <div>{el.price}</div>
            {/* <div>{`${day}/${year}`}</div> */}
            <button onClick={() => onDelete(el.id)}>delete</button>
       </div>
       )
 }

 export default ExpenseCard;