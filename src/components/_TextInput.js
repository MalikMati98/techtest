import React, { useState } from 'react';
import { TextInput} from 'react-native';
export const _TextInput = ({style, ...rest})=> {
  const[color,setcolor]=useState('black');
    return (
      <TextInput
      onFocus={()=>setcolor('green')}
      onBlur={()=>setcolor('black')}
        {...rest}
        style={[style,{borderColor:color}]}
      />
    );
  };
