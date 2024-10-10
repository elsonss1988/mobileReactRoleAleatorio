import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import { Button } from "./src/components/Button";
import { SafeContainer, TextStyled } from "./global";

export default function App() {
  const titleApp = ["Rolé", "Aleatório"];
  const category = ["Parques", "Noturno", "Museus"];
  return (
    <SafeContainer>
      <TextStyled>{titleApp[0]}</TextStyled>
      <Image
        //src={require("./assets/paulista.jpg")}
        source={require("./paulista.jpg")}
        resizeMode={"cover"}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderColor: "#e60808d2",
          borderWidth: 2,
        }}
      />
      <TextStyled>{titleApp[1]}</TextStyled>
      <StatusBar style="auto" />
      <FlatList
        data={category}
        renderItem={({ item }) => <Button text={item} />}
        keyExtractor={(category) => category}
        // contentContainerStyle={{ flexGrow: 1 }}
        contentContainerStyle={{ justifyContent: "center", flexGrow: 1 }}
      />
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
});
