// import React from 'react';
// import './App.css';
// import User from './Component/User';
// import Articles from './Component/Articles';
// import {useState } from 'react'

// type user2 = {name:string;age:number,children:string}
// type array3 = (number | string )[]

// //for state 
// type State = {
//   name : string;
//   age : number;
// }

// function sum (a:number,b:number):number{
//   return a + b
// }

// function sum2(a:number , b:number){
// return a + b
// }
 
// function App() {
//   let name : string = "ali"
//   let array: (string | number)[] = ["mohammad",2]
//   let array4 : array3 = ['mohammad' , 2]



//   const user = {
//     name : "ali",
//     age : 39,
//     color : "red"
//   }
//   sum(5, 6)


//   let user2: user2 = {
//     name : 'salar',
//     age : 39 , 
//     children : ""
//   }

//  const num:number[] = [2 , 6 , 7 ,1 , 3 , 2]


// //  const [data , setData] = useState<boolean>(false)
// // const [data , setData] = useState<State | null>(null)

// const [value , setValue] = useState<string>("test")

//   return (
//     <div className="App flex bg-gray-100 m-2 h-36 flex-col justify-center items-center [&>*]:m-2">
//       <div>

//       {name}
//       </div>
//       {/* <User name="salar" age={24} hasChild={true} sum={sum}/> */}

//       <User value={value} set={setValue}/>
    
//       <div>
      
//        {array[0]}
//       </div>
  
//   <h3>{sum(5, 6)}</h3>

//   <Articles>
//     <h3>test</h3>
//   </Articles>


//     </div>
//   )
// }

// export default App;


import React from 'react'
import Button from "./Component/Button"
// type User1 = {
//   name : string,
//   age : number
// }

// type User2 = User1 & {
//   children : string[]
// }

// let user1 : User2 = {

// }

interface User3 {
  name :string , 
  age : number
}

interface User4 extends User3 {
  children : string[]
}

// let user4 : User4 ={

// }



export default function App() {
  return (
    <div>
      <Button buttonTitle="button title"/>
    </div>
  )
}
