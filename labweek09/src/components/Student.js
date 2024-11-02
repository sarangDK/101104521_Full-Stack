import React from 'react'

export default function Student(props) {
  return (
    <div>
      <p style = { {fontSize: '35px'} }> Welcome to Fullstack Development - I </p>
      <h1 style = {{fontSize: '20px'}}>React JS Programming Week09 Lab exercise</h1>
      <p style = {{fontSize: '15px'}}>Student ID: {props.studentID}</p>
      <p style ={{fontSize: '10px'}} >Student Name: {props.studentName}</p>
      <p style = {{fontSize: '10px'}}>George Brown College, Toronto</p>
    </div>
  )
}