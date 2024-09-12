/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-hooks/exhaustive-deps */
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import { globalStyles } from "../../theme/theme";
import { DrawerActions, NavigationProp, useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { RootStackParamList } from "../../routes/StackNavigator";
import { useEffect } from "react";

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dimensions = useWindowDimensions();

  useEffect(() => {
  navigation.setOptions({
      headerLeft: () => (
        dimensions.width < 668 && (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          >
            <Text>Menu</Text>
          </Pressable>
        )
      ),
  });
  }, [dimensions.width]);

  return (
    <View style={globalStyles.container}>
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
