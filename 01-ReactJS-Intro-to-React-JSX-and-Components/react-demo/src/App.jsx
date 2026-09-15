import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

//Function declaration component example
function App() {  
  return (
    <div>
      <Header />

      <Body />

      <Footer />
    </div>
  ); 
}

// //Arrow function component example
// const App = () => {
//   const reactElement = <h1>Hello, React!</h1>

//   return reactElement
// }

// //Function expression component example
// const App = function() {
//   const reactElement = <h1>Hello, React!!!!!!!</h1>

//   return reactElement
// }

export default App
