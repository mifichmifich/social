import { useState, useEffect } from "react"
import User from "./User/user"
import style from "./users.module.css"

function Users(props) {
    let [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <div className={style.users}>

            {data.map((el) => <User name={el.name} city={el.address.city} status={el.company.catchPhrase} zipcode={el.address.zipcode} key={el.id} />)}

        </div>
    )
}
export default Users