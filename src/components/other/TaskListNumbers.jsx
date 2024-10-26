import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex flex-col sm:flex-row mt-10 justify-between gap-5 screen">
        
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-bold text-center sm:text-left'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-center sm:text-left' >New Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-bold text-center sm:text-left'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-center sm:text-left'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-yellow-400 '>
            <h2 className='text-3xl text-black font-bold text-center sm:text-left'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 text-black font-medium text-center sm:text-left'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-full sm:w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-bold text-center sm:text-left'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-center sm:text-left'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers