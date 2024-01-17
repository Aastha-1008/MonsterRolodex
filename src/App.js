import {useState,useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [monsters,setMonsters] = useState([]);
  const [searchField,setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  const onSearchChange = (event)=>{
    const searchField =event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  };

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newFilteredMonsters);
  },[monsters,searchField ]);

  

  return (
    <div className="App">
       <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        onChangeHandler={onSearchChange} 
        placeholder='Search Monster' 
        className='monster-search-box'
      />

      <CardList 
        monster={filteredMonsters}
      />
    </div>
  );
}





export default App;
