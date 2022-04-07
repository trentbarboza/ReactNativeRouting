import { FC, useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Profile: { name: string};
    Login: {name: string}
  }

  type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen:FC<Props> = ({ navigation }) => {
    const [myName, setMyName] = useState("");
    return(
        <View>
            <TextInput style={styles.text} onChangeText={(e) => setMyName(e)}/>

            <Button title="Login" onPress={() => {
                navigation.navigate('Profile', {name : myName})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        borderBottomWidth: 1,
        borderBottomColor: "red",
        padding: 20
    }
})

export default LoginScreen;