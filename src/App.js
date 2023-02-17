import './App.css'
import Nav from './nav'
// import image from './NewHorizons.png'
import Btn from './Btn'
import DarkMode from './darkMode'

// function Image(prop){
//   const imgTag = <img src={image} alt='new horizon'></img>
//   return imgTag
// }
function Greeting({name}){
  return <h1>Hello, {name}</h1>
}

function App(prop) {
  return  <>
            <Nav info="chink"/>
            {/* <Image /> */}
            <Btn val={true}/>
            <DarkMode />
            <Greeting name={"nigger"}/>
            <h1>{prop.title}</h1>
          </>
}
export default App;
