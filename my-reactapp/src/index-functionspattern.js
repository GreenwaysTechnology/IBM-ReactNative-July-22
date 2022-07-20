
import React from 'react'
import ReactDOM from 'react-dom'


// function Header(){
//     //return jsx 
//     return <div>
//         <h1>Hello React!</h1>
//     </div>
// }


// const Header = () => {
//     //return jsx 
//     return <div>
//         <h1>Hello React!!</h1>
//     </div>
// }
const Header = () => <div>
    <h1>Hello React!!</h1>
</div>


//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<Header />)




