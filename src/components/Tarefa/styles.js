import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 34px;
  height: 122px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 12px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

export const Content = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 14px;
`