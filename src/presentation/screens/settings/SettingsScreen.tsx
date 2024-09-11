/* eslint-disable react-native/no-inline-styles */
import { Text, View } from "react-native";
import { globalStyles } from "../../theme/theme";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { StackActions, useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
          Settings
        </Text>
        <PrimaryButton
        label="Back"
        onPress={() => navigator.goBack()}
         />
        <PrimaryButton
          label="Home"
          onPress={() => navigator.dispatch( StackActions.popToTop() )}
         />
    </View>
  );
};
