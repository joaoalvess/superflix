import React from 'react';

import { Container } from './styles';

import Label from '../../Atoms/Label';
import Input from '../../Atoms/Input';

import { InputAuthType } from '../../../types/InputAuth';

const InputAuth = (value: InputAuthType) => {
  return (
    <Container>
      <Label text={value.text} />
      <Input placeholder={value.placeholder} />
    </Container>
  );
};

export default InputAuth;
