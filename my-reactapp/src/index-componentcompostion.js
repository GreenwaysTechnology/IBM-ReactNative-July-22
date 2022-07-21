
import React from 'react'
import ReactDOM from 'react-dom'

//Layouts
const Header = () => <div>
    <h1>Header</h1>
</div>
const Footer = () => <div>
    <h3>Footer</h3>
</div>
const Body = () => <div>
    <p>This is body</p>
</div>

const Page = () => <div>
    <Header />
    <Body />
    <Footer />
</div>

//root Node 
const App = () => <div>
    <Page />
</div>


//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)




