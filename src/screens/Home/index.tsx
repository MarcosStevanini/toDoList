import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  TopBar,
  Container,
  ImageLogo,
  InputTasks,
  Input,
  AddButton,
  Tasks,
  List,
  Text,
} from "./style";
import { Alert } from "react-native";

export default function home() {
  const [tasks, setTasks] = useState([]);

  const [changeText, setChangeText] = useState("");

  const addTasks = () => {
    if (!changeText) return true;

    if (tasks.includes(changeText)) {
      Alert.alert("", "Tarefa já cadastrada", [
        {
          text: "Voltar",
        },
      ]);
      setChangeText("");

      return;
    }

    setTasks((prevTasks) => [...prevTasks, changeText]);
    setChangeText("");
  };

  const renderItens = ({ item }: { item: string[] }) => {
    return <Text>{item}</Text>;
  };

  return (
    <Container flex={1} background={"#1a1a1a"}>
      <TopBar height={300} background={"#0D0D0D"}>
        <ImageLogo
          width={120}
          height={120}
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />
      </TopBar>

      <InputTasks>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#FFFFFF"}
          onChangeText={(value) => setChangeText(value)}
          value={changeText}
        />
        <AddButton onPress={addTasks}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </AddButton>
      </InputTasks>

      <Tasks>
        <List
          data={tasks}
          renderItem={renderItens}
          keyExtractor={(_, index) => index.toString()}
        />
      </Tasks>
    </Container>
  );
}
