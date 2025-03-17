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
       
        setState([...data]);
        setFilteredData(finalData);
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
        console.log(typeof e.target.value)
      if(e.target.value=="asc"){
         sortBytitle.sort((a,b)=>{
            if(a.title>b.title){
                return a.title-b.title
            }else{
                return b.title-a.title;
            }
         })
        console.log(asc)
      }else if(e.target.value=="desc"){
        sortBytitle.sort((a,b)=>{
            if(a.title>b.title){
                return a.title-b.title
            }else{
                return b.title-a.title;
            }
         })
      }
      setState([...sortBytitle]);
    }
    if(loading)return <p>lodaing....</p>
    function handleFilter(e) {
        const filter = e.target.value.toLowerCase();
        const filteredData = data.filter((item) => item.title.toLowerCase().includes(filter));
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
        <ChildCard data={state}/>
       
    </div>
  )
}

export default FetchCard;
