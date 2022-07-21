
import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'; // ES6

const Profile = props => {
    return <div>
        <p>id {props.id}</p>
        <p>Name {props.name}</p>
        <p>Status {props.status ? "Available" : "Not Available"}</p>
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
//default Props 
Profile.defaultProps = {
    id: 0,
    name: '',
    status: false,
    address: {
        city: ''
    },
    skills: []
}
//property validation
Profile.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.bool,
    address: PropTypes.object,
    skills: PropTypes.arrayOf(PropTypes.string)
}



const App = () => <div>
    <Profile
        id={1}
        name="Subramanian"
        status={true}
        address={{ city: 'Coimbatore' }}
        skills={['Java', 'Javascript', 'React', 'ReactNative']}
    />
    <Profile
        id={2}
        name="Karthik"
    />
    <Profile
        id={"23"}
        name="Karthik"
    />
</div>

//render into browser 
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<Header></Header>)
root.render(<App />)
