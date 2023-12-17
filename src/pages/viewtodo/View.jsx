import React, { useState } from 'react';
import '../viewtodo/View.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function View() {
    const[todo,setTodo]=useState(JSON.parse(localStorage.getItem('task')) || [])
    console.log(todo);
    return(
        <>
        <Navbar></Navbar>
        <div className="App">
        <table id="customers">
        <tr>
            <th>Task</th>
            <th>Assigned By</th>
            <th>Date</th>
            <th>Time</th>
            
        </tr>
        {
             todo.map((i)=>(
            <tr>
                <td>{i.taskname}</td>
                <td>{i.assign}</td>
                <td>{i.date}</td>
                <td>{i.time}</td>
            
            </tr>
            )
            )
        }
       
    
        </table>
        </div>
        <Footer></Footer>
        </>
    )

}
