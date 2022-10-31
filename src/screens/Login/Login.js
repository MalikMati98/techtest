import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { _TextInput, _Button,_TextError } from '../../components';
import { emailRegex, passwordRegex } from '../../constants/constants';
import { screenNames } from '../../navigation';
import { EndPoints } from '../../redux/Action/apiEndPoints';
import { DataAccess } from '../../redux/Action/DAL';
import {
  authFailed,
  authLoading,
  loginSuccess,
} from '../../redux/helperFunctions/authAction';
import { styles } from './styles';
export const Login = (props) => {
  const [name, setname] = useState('');
  const [nameError, setnameError] = useState('');
  const [Surename, setSurename] = useState('');
  const [SurenameError, setSurenameError] = useState('');
  const [email, setemail] = useState('');
  const [emailError, setemailError] = useState('');
  const [password, setpassword] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const {loading} = useSelector((state) => state.auth);
  const { Post } = DataAccess();
  const dispatch = useDispatch();
  function checkCredentials() {
    setSurenameError('');
    setemailError('');
    setnameError('');
    setpasswordError('')
    if (
      passwordRegex.test(password) &&
      name.length >= 2 &&
      Surename.length >= 2 &&
      emailRegex.test(email)
    ) {
      dispatch(authLoading());
      Post(EndPoints.login.url, { Username: 'check', Password: 'Test@1111' })
        .then((res) =>{
          if(res?.ResponseData){
            dispatch(loginSuccess(res?.ResponseData));
            props.navigation.navigate(screenNames.home.name)
          }
        })
        .catch((err) => console.error(err))
        .finally(() => dispatch(authFailed()));
    } else {


    console.log('here')
      if (!passwordRegex.test(password)) {
        // alert('error')
        setpasswordError(
          'Kindly 8 more than eight symbols, 1 uppercase, & 1 number character.',
        );
      }
      if (name.length < 2) {
        setnameError('Enter more than 2 character');
        // alert('error')
      }
      if (Surename.length < 2) {
        setSurenameError('Enter more than 2 character');
      }
      if (!emailRegex.test(email)) {
        setemailError('Kindly enter correct email format');
      }
    }
  }
  return (
    <View style={styles.main}>
      <_TextInput
        style={styles.input}
        numberOfLines={1}
        placeholderTextColor='lightgrey'
        placeholder='Enter your user name'
        value={name}
        maxLength={14}
        onChangeText={(txt) => setname(txt)}
      />
       {nameError !== '' ? (
            <_TextError>{nameError}</_TextError>
          ) : null}
      <_TextInput
        style={styles.input}
        numberOfLines={1}
        placeholderTextColor='lightgrey'
        placeholder='Enter your Surename'
        value={Surename}
        onChangeText={(txt) => setSurename(txt)}
      />
        {SurenameError !== '' ? (
            <_TextError>{SurenameError}</_TextError>
          ) : null}
      <_TextInput
        style={styles.input}
        numberOfLines={1}
        placeholderTextColor='lightgrey'
        placeholder='Enter your email'
        value={email}
        onChangeText={(txt) => setemail(txt)}
      />
      {emailError !== '' ? (
            <_TextError>{emailError}</_TextError>
          ) : null}
      <_TextInput
        style={styles.input}
        numberOfLines={1}
        placeholderTextColor='lightgrey'
        placeholder='Enter your password'
        value={password}
        onChangeText={(txt) => setpassword(txt)}
      />
       {passwordError !== '' ? (
            <_TextError>{passwordError}</_TextError>
          ) : null}
      <_Button
        onPress={checkCredentials}
        loading={loading}
        textStyle={{ color: 'black', fontSize: 20 }}
        style={styles.loginbutn}
        title='Login'
      />
    </View>
  );
};
