'use client'

import React, {useState} from 'react'
import Button from './Button';

function Navbar() {
    const [index, setIndex] = useState(0);
  return (
    <div className="max-w-screen-xl border-b-2 border-zinc-500 h-16 mx-auto mt-4 flex justify-between items-center" >
      <div className='flex gap-16 font-light text-[13px] items-center w-2/3 justify-start'>
        <img className="mr-4" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        {
            ["Home", "Work", "Culture", '', "Newz"].map((elem,i) => {
                return (
                    <>
                    { elem.length ?    
                        <span onClick={() => setIndex(i)} className='text-white hover:cursor-pointer flex items-center'>
                             {i === index && <div className="w-1 h-1 mr-1 rounded-full bg-green-400 shadow-green-500 shadow-sm"></div>}
                             {elem}
                        </span>
                        :
                        <span className="h-[20px] w-[1px] bg-zinc-500" >
                        </span>
                    }
                    </>
                )
            })
        }
      </div>
      <div className="w-1/3 flex justify-end items-center h-[100%]">
        <Button text="Start a project"/>
      </div>
    </div>
  )
}

export default Navbar
