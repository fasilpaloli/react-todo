import './App.css';
import {useState} from 'react'

function App() {

  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')

  return (
    <div>
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List </h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's new day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={(e)=>setToDos([...toDos,{id:Date.now(), text:toDo, isDone:false,isInProgress:false}])} className="fas fa-plus"></i>
      </div>
      
      <div className="todos">
        {
          toDos.map((obj,index)=>{
            return(
              <div key={index} className="todo">
              <div className="left">
                

                
                <p>{obj.text}</p>
              </div>
              <div className="right">
              <input style={{margin:"5px"}} value={obj.isDone} onChange={(e)=>{
                    setToDos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj2.isDone=e.target.checked
                        obj2.isInProgress=false
                      } 
                      return obj2
                    }))
                  }} type="checkbox" name="checkButton" id="" />
                <label style={{color:"green"}} htmlFor="">Done</label>

                <input style={{margin:"5px"}} value={obj.isInProgress} onChange={(e)=>{
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===obj.id){
                      obj2.isInProgress=e.target.checked
                      obj2.isDone=false
                    }
                    return obj2
                  }))
                }} type="checkbox" name="checkButton" id="" />
                <label style={{color:"blue"}} htmlFor="">In Progress</label>
                <i style={{margin:"5px", color:"red"}} onClick={()=>setToDos(toDos.filter(obj2=>obj2.id!==obj.id))} className="fas fa-times"></i>
              </div>
            </div>
            )
          })
        }
        
      </div>
      </div>
      <div className='underSection row' style={{width: "100%"}}>
        <div className='Active' style={{margin:"5px", width:"350px",float:"left",backgroundColor:"red", textAlign:"center"}}>
          <h2>Active</h2>
          <hr />
          {toDos.map((obj,index)=>{
            if(!obj.isDone && !obj.isInProgress){
              return(
                <h3 key={index}>{obj.text}</h3>
              )
            }
            return null
          })}
        </div>
        <div className='In Progress' style={{margin:"5px",width:"350px",float:"left",backgroundColor:"blue", textAlign:"center" }}>
        <h2>In Progress</h2>
        <hr />
          {toDos.map((obj,index)=>{
            if(obj.isInProgress){
              return(
                <h3 key={index}>{obj.text}</h3>
              )
            }
            return null
          })}
        </div>
        <div className='Done' style={{margin:"5px",width:"350px",float:"left",backgroundColor:"green", textAlign:"center"}}>
        <h2>Done</h2>
        <hr />
          {toDos.map((obj,index)=>{
            if(obj.isDone){
              return(
                <h3 key={index}>{obj.text}</h3>
              )
            }
            return null
          })}

        </div>
      </div>
    
    </div>
  );
}

export default App;

//active
//done
//inprogress