import { Pressable, Text } from "react-native";
import { globalStyles } from "../../theme/theme";

interface PrimaryButtonProps {
    onPress: () => void;
    label: string;
}

export const PrimaryButton = ({onPress, label} : PrimaryButtonProps) => {
  return (
    <Pressable
    onPress={onPress}
    style={globalStyles.primaryButton}>
    <Text style={globalStyles.buttonText}>{label}</Text>
  </Pressable>
  );
};
