import React from 'react';
import ReactDOM from "react-dom/client";
import surati from "./image/email.png";
import surati2 from "./image/google-maps.png"
import surati1 from "./image/facebook.png"


function App() {

    return(
      <React.Fragment>
        <img src={surati} width={400} height ={400}/>
        <img src={surati2} width={400} height ={400}/>
        <img src={surati1} width={400} height ={400}/>
      </React.Fragment>
    )
}

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);