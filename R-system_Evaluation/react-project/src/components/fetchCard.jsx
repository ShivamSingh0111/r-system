import React, { useEffect, useState } from 'react'
import ChildCard from './ChildCard';

const FetchCard = () => {
    const [state, setState] = useState([])
    var sortBytitle=[];
    // fetch the data from the Api
   async function fetchData(){
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await res.json();
        sortBytitle =[...data];
        setState([...data]);
         
    } catch (error) {
        console.log(error);
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
                return 1;
            }else{
                return -1;
            }
         })
        console.log(asc)
      }else if(e.target.value=="desc"){
        sortBytitle.sort((a,b)=>{
            if(a.title<b.title){
                return 1;
            }else{
                return -1;
            }
         })
      }
      setState([...sortBytitle]);
    }
  return (
    <div>

        <select onChange={handelsortByTitle}>
            <option value="">sortByTitle</option>
            <option value="asc">Asc</option>
            <option value="des">Desc</option>
        </select>
        <ChildCard data={state}/>
       
    </div>
  )
}

export default FetchCard;
