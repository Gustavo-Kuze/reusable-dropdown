import styled from 'styled-components';
import colors from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props: { align?: 'left' | 'right' }) =>
    props.align === 'right' ? 'flex-end' : 'flex-start'};
`;

export const DropdownButtonStyle = styled.button`
  background-color: ${(props) =>
    props.disabled ? colors.black900 : colors.black100};
  border: none;
  color: ${(props) => (props.disabled ? colors.white200 : 'white')};
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  height: 48px;
  width: 48px;
  &:hover {
    background-color: ${(props: { disabled: boolean }) =>
      props.disabled ? colors.black900 : colors.black200};
  }
  & > * {
    pointer-events: none;
  }
`;

export const DropdownListStyle = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
  display: flex;
  visibility: ${(props: { isOpen: boolean }) =>
    props.isOpen ? 'visible' : 'hidden'};
  flex-direction: column;
`;

export const DropdownListItemStyle = styled.li`
  background-color: ${colors.black100};
  color: ${colors.white100};
  padding: 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: default;
  &:hover {
    background-color: ${colors.blue100};
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
`;
