import React from 'react'
import memberpic from '../layout/images/logo.png'

const Member = ({members}) => {
  const memberList = members.map(member => {
    return (
        <div className="member-card" key={member.id}>
            <div className="member-details">
                <img className="member-image" src={memberpic} alt="member" />
                <p className="member-name">{member.name}</p>
            </div>
        </div>
      )
  })
  return (
      <React.Fragment>
          { memberList }
      </React.Fragment>
  )
}
export default Member;