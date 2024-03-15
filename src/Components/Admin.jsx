import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';
function Admin() {

const base_url = 'http://localhost:8000'

const [allEmployees,setAllEmployees] =useState([])

const fetchData = async()=>{

//API fetch - get all employee deatils
const result = await axios.get(`${base_url}/get-all-employee`) //employee deatils
console.log(result.data.employees); //object-> array

setAllEmployees(result.data.employees)

}
console.log(allEmployees);

const DeleteEmployee=async(id)=>{
  const result = await axios.delete(`${base_url}/delete-employee/${id}`)//delete employee 
alert(result.data.message)
fetchData()
}


//array
useEffect(()=>{

fetchData()
},[])

  return (
    <div>
<h1 className='text-center m-3'>Employee Management System</h1>

<div className="container">
  <p>Our employee management system is a comprehensive solution designed to streamline the process of managing personnel within your organization. With intuitive features such as employee profiles, attendance tracking, performance evaluations, and task assignments, our platform empowers administrators to efficiently oversee their workforce. Through a user-friendly interface, managers can easily access relevant employee information, assign tasks, and monitor progress in real-time. Additionally, our system provides robust reporting capabilities, allowing stakeholders to gain valuable insights into workforce productivity and performance trends. Whether you're a small business or a large enterprise, our employee management system is tailored to meet your organization's unique needs, helping you optimize workforce management and drive greater operational efficiency.</p>
</div>

{/*  naviagte to add page */}

<Link to={'/add'}>
<a style={{float:'right'}} className='btn btn-primary' href="">Add</a>
</Link>

<div className="container">

<MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {

allEmployees.map((item)=>(

  <tr>
          <td>
            {item.id}
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.age}
          </td>
          <td>{item.designation}</td>
          <td>
            {item.salary}
          </td>
          <td>
<div className='d-flex justify-content-evenly'>
  <Link to={`view/${item.id}`}>
  <i style={{color:'navy'}} class="fa-solid fa-eye"></i>
  </Link>


<Link to={`edit/${item.id}`}>
<i className='fa-solid fa-pen text-success'></i>
</Link>
 
<i onClick={()=>DeleteEmployee(item.id)} className='fa-solid fa-trash text-danger'></i>
</div>

          </td>
        </tr>

))


      }

        
      </MDBTableBody>
    </MDBTable>

</div>
    </div>
  )
}

export default Admin