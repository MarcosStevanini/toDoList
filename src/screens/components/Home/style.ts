import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  border: solid 1px #333;
  border-radius: 5px;
  margin: 15px;
  padding: 10px;
`;
export const Text = styled.Text`
  flex: 1;
  padding: 0 7px;
  color: #f2f2f2;
`;
export const ButtonTasks = styled.TouchableOpacity``;
export const ButtonRemove = styled.TouchableOpacity`
  padding: 10px;
  flex: 0.15;
  justify-content: center;
  align-items:center;
`;
export const CheckButton = styled.View`
  border-radius: 50px;
  border: solid 1px #4EA8DE;
`;
