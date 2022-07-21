
import React from 'react'
import ReactDOM from 'react-dom'


// class component 
class Header extends React.Component {

    render() {
        return <div>
            <h1>React!!!</h1>
        </div>
    }
}

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<Header />)




