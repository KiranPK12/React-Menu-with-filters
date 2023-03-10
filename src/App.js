import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =  ['all',...new Set(items.map(item=> item.category))]; 

function App() {
  const [menuItems , setMenuItems ] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category)=>{
    if(category==='all'){
      setMenuItems(items)
    }
    else{
      const newItem = items.filter( item => {
        return item.category === category 
      })
      setMenuItems(newItem )
    }
  } ;

  return (
    <section className='menu section'>
      <div className="title">
      <h2>Our Menu</h2>
      <div className="underline"></div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>



      </div>
    </section>
  );
}

export default App;
