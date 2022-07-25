import { Text } from "react-native"

export const Greeter = props => <>
    <Text>{props.message} {props.name}</Text>
</>
//Default Props
Greeter.defaultProps = {
    message: 'Greeter',
    name: 'React Native'
}