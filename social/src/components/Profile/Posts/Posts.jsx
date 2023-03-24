import style from './Posts.module.css'
import Post from './Post/Post'
import { useState } from 'react';


let postData = [
    { message: "Hello", likes: 5, reposts: 10, id: 1 },
    { message: "Hi", likes: 10, reposts: 15, id: 2 },
    { message: "World", likes: 15, reposts: 20, id: 3 },
]



function Posts(props) {
    const [data, setData] = useState(postData);
    let [inputText, setText] = useState('');
    // let someArr = ["2", 'text', 1, 5, 10]
    // someArr.push(1)
    // console.log(someArr)
    // let testObj = {
    //     name: "Ben",
    //     surname: "Jonson"
    // }
    // testObj.age = 37
    // console.log(testObj)
    // let firstArr = [1, "name"]
    // let [firstNumber, firstName] = firstArr
    // console.log(firstNumber)
    // console.log(firstName)


    // let secondArr = [4, 8, 20]
    // let newArr = [...firstArr, ...secondArr]
    // console.log(newArr)
    function addPost() {


        let newData = [
            ...data, ...[{ message: inputText, likes: 15, reposts: 20, id: 4 }]
        ]
        setData(newData)
    }
    return (

        <div className={style.posts}>
            <div className={style.enter}>


                <div className={style.addPost_container}>
                    <div className={style.addPost}>
                        <input type="text" value={inputText} onChange={(e) => setText(e.currentTarget.value)} />
                        <button onClick={() => addPost()}>Отправить</button>
                    </div>
                </div>

            </div>
            <div className={style.post}>
                {data.map((el) => <Post message={el.message} likes={el.likes} reposts={el.reposts} key={el.id} />)}
            </div>
        </div>
    )
}
export default Posts

