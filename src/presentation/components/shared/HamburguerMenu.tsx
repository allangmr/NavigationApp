/* eslint-disable react-hooks/exhaustive-deps */
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { IonIcon } from "./IonIcon";
import { globalColors } from "../../theme/theme";

export const HamburguerMenu = () => {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable
          style={{marginLeft: 5}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            {/* <Text>Menu</Text> */}
            <IonIcon name="menu-outline" color={globalColors.primary} />
          </Pressable>
        ),
      });
    }, []);
    return (<></>);
};
