/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { Text, View } from "react-native";
import { globalStyles } from "../../theme/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParamList } from "../../routes/StackNavigator";
// import { useEffect } from "react";
import { HamburguerMenu } from "../../components/shared/HamburguerMenu";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  // const dimensions = useWindowDimensions();

  // useEffect(() => {
  // navigation.setOptions({
  //     headerLeft: () => (
  //       dimensions.width < 668 && (
  //         <Pressable
  //           onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
  //         >
  //           <Text>Menu</Text>
  //         </Pressable>
  //       )
  //     ),
  // });
  // }, [dimensions.width]);

  return (
    <View style={globalStyles.container}>
      <HamburguerMenu />
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text>HomeScreen</Text>
    </View>
  );
};
