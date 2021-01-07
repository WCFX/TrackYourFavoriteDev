import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#5cad87'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  font-family: Nunito-ExtraBold;
  padding: 20px;
  font-size: 22px;
  color: #fff;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
export const Input = styled.TextInput`
  border-radius: 6px;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #fff;
  width: 80%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;
export const SubmitButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #fff;
  border-radius: 6px;
  margin-right: 10px;
  padding: 10px;
`;
export const SubmitButtonText = styled.Text``;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
