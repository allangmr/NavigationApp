/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable, Text } from "react-native";

export const HamburguerMenu = () => {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Text>Menu</Text>
          </Pressable>
        ),
      });
    }, []);
    return (<></>);
};
