import React, { useEffect, useState } from 'react'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function View() {

  const base_url = 'http://localhost:8000'

  //get an id from the url

  const {id}=useParams()

  console.log(id);

  const [employeeData,setEmployeeData] = useState({})

  //api fetching - function

  const fetchAnEmployee = async(id)=>{

    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data.employees);
    setEmployeeData(result.data.employees)
  }

console.log(employeeData);//object with employee details
useEffect(()=>{

fetchAnEmployee(id)

},[])


  return (
    <div>
       <h3 className='text-center m-4 text-dark'>View Employee Details</h3>
      <div className=" row container mt-1 p-5">
       
<div className="col-8 ">

{/*  card  */}
<MDBCard className='shadow'>
      <MDBCardBody>
        <MDBCardTitle active className='text-center m-3 text-dark fs-3'>Employee Card</MDBCardTitle>
        <MDBCardText>
         {/*  list code   */}
       {

<MDBListGroup style={{ minWidth: '22rem' }} light>
<MDBListGroupItem  className='px-3 text-dark' >
  Employee Id : {employeeData.id}
</MDBListGroupItem>
<MDBListGroupItem  className='px-3 text-dark'>
Full Name : {employeeData.name}
</MDBListGroupItem>
<MDBListGroupItem className='px-3 text-dark'>
Age : {employeeData.age}
</MDBListGroupItem>
<MDBListGroupItem  className='px-3 text-dark'>
Designation : {employeeData.designation}
</MDBListGroupItem>
<MDBListGroupItem className='px-3 text-dark'>
Salary : {employeeData.salary}
</MDBListGroupItem>
</MDBListGroup>

}
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>

</div>
<div className="col-4">

<img width={'500px'} src="https://th.bing.com/th/id/R.2b93ad1389746313858e7a7629ef64b2?rik=cLolxlb9tXa1PQ&riu=http%3a%2f%2f103.171.180.167%2fansalshrms%2fimages%2ficon-user.gif&ehk=JF99JH5sd5mJMtlZIPglHbKTL5KHxdguy7EAPdaD0L8%3d&risl=&pid=ImgRaw&r=0" alt="" />
{/*  image/user icon */}

</div>

      </div>
<div className='text-center m-5'> 
<Link to={'/'}>

<MDBBtn style={{backgroundColor:"rgb(72, 72, 230)"}}>Back to Home</MDBBtn>


</Link>



</div>

    </div>
  )
}

export default View