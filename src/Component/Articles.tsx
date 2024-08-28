import React from 'react'
type Article ={
    // children : JSX.Element 
    // if we don't know what is the element
    children : React.ReactNode
}

export default function Articles({children}:Article) {
  return (
    <div>Articles</div>
  )
}
