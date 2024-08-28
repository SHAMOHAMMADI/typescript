import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react'
import { ComponentProps } from 'react'



// type button = {
//     type ?: string, 
//     value ?: string,
//     onClick ?: ()=>void
// }
//instead of above code 

// type button = ComponentProps<"button"> 

// or extra props
// type button = ComponentProps<"button"> & {
//     buttonTitle?:string
// }
//if you want to use useRef
// type button = ComponentPropsWithRef<'button'> & {
//   buttonTitle ?: string
// }
//without using useRef
type button = ComponentPropsWithoutRef<'button'> & {
  buttonTitle ?: string
}


function Button({type , onClick , onChange , buttonTitle}:button) {
  return (
    <div>button</div>
  )
}

export default Button