import React from 'react'


const EmpCard = ({ employee }) => {


    return (
        <>
            <div className="empCard">

                <h1 ClassName="header">{employee.name.first} {employee.name.last} </h1>
                <img src={employee.picture.medium}></img>
                <ul>
                    <li>Email: {employee.email}</li>
                    <li>Phone: {employee.cell}</li>
                    <li>Age: {employee.dob.age}</li>

                </ul>

            </div>

        </>
    )
}

export default EmpCard
