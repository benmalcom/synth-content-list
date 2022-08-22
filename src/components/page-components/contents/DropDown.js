import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

export const DropDown = ({ options, value, onSelect, title }) => {
  const [selected, setSelected] = useState(() =>
    value ? options.find(item => item.value) : options[0]
  );

  useEffect(() => {
    if (selected?.value === value) return;
    onSelect?.(selected);
  }, [onSelect, selected, value]);
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="link"
        iconSpacing={0}
        _hover={{ textDecoration: 'none' }}
        rightIcon={
          <Icon as={HiChevronDown} color="#199BB5" w="24px" h="24px" />
        }
      >
        <Flex align="center" columnGap={2}>
          <Text color="#50555B" textTransform="uppercase">
            {title}
          </Text>
          <Text color="primary.500" textTransform="uppercase">
            {selected.label}
          </Text>
        </Flex>
      </MenuButton>
      <MenuList>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={() => setSelected(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

DropDown.propTypes = {
  value: PropTypes.string,
  onSelect: PropTypes.func,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
export default DropDown;
