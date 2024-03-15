import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Add() {
//to hold all input fields data
  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [designation,setDesignation] = useState("")
  const [salary,setSalary] = useState("")

  const base_url = 'http://localhost:8000/add-Employee'

  const location = useNavigate()

  const AddEmployee = (e)=>{
e.preventDefault()
    console.log(id,name,age,designation,salary);
    //Api call to add employee details
const body = {
  id,name,age,designation,salary
}

const result = axios.post(base_url,body).then((response)=>{
  console.log(response);
  alert(response.data.message)
  location('/')

})
.catch((error)=>{
  alert("Please enter a unique employee Id")
})



  }

  return (
    <div>
      <div className="container text-center bg-light">
        <h1 className='m-3'>Add Employee Details</h1>
        <form className='p-5 m-5 border shadow'>
        <MDBInput label='Id' id='formControlLg'onChange={(e)=>setId(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='Name' id='formControlLg' onChange={(e)=>setName(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='Age' id='formControlLg'onChange={(e)=>setAge(e.target.value)} type='text' size='lg' />
      <br />
      <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} id='formControlLg' type='text' size='lg' />
      <br />

      <div>
        <button onClick={(e)=>AddEmployee(e)} className='btn btn-success'>Add</button>
      </div>

        </form>
      </div>
    </div>
  )
}

export default Add