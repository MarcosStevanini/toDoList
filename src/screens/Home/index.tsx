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
  Img,
  ContainerTasks,
  SubText,
  Success,
  View
} from "./style";
import { Alert } from "react-native";
import HomeComponent from '../components/Home';
import Test from '../components/Home'

export default function home() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [changeText, setChangeText] = useState<string>("");

  const [createValue, setCreateValue] = useState<any>(0);

  const [concludedValue, setConcludedValue] = useState<any>(0);

  const updateConcluded = (e: any) => {
    setConcludedValue(e);
  }
  
  
  const addTasks = () => {
    const valueTasks = tasks.length + 1;

    if (!changeText) {
      Alert.alert('', 'Adicionar uma tarefa é obrigatório.', [{text: 'Entendi', style: 'cancel'}]);
      return;
    };

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
    setCreateValue(valueTasks);
    setChangeText("");
  };

  
  function handleParticipanteRemove(name: string) {
    
    
    Alert.alert('', `Deseja remover esta tarefa?`, [
      {
        text: 'Sim',
        style: 'cancel',
        onPress: () => {'ok'
          setTasks(prevState => prevState.filter(tasks => tasks !== name));
          setCreateValue(tasks.length - 1);
        }    
      },
      {
        text: 'Não',
        style: 'destructive'
      }
    ])
  }

  return (
    <Container flex={1} background={"#1a1a1a"}>
      <TopBar height={265} background={"#0D0D0D"}>
        <ImageLogo
          width={120}
          height={120}
          resizeMode="contain"
          source={require("../../../assets/logo.png")}
        />
        <Text>O seu novo gerenciador de tarefas</Text>
        <SubText>feito para organizar o seu dia-a-dia</SubText>
      </TopBar>

      <InputTasks>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#FFFFFF"}
          onChangeText={(value) => setChangeText(value)}
          value={changeText}
        />
        {/* <AddButton onPress={Alert.alert('Deseja cadastrar', `${changeText}?`, [{text: 'Cadastrar', style: 'cancel', onPress: addTasks}, {text: "Não", style:'destructive'}])}> */}
        <AddButton onPress={addTasks}>
          <AntDesign name="pluscircleo" size={24} color="white" />
        </AddButton>
      </InputTasks>

      <Success>
        <View>
          <Text style={{marginRight: 10, color: '#4EA8DE',}}>Criadas</Text>
          
          <View style={{backgroundColor: '#333', paddingHorizontal: 9, justifyContent: "center", alignItems: "center", borderRadius: 50,}}>
            <Text style={{color: '#FFF'}}>{createValue}</Text>
          </View>
        </View>

        <View>
          <Text style={{marginRight: 10, color: '#8284FA',}}>Concluídas</Text>
          <View style={{backgroundColor: '#333', paddingHorizontal: 9, justifyContent: "center", alignItems: "center", borderRadius: 50,}}>
            <Text style={{color: '#FFF'}}>{concludedValue}</Text>
          </View>
        </View>
      </Success>

      <Tasks>
        <List
          data={tasks}
          renderItem={({item}: any) => <HomeComponent key={item} name={item} handleConcluded={updateConcluded} onRemove={() => handleParticipanteRemove(item)}/>}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ContainerTasks>
              <Img source={require('../../../assets/task.png')}/>
              <Text>Você ainda não tarefas cadastradas</Text>
              <SubText>Crie tarefas e organize seus itens a fazer</SubText>
            </ContainerTasks>
          )}
        />
      </Tasks>

    </Container>
  );
}
