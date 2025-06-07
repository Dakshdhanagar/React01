import "./App.css";
import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox";

function Title() {
  return <h1>My Name is Daksh</h1>;
}

function App() {
  
  return (
    <>
     <MsgBox userName="Daksh" textColor="yellow"/>
    <Title/>
    <ProductTab/>
    </>
  );
    
  
}

export default App
