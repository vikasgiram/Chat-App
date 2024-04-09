import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex '>
        <div className='from-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox broder-slate-900' />
            </label>
        </div>
        <div className='from-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox broder-slate-900' />
            </label>

        </div>
    </div>
  )
}

export default GenderCheckbox;