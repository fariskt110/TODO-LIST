import React, { useEffect, useState } from 'react'
import '../addtodo/Add.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import pic from '../../assets/img1.jpeg'
import { json, useNavigate } from 'react-router-dom'

export default function Add() {
    

    const [input, setInput] = useState({})
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('task')) || [])

    console.log(todo);
    const inputchange = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }
    console.log(input);

    const submit = () => {
        setTodo([...todo, input])
    }
    useEffect(() => {
        
        localStorage.setItem('task', JSON.stringify(todo))
    }, [todo])
    return (
        <>
            <Navbar></Navbar>
            <div className='container'>
                <form action="" className='addtodo-form'>
                    <h1 className='addtodo-heading'>ADDTODO</h1>
                    <div className='flex-input'>
                        <input type="text" name='taskname' placeholder='Task' onChange={inputchange} />
                    </div>
                    <div className='flex-input'>
                        <input type="text" name="assign" id="" placeholder='Assigned BY' onChange={inputchange} />
                    </div>
                    <div className='flex-input'>
                        <input type="text" name="date" id="" placeholder='Date' onChange={inputchange} />
                    </div>
                    <div className='flex-input'>
                        <input type="text" name='time' id='' placeholder='Time' onChange={inputchange} />
                    </div>
                    <div>
                        <input type="button" name="" id="" value="Submit" onClick={submit} />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </>
    )
}