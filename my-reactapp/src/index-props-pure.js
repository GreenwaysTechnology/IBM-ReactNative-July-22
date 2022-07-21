
import React from "react";
import ReactDOM from "react-dom/client";


//Pure or Not
//props = {name:''}
const Greeter = props => {
    //props are read only, cant be modified by component itself
    //The role of componen is just display(View)
    //props.name = 'Murugan'
    return <div>
        <h1>Hello {props.name}</h1>
    </div>
}



const App = () => <div>
     <Greeter name="Subramanian"/>
</div>

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)