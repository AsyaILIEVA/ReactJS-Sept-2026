import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

//Function declaration component example
function App() {  
  const articles = [
    {
      id: 1,
      title: 'First Article',
      content: 'This is the content of the first article'
    },
    {
      id: 2,
      title: 'Second Article',
      content: 'This is the content of the second article'
    },
    {
      id: 3,
      title: 'Third Article',
      content: 'This is the content of the third article'
    }
  ]
  return (
    <div>
      <Header 
        title="React Props" 
        subtitle="Learn how to pass props in React" 
      />

      <Body articles={articles} />

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
