import "./input.css"

const Input = (props) => {
     return(
        <div>
            <label className="label" htmlFor={props.id}>
              {props.children}
            </label>
            <input
            className="input"
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            />
        </div>
     )   
}

export default Input;