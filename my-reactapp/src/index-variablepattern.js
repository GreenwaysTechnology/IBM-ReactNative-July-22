//first component using variables
import React from 'react'
import ReactDOM from 'react-dom'

/**
 * const VariableName = markup + js 
 */
const Header = <div>
    <h1>Hello React!</h1>
</div>

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Header)



