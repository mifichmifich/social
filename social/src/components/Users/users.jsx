import { useState, useEffect } from "react"
import { getUsers } from "../../api/api"
import User from "./User/user"
import style from "./users.module.css"

function Users(props) {
    let [data, setData] = useState([])
    let [limitUsers, setlimitUsers] = useState(5)
    function loadUser() {
        getUsers(limitUsers).then((response) => {
            console.log(response)
            setData(response.data)
        })
    }
    function usersUp() {
        setlimitUsers(limitUsers + 1)
        loadUser()
    }
    function usersDown() {
        setlimitUsers(limitUsers - 1)
        loadUser()
    }
    useEffect(() => {
        loadUser()
    }, [])
    return (
        <div className={style.users}>
            <button onClick={() => usersUp()}>+</button>
            <button onClick={() => usersDown()}>-</button>
            {data.map((el) => <User name={el.name} city={el.address.city} status={el.company.catchPhrase} zipcode={el.address.zipcode} key={el.id} />)}

        </div>
    )
}
export default Users