import React, { useState } from 'react'

const StudentProf = () => {

  return (
    <React.Fragment>
        <div className='formdiv'>
            <h1> Student's Profile </h1>
            <form>
            <label>First Name</label>
            <input type='text' className='form-control m-2' name='FirstName' placeholder='First Name'/>
            <label>Last Name</label>
            <input type='text' className='form-control m-2' placeholder='Last Name'/>
            <label>Gender :-</label>
            <label>Male</label>
            <input type='radio' className='m-2'/>
            <label>Female</label>
            <input type='radio' className='m-2'/><br/>
            <label>Course Name</label>
            <input type='text' className='form-control m-2' placeholder='Course Name'/>
            <label>Email Address</label>
            <input type='text' className='form-control m-2' placeholder='Email Address'/>
            

            <button className='btn btn-blue-grey' onClick={addstudent}>Add Data</button>


            </form>
        </div>
     
    </React.Fragment>
  )
}

export default StudentProf;