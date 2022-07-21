import React from 'react'
import ReactDOM from 'react-dom/client'


//state inside class component
class Counter extends React.Component {
    //Component state(data)
    //Component state must be object
    state = {
        count: 0
    }

    //listener 
    onIncrement = () => {
        //console.log('onIncrement')
        //this.state.count++
        //console.log('onincrement',this.state)
        this.setState((prevState)=> {
            //writing state mutation logic
            console.log('state mutation logic goes', prevState)
            //this function must return object ?
            // return {
            //     count: prevState.count + 1
            // }
            //  return Object.assign({}, prevState, { count: prevState.count + 1 })
            return { ...prevState, count: prevState.count + 1 }

        })
    }

    render() {
        console.log('render', this.state)
        return <div>
            <h1>Counter App</h1>
            <h3>Count {this.state.count}</h3>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}



const App = () => <div>
    <Counter />
</div>

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)
