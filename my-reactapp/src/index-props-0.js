
import React from 'react'
import ReactDOM from 'react-dom/client'

//Parent component will send data to child component.
const Greeter = (props) => {
    return <div>
        <h1>Parent Component</h1>
        <Hello message={"Hello"} name={"Subramanian"} />
        <Hello message={"Hello"} name={"John"} />
        <Hello message={"Hello"} name={"Mohit"} />
    </div>
}

const Profile = props => {
    return <div>
        <p>id {props.id}</p>
        <p>Name {props.name}</p>
        <p>City {props.address.city}</p>
        <p>Skills</p>
        {/* jsx comment: use for loop (map) to iterate an */}
        <ul>
            {
                props.skills.map(skill => {
                    return <li>{skill}</li>
                })
            }
        </ul>
    </div>
}


//props is just variable, holding data passed by parent
//props value is literal object 
const Hello = (props) => {
    console.log(props)
    return <div>
        <h2>{props.message} {props.name}</h2>
    </div>
}



//Child Component will receive the data from the parent




const App = () => <div>
    <Greeter />
    <Profile
        id={1}
        name="Subramanian"
        status={true}
        address={{ city: 'Coimbatore' }}
        skills={['Java', 'Javascript', 'React', 'ReactNative']}
    />
</div>


//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)
