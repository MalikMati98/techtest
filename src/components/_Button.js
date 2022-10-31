/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Text
} from 'react-native';

export const _Button = ({
  title,
  style,
  disabled,
  loading,
  textStyle,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        style,
        {alignItems: 'center', justifyContent: 'center'},
      ]}
      disabled={disabled}
      {...rest}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={'black'}
          style={{}}
        />
      ) : (
        <Text style={textStyle}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
