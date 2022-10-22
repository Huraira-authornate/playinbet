import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: 70px;
  background-color: red;
  border-radius: 20px;
`;

export function InputBox({ children, width }) {
  return <InputWrapper width={width}>{children}</InputWrapper>;
}
