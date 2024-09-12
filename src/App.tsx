import './gesture-handler';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: A props object containing a "key" prop is being spread into JSX']);
import { NavigationContainer } from "@react-navigation/native";
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
// import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};
