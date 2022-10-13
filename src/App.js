import data from "./helper/data.js"
import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import AppStyles from "./components/Sass/App.module.scss"


function App() {
  return (
    <>
     <Navbar/> 
     <Header/>
     
     <Card data={data}/>
  
    </>
  );
}

export default App;
