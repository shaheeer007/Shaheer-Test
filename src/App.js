import React from 'react';
import './App.css';
import MostUpvoted from './components/MostUpvoted';
import MostRecent from './components/MostRecent';

function App() {

  const [statusRecent, setStatusRecent] = React.useState(false)
  const [statusVoted, setStatusVoted] = React.useState(false)
  
  

  const handleClickRecent=(e)=>{
  
    setStatusRecent(true)
    setStatusVoted(false)
    
  }

  const handleClickVoted=(e)=>{
  
    setStatusVoted(true)
    setStatusRecent(false)
    
  }
  
  if(statusRecent){
    document.getElementById("display-Voted").style.display="none";
    document.getElementById("display-Recent").style.display="block";
    
  }

  if(statusVoted){
    document.getElementById("display-Recent").style.display="none"; 
    document.getElementById("display-Voted").style.display="block";
  }

  return (
    <div className="App">
      <div id="display-Voted">
        <MostUpvoted />
      </div>
      
      <div id="display-Recent"> 
      {statusRecent ? <MostRecent/> : null} 
      </div>
      
      <div>
      <button onClick={handleClickRecent} id="Recent-btn">
            Most Recent
      </button>
           
      </div>
    
      <div>
      <button onClick={handleClickVoted} id="Voted-btn">
            Most Voted
      </button>
      </div>
    
    </div>
  );
}

export default App;
