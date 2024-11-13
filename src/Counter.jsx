import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,reset,decrement,incrementByAmount } from './Redux/slice/counterSlice'


function Counter() {
  const count=useSelector((state)=>state.counterReducer.count)
  const dispatch= useDispatch()
  const[amount,setAmount]=useState("")
  console.log(amount);

  const handleIncrement=()=>{
    if(amount==""){
      alert("Please provide values")
    }else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }


  
  return (
    <>
    <h1 className='fw-bolder text-danger text-center mt-5 '>Counter Application</h1>
    <div className="box1 container border border-dark mt-3 p-5">
        <div className='border border-dark' >
        <h1 className='fw-bolder text-center mt-5' style={{fontSize:"70px"}}>{count}</h1>

        </div>
        
        <div className="d-flex justify-content-evenly align-items-center mt-5">
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-warning' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-primary'onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>

        {/* input field */}
        <div className="d-flex mt-5">
            <input type="text" className='form-control' placeholder='Enter amount to be incremented' onChange={e=>setAmount(e.target.value)} />
            <button className='btn btn-primary ms-3' onClick={handleIncrement}>Increment Amount</button>
        </div>

    </div>
      
    </>
  )
}

export default Counter
