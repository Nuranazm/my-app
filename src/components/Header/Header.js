import Button from "../UI/Button"

const Header = ({isLogin,onLogout}) => {
        return (
            <>
            {isLogin && (
   <div>
   <Button>Expenses</Button>
   <Button>Users</Button>
   <Button onClick={onLogout}>Logout</Button>
</div>

            )}
           
            </>
        )
}

export default Header;