import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

interface NameProps {
  name: string;
}

const Icons = ({name}: NameProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle" size={32} color="#e7cd2e" />;
      break;
    case 'cross':
      return <Icon name="times" size={32} color="#38cc77" />;
      break;
    default:
      return <Icon name="pencil" size={32} color="#0d0d0d" />;
  }
};

export default Icons;
