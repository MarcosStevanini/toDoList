import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import {
  ButtonRemove,
  ButtonTasks,
  CheckButton,
  Container,
  Text,
} from "./style";

type Props = {
  name?: string;
  handleConcluded?: any;
  onRemove?: any;
  key: any;
};

export default function index({ name,onRemove, handleConcluded }: Props) {
  const [checked, setChecked] = useState<any>(false);
  const [concludedTasks, setConcludedTasks] = useState<any>([]);
  
  function descTasks () {
    if(checked === true) {
      return <Text style={{textDecorationLine: "line-through"}}>{name}</Text>
    } else {
      return <Text>{name}</Text>
    }
  }

  function handleClick() {
    if(!checked) {
      setConcludedTasks((prevstate: any) => [...prevstate, name]);

      console.log(concludedTasks.status);
    } else {
      console.log('Desmarcado')
    }
  }


  return (
    <ButtonTasks
      onPress={() => {
        setChecked(!checked)
      }}
    >
      <Container>
        <CheckButton>
          <Checkbox
            color={"#4EA8DE"}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked)
            }}
          />
        </CheckButton>

        <Text>{descTasks()}</Text>

        <ButtonRemove onPress={onRemove}>
          <EvilIcons name="trash" size={24} color="#fff" />
        </ButtonRemove>
      </Container>
    </ButtonTasks>
  );
}
