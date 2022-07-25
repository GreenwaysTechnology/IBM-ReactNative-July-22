import { Text,View } from "react-native"

export const User = props => <>
    <Text>Id : {props.user.id}</Text>
    <Text>Name :{props.user.name}</Text>
    <Text>City : {props.user.city}</Text>
    <View>
        {
            props.skills.map(skill => {
                return <Text>{skill}</Text>
            })
        }

    </View>
</>
//Default Props
User.defaultProps = {
    user: {
        userId: 0,
        name: 'React Native',
        city: 'Coimbatore',
        skills: []
    }
}