/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { RootStackParamList } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);

  return (
    <View style={globalStyles.container}>
        <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>{params.id} - {params.name} : {params.price}</Text>
    </View>
  );
};
