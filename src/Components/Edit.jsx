import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {


//to hold all input fields data
const [empid,setId] = useState("")
const [empname,setName] = useState("")
const [empage,setAge] = useState("")
const [empdesignation,setDesignation] = useState("")
const [empsalary,setSalary] = useState("")

//get a particular id of an employee from the url

const {id}=useParams()
console.log(id); //1

//base_url

const base_url = 'http://localhost:8000'


//get a particular details of an employee

const fetchAnEmployee = async(id)=>{

  const result = await axios.get(`${base_url}/get-an-employee/${id}`)
  console.log(result.data.employees); //object of employee
  setId(result.data.employees.id)
  setName(result.data.employees.name)
  setAge(result.data.employees.age)
  setDesignation(result.data.employees.designation)
  setSalary(result.data.employees.salary)
}

useEffect(()=>{

fetchAnEmployee(id)

},[])

const location = useNavigate()

//update an employee function call 

const updateEmployee=async(e)=>{
  e.preventDefault()

const body={
id:empid,
name:empname,
age:empage,
designation:empdesignation,
salary:empsalary,
}
const result = await axios.post(`${base_url}/update-an-employee/${id}`,body)
console.log(result);
alert(result.data.message)
location('/') //back to admin page
}


  return (
    <div>

<div className="container text-center bg-light">
        <h1 className='m-3'>Update Employee Details</h1>
        <form className='p-5 m-5 border shadow'>
        <MDBInput label='Id' id='formControlLg'onChange={(e)=>setId(e.target.value)} value={empid} type='text' size='lg' />
      <br />
      <MDBInput label='Name' id='formControlLg' onChange={(e)=>setName(e.target.value)} value={empname} type='text' size='lg' />
      <br />
      <MDBInput label='Age' id='formControlLg'onChange={(e)=>setAge(e.target.value)} value={empage} type='text' size='lg' />
      <br />
      <MDBInput label='Designation' onChange={(e)=>setDesignation(e.target.value)} value={empdesignation} id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput label='Salary' onChange={(e)=>setSalary(e.target.value)} value={empsalary} id='formControlLg' type='text' size='lg' />
      <br />

      <div>
        <button onClick={(e)=>updateEmployee(e)} style={{backgroundColor:"green"}} className='btn btn-success'>Update</button>
      </div>

        </form>
      </div>

    </div>
  )
}

export default Edit