import React, {useState, useEffect} from 'react';
// import the components we will need
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

const EmployeeList = (props) => {
  // The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
    //  After the data comes back from the API, we 
   // use the setEmployees function to update state
        return EmployeeManager.getAll().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };
    const deleteEmployee = id => {
        EmployeeManager.delete(id)
          .then(() => EmployeeManager.getAll().then(setEmployees));
      };
// got the locations from the API on the component's frist render
    useEffect(() => {
        getEmployees();
    }, []);
    // Finally we use map() to loop over the employee array to show a list of employee cards
    return (
        <>
          {/* add this button above your display of employee cards */}
<section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/employees/new")}}>
      Admit Employee
  </button>
</section>
        
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employees={employee} deleteEmployee={deleteEmployee} {...props}/>)}
        </div>
        </>

    );
};

export default EmployeeList