import React from 'react';
import './style.css';
const App=()=>{
const[isLoading,setIsloding]=React.useState(true)
const[data,setData]=React.useState([])
const[error,setError]=React.useState('')
React.useState(()=>{
  axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
    const nithish=res.data
    setData(nithish)
    isLoading(false)
  }).cathc(erre=>{
    setError(error.message)
  })
},[])
if(isLoading){
  return <h1>Loading .... </h1>
}
if(error){
  return <h1> {error } </h1>
}


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
