/* eslint-disable react-native/no-inline-styles */
import { FlatList, Text, View } from "react-native";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { globalStyles } from "../../theme/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/StackNavigator";

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  },
  {
    id: 6,
    name: 'Product 6',
    price: 600,
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={globalStyles.container}>
        <Text
          style={{ marginBottom: 10, fontSize: 30 }}>
          Products
        </Text>
        <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() => navigation.navigate('Product', {
              id: item.id,
              name: item.name,
              price: item.price,
            })}
          />
        ) }
        />
        <Text
          style={{ marginBottom: 10, fontSize: 30 }}>
          Settings
        </Text>
        <PrimaryButton
            label="Settings"
            onPress={() => navigation.navigate('Settings')}
          />
    </View>
  );
};
