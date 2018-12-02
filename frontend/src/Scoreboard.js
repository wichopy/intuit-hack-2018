import React from 'react'
import Jim from './assets/jim.png';
import Pam from './assets/pam.png';
import Creed from './assets/creed.png';

const Scoreboard = ({ employees }) => {
  console.log(employees)
  return (
    <div>
      Scoreboa<span className="span">r</span>d

      <table className="table  is-hoverable is0narrow">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Jobs/Month</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {employees && employees.map((employee, i) => {
            const avatar = (() => {
              if (1 === i + 1) {
                return Jim
              } else if (2 === i + 1) {
                return Pam
              } else if (3 === i + 1) {
                return Creed
              }
            })()
            return <tr key={i}>
              <td><img style={{ overflow: 'hidden', height: '138px', width: '138px', 'borderRadius': '66px' }} src={avatar} />
              </td>
              <td style={{ fontSize: '36px' }}>{employee.name}</td>
              <td>{employee.jobsPerMonth}</td>
              <td>{employee.points}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Scoreboard;