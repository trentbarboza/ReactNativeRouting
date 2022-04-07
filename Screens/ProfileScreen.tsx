import { FC } from "react";
import { Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Profile: { name: string};
  }

  type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: FC<Props> = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>
}

export default ProfileScreen;
