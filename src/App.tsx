import { useState } from 'react';
import './App.css'

function App() {
  const [sudoku,setSudoku] = useState<String>('9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254');
  const solution:String = "971536842286974513354812679563421798497658321128793465732145986645289137819367254";

  const setNumber = (value:string, ind:number)=>{
     const oldData = sudoku.split('');
     oldData[ind] = value==="" ? " " : value.length>1?value[1]:value.trim();
     setSudoku(oldData.join(''));     
  }
  return (
    <div>

      <div style={{display: 'flex', flexFlow:'row wrap', alignItems:'center', justifyContent:'center'}}>
      {sudoku.split('').map((val,ind)=>
      <div key={ind} style={{backgroundColor: 'white', color:'black',flex:'10%', height: '50px',margin:'1px'}}>
          <input pattern="[0-9]*" min={0} max={9} onChange={({target})=>setNumber(target.value,ind)} style={{height:'100%',fontSize:'18px',padding:'0px', border:'none', width:'100%',textAlign:'center'}} inputMode='numeric' value={val}/>
      </div>)}
    </div>
    </div>
  )
}

export default App
