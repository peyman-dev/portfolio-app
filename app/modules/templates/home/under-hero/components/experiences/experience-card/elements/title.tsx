import React from 'react'

const Title = ({role, company}: {role?: string, company?: string}) => {
  return (
    <p className='font-Inter-Medium! md:text-xl'>
         {role || "Course Mentor"}  In {company || "Sabzlearn"}
    </p>
  )
}

export default Title