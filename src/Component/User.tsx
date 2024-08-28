// import React from 'react'

// export default function User(props:{
//     name:string ,
//      age:number ,
//       hasChild:boolean,
//       sum2 : (a:number , b:number)=>number
//     }) {
//   return (
//     <div className="flex flex-col m-4 bg-gray-600 shadow-lg w-24 h-auto">
//         <h2>{props.name}</h2>
//         <h2>{props.age}</h2>
//         <h2>{`hasChild: ${props.hasChild}`}</h2>
//     </div>
//   )
// }
///////////////////////////////////////////////

// import React from 'react'

// type USERMother = "mari" | "didi" | "jeni";

// type USER = {
//     name : string,
//     age : number,
//     hasChild:boolean
//     sum:(a:number , b:number)=>number
//     father?: string // optional
//     // birthDate :  any 
//     // mother ?: "mari" | "jeni" | "didi" //union type
//     mother ?:USERMother
// }

// const User = ({name , age , hasChild , sum}:USER)=>{
//     return (
//         <div>
//             <h2>name :</h2>

//         </div>
//     )
// }

// export default User


///////////////////////////
// import React from 'react'
 
// type TUser = {
//     value : string;
//     set : React.Dispatch<React.SetStateAction<string>>
// }


// const User = ({value,set}:TUser)=>{
//     return (
//         <div>

//         </div>
//     )
// }


// export default User
/////////////////////////

import React from 'react'

export default function User() {
  return (
    <div>User</div>
  )
}
