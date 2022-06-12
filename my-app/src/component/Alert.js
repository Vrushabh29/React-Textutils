import React from 'react'

export default function Alert(props) {

    const capital=(word)=>
    {
        let lower= word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
    props.alert && <div class="alert alert-primary" role="alert">
  {capital(props.alert.type)}:{props.alert.msg}
</div>


    
  )
}
