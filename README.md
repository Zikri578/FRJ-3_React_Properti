# FRJ-3_Properti

Apa itu Props atau Properties?
- Props atau properti merupakan suatu cara untuk mengirim dan mengakses data dari komponent lain secara langsung. 

Sumber : https://www.konsepkoding.com/2020/09/2-tutorial-reactjs-memahami-state-props-react.html

Contoh penggunaan Properti dibawah ini : 

    import React from 'react'

    function User(props) {
      return <h1>Hello, {props.name}</h1>
    }

    export default function Home() {
      return (
        <div>
          <User name="John" />
          <User name="Jane" />
          <User name="Jimmy" />
        </div>
      )
    }
