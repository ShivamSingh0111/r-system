import React, { useEffect, useState } from 'react'
import ChildCard from './ChildCard';

const FetchCard = () => {
    const [state, setState] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [sortOrder, setsortOrder] = useState(null);
    const [loading, setLoading] = useState(true);
   
    // fetch the data from the Api
   async function fetchData(){
    setLoading(true)
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await res.json();
       
        setState(data);
        setFilteredData(data);
        setLoading(false)
     
    } catch (error) {
        console.log(error);
        setLoading(false)
    }
          
    }
   
    // handel sideEffect Via useEffect
    useEffect(()=>{
        fetchData();
    },[])
    // console.log("after fetching",state)


    function handelsortByTitle(e){
        const value = e.target.value;
        if (value === "asc") {
          setFilteredData((prevData) => [...prevData].sort((a, b) => a.id - b.id));
        } else if (value === "desc") {
          setFilteredData((prevData) => [...prevData].sort((a, b) => b.id - a.id));
        }
        setsortOrder(value);
    }
    if(loading)return <p>lodaing....</p>
    function handleFilter(e) {
        const filter = e.target.value.toLowerCase();
        const filteredData = state.filter((item) => item.title.toLowerCase().includes(filter));
        setFilteredData(filteredData);
      }
  return (
    <div>
<input type="text" placeholder="Search" onChange={handleFilter} className="inputhandler" />
<select name="" id="" value={sortOrder} onChange={handelsortByTitle} className="selection">
        <option value="">Sort by user id</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
        <ChildCard data={filteredData}/>
       
    </div>
  )
}

export default FetchCard;

