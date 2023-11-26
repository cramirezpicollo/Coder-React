import React from 'react'
import ProductCard from './components/ProductCard/ProductCard';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
 
  return (
    <div>

      <NavBar/>
      <ItemListContainer greeting= "BIENVENIDOS"/>
      <ProductCard/>

     
    </div>
  )
}

export default App
