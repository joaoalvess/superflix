import React from 'react';

import { LabelText } from './styles';

import { LabelAuth } from '../../../types/InputAuth';

const Label = (text: LabelAuth) => {
  return <LabelText> {text} </LabelText>;
};

export default Label;
