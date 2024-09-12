/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width >= 668) ? 'permanent' : 'slide',
        // drawerType: 'permanent',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.background,
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (<IonIcon name="home-outline" color={color} />),
        }}
        name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (<IonIcon name="person-outline" color={color} />),
        }}
        name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
      }} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
