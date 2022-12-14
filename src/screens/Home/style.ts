import styled from "styled-components/native";

interface Container {
  background: number | string;
  flex: number | string;
}

interface imgLogoProps {
  width?: number | string;
  height?: number | string;
}

interface topBar extends imgLogoProps {
  background?: string;
  marginTop?: string;
  flex?: number;
}

export const View = styled.View`
  flex-direction: row;
`;

export const Container = styled.View<Container>`
  background-color: ${({ background }) => background};
  flex: ${({ flex }) => flex};
`;

export const ContainerTasks = styled.View`
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const ImageLogo = styled.Image<imgLogoProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const TopBar = styled.View<topBar>`
  height: ${({ height }) => height}px;
  background-color: ${({ background }) => background};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #333;
  padding: 20px;
  margin-right: 10px;
  border-radius: 5px;
  color: #fff;
  flex: 1;
`;

export const InputTasks = styled.View`
  padding: 0 15px;
  margin-top: -30px;
  flex-direction: row;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #1e6f9f;
  padding: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const Tasks = styled.View``;

export const List = styled.FlatList``;

export const Text = styled.Text`
  color: #808080;
  font-weight: bold;
  font-size: 16px;
`;
export const SubText = styled.Text`
  color: #808080;
`;

export const Img = styled.Image`
  margin-bottom: 40px;
`;

export const Success = styled.View`
  padding: 0 15px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between
`;