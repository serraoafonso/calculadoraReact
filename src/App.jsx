import React, { useState } from 'react'
import './App.css'

export default function App(){
  const[result, setResult] = useState(0)
  const [primeiro, setPrimeiro]=useState(true)
  const [num1, setNum1]=useState(0)
  const [num2, setNum2]=useState(0)
  const [conta, setConta]=useState()
  const [mostrar, setMostrar]=useState(true)
  const[a, setA] = useState(true)//a e b certificam que é o primeiro dígito
  const [b, setB] = useState(true)
  const [c, setC] = useState(true)//para evitar ter mais que um ponto nas dizimas
  const [d, setD] = useState(true)

const poeConta = (e)=>{
  setPrimeiro(false)
  if(e.target.getAttribute('value')=='X'){
    setConta('X')
  }else if(e.target.getAttribute('value')=='/'){
    setConta('/')
  }else if(e.target.getAttribute('value')=='+'){
    setConta('+') 
  }else if(e.target.getAttribute('value')=='-'){
    setConta('-')
  } 
}
const calcula=()=>{
  setMostrar(true)
  if(conta=='X'){
    setResult(num1*num2)
  }
  else if(conta=='/'){
    setResult(num1/num2)
  }
  else if(conta=='+'){
    setResult(Number(num1)+Number(num2))
  }
  else if(conta=='-'){
    setResult(num1-num2)
  }
  
}
const porNumero = (e)=>{
  setMostrar(false)
  if(primeiro){
    if(a){
      setNum1(e.target.getAttribute('value'))
    }else{
    setNum1(num1 + e.target.getAttribute('value'))}
  setA(false)}
    if(!primeiro){
      if(b){
        setNum2(e.target.getAttribute('value'))
      }else{
    setNum2(num2 + e.target.getAttribute('value'))}
    setB(false)
  }
}
const zerar=() =>{
  setNum1(0)
  setNum2(0)
  setPrimeiro(true)
  setConta('')
  setResult(0)
  setMostrar(true)
  setA(true)
  setB(true)
  setC(true)
  setD(true)
}
const poePonto = (e)=>{
  if(primeiro && c){
    setNum1(num1+e.target.getAttribute('value'))
    setC(false)
  }
  if(!primeiro && d){
    setNum2(num2+e.target.getAttribute('value'))
    setD(false)
  }
}

  return(
    <>
      <h1>Caluladora</h1>
      <main>
      <div className='container'>
        <div className='result'>
        {mostrar ? result : (primeiro ? num1 : num2) }
        </div>
        <button className='childBtn' onClick={()=>zerar()}>AC</button>
        <button className='childBtn'>(</button>
        <button className='childBtn'>)</button>
        <button className='childBtn' value='/' onClick={(e)=>poeConta(e)}>/</button>
        <button className='childBtn' value={7} onClick={(e)=>porNumero(e)}>7</button>
        <button className='childBtn' value={8} onClick={(e)=>porNumero(e)}>8</button>
        <button className='childBtn' value={9} onClick={(e)=>porNumero(e)}>9</button>
        <button className='childBtn' value='X' onClick={(e)=>poeConta(e)}>*</button>
        <button className='childBtn' value={4} onClick={(e)=>porNumero(e)}>4</button>
        <button className='childBtn' value={5} onClick={(e)=>porNumero(e)}>5</button>
        <button className='childBtn' value={6} onClick={(e)=>porNumero(e)}>6</button>
        <button className='childBtn' value='-' onClick={(e)=>poeConta(e)}>-</button>
        <button className='childBtn' value={1} onClick={(e)=>porNumero(e)}>1</button>
        <button className='childBtn' value={2} onClick={(e)=>porNumero(e)}>2</button>
        <button className='childBtn' value={3} onClick={(e)=>porNumero(e)}>3</button>
        <button className='childBtn' value='+' onClick={(e)=>poeConta(e)}>+</button>
        <button className='childBtn' value={0} onClick={(e)=>porNumero(e)}>0</button>
        <button className='childBtn' value='.'onClick={(e)=>poePonto(e)}>.</button>
        <button className='childBtn'>?</button>
        <button className='childBtn' onClick={()=>calcula()}>=</button>
      </div>
      </main>
    </>
  )
}