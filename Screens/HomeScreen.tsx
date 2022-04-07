import { FC } from "react";
import { Button } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Profile: { name: string};
  }

  type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen: FC<Props> = ({ navigation }) => {
    return <Button
    title="Go To Janes Profile"
    onPress={() => navigation.navigate('Profile', { name: 'Jane'})} />
}

export default HomeScreen;
