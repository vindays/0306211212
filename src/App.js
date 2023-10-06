
import './App.css';


 
 //routes thẻ cha chứa nhiều thẻ route bên trong
import './bootstrap-5.2.3/css/bootstrap.min.css';
import Trangchu from './DOAN/Trangchu';
import Hearder from './DOAN/header';
import Home from './Conponent/Home'; 
import reactDom from 'react-router-dom';
import hiroute from './router/hiroute';
function App() {
  return (
   <>
   <reactDom>
    <Home/>
    <Trangchu/>
    <hiroute/>
   </reactDom>
   
   
    
   
    
   </>
  );
}

export default App;
