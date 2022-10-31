import React from 'react';
import { Text } from 'react-native';
import {style} from './styles';
export const _TextError= ({children}) => (
  <Text style={style.textErr}>{children}</Text>
);
