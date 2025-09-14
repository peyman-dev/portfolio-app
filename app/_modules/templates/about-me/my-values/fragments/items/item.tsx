import React from 'react'

const Item = (props: any) => {
  return (
    <article className='h-[212px] grow rounded-2xl bg-white p-8 flex-col-between'>
        <div className='size-12 rounded-full flex-center bg-[#F5F5F0] border border-gray-300 '>
            {<props.Icon className="size-5"/>}
        </div>
        <div>
            <h5 className='text-[21px] font-Inter-SemiBold!'>
                {props.title}
            </h5>
        </div>
    </article>
  )
}

export default Item