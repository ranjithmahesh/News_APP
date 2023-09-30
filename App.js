import { StyleSheet } from "react-native";
import StackNavigater from "./StackNavigater";

export default function App() {
  return <StackNavigater />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
