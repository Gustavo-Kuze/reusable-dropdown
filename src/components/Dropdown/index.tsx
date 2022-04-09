import React, { useEffect } from 'react';
import {
  Container,
  DropdownButtonStyle,
  DropdownListItemStyle,
  DropdownListStyle,
} from './styledComponents';
import { MoreIcon } from './MoreIcon';

interface Props {
  align?: 'left' | 'right';
  isOpen?: boolean;
  items: string[];
  onToggle?: (isOpen: boolean) => void;
  onItemClick?: (item: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<Props> = ({
  align = 'right',
  isOpen = false,
  items = [],
  onToggle = () => {},
  onItemClick = () => {},
  disabled = false,
}) => {
  const verifyOutsideClick = () => {
    document.body.onclick = function (e: Event) {
      if (
        !Array.from(
          ((e.target as HTMLElement) || { classList: [] }).classList
        ).find((item) => item.includes('dropdown'))
      ) {
        onToggle(false);
      }
    };
  };

  useEffect(() => {
    verifyOutsideClick();
  }, []);

  return (
    <Container className="dropdown-container" align={align}>
      <DropdownButtonStyle
        tabIndex={1}
        className="dropdown-button"
        onClick={() => onToggle(!isOpen)}
        onKeyUp={(e) => {
          if (e.key === 'Escape') {
            onToggle(false);
          }
        }}
        disabled={disabled}
      >
        <MoreIcon />
      </DropdownButtonStyle>

      <DropdownListStyle className="dropdown-list" isOpen={isOpen}>
        {items.map((item, i) => (
          <DropdownListItemStyle
            tabIndex={i + 1}
            key={`dropdown-item-key-${i}`}
            className="dropdown-list-item"
            onClick={() => onItemClick(item)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                onItemClick(item);
              }
            }}
          >
            {item}
          </DropdownListItemStyle>
        ))}
      </DropdownListStyle>
    </Container>
  );
};

export default Dropdown;
