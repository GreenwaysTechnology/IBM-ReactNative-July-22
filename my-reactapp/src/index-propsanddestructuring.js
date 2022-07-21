
import React from 'react'
import ReactDOM from 'react-dom/client'

const ProfileMaster = props => {
    return <ProfileDetails {...props} title="Profile details" />
}

// const ProfileDetails = props => {
//     return <div>
//         <h1>{props.title}</h1>
//         <h1>id {props.id}</h1>
//         <h1>Name {props.name}</h1>
//         <h1>City {props.city}</h1>
//         <h1>Status {props.status ? "available" : "Not Available"}</h1>
//     </div>
// }
// const ProfileDetails = props => {
//     const { title, id, name, city, status } = props
//     return <div>
//         <h1>{title}</h1>
//         <h1>id {id}</h1>
//         <h1>Name {name}</h1>
//         <h1>City {city}</h1>
//         <h1>Status {status ? "available" : "Not Available"}</h1>
//     </div>
// }

const ProfileDetails = ({ title, id, name, city, status }) => <div>
    <h1>{title}</h1>
    <h1>id {id}</h1>
    <h1>Name {name}</h1>
    <h1>City {city}</h1>
    <h1>Status {status ? "available" : "Not Available"}</h1>
</div>


const App = () => <div>
    <ProfileMaster id={1} name="subramanian" status={true} city="coimbatore" />
</div>

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)
