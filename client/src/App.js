import React, { useEffect, useState } from "react";
import Foot from "./components/Foot"
import Header from "./components/Header"
import EmpCard from "./components/EmpCard"
import axios from "axios"






export const App = () => {

  const [employees, setEmployees] = useState([])
  const [sortedEmps, setSortedEmps] = useState([])
  const [view, setView] = useState({ sorted: false })
  const sortEmps = (empList) => {

    let emps = [...empList]

    console.log(emps)
    emps.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1
      } else if (a.name.last > b.name.last) {
        return 1
      } else {
        return 0
      }
    })
    console.log(emps)
    setSortedEmps(emps)
  }


  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=20')
      .then((emps) => {
        setEmployees(emps.data.results)
        sortEmps(emps.data.results)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div >
      <Header view={view} setView={setView} />
      <div className="cardCont">
        {view.sorted === true ?
          sortedEmps.map((emp) => (
            <EmpCard employee={emp} key={emp.id} />
          )) :
          employees.map((emp) => (
            <EmpCard employee={emp} key={emp.id} />
          ))}
      </div>



    </div>
  )
}



export default App;
