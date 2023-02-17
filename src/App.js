import './App.css';
import Nav from './nav';
// import image from './NewHorizons.png'
import Btn from './Btn';
import DarkMode from './darkMode';
import Child from './Child';
import React from 'react'

// function Image(prop){
//   const imgTag = <img src={image} alt='new horizon'></img>
//   return imgTag
// }
function Greeting({name}){
  return <h1>Hello, {name}</h1>
}
const date = new Date();
let bool = true;
function App(prop) {
  const [greet, setGreet] = React.useState('Hola');
  function clickHandler(){
    bool? setGreet("sup") : setGreet("hola")
    bool = !bool;
  }
  return  <>
            <Nav info="chink"/>
            {/* <Image /> */}
            <Btn val={true}/>
            <DarkMode />
            <Greeting name={"nigger"}/>
            <h1>{prop.title} {greet}</h1>
            <button onClick={clickHandler}>Hehe</button>
            <Child msg={date.toLocaleTimeString()}/>
          </>
}
export default App;
