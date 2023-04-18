import ExpenseCard from "../expenseCard/ExpenseCard"

const Expenses = (props) => {
const {data} = props
    return <div>
         {
            data.map((el) => {
                return<ExpenseCard el={el} key={el.id}onDelete={props.onDelete}/>
            })
         }
        
 </div>
}
export default Expenses;