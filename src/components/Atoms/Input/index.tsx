import React from 'react';

import { InputInsert } from './styles';

import { InputAuth } from '../../../types/InputAuth';

const Input = (placeholder: InputAuth) => {
  return <InputInsert placeholder={`${placeholder}`} />;
};

export default Input;
