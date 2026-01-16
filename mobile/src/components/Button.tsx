import { TouchableOpacity, Text } from "react-native";

export default function Button({ title, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
