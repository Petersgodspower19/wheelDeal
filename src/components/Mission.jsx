import React from 'react'
import mission from  "../assets/img/mission.jpg"

function Mission() {
  return (
    <div className='mt-14 mb-14 p-[10px]' id='mission'>
      <h1  className='text-black text-4xl  font-bold  text-center'>Our  <span className='text-primary'>Mission</span>
      </h1>
      <div className='flex  items-start mt-8 justify-center m-auto  gap-5  flex-col md:flex-row'>
        <img src={mission} alt=''  className='w-[500px] rounded-[5px]' />
        <div className='w-[500px] flex flex-col gap-3'>
            <h1 className='text-primary text-2xl font-bold'>To  create a community where  every  journey  is  extraordinary</h1>
    <p className='font-bold  text-2xl'>Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the enviroment</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus eum dolores sed dolor earum eveniet itaque ipsum. Culpa obcaecati doloribus quas maxime nemo ullam fugiat ipsa fuga, vel accusamus at.</p>
        </div>
      </div>
    </div>
  )
}

export default Mission
