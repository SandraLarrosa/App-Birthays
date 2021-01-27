import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  const renderIsLoginOrNoLogin = () => {
    return isLogin ? (
      <LoginForm changeForm={changeForm} />
    ) : (
      <RegisterForm changeForm={changeForm} />
    );
  };
  return (
    <View style={styles.view}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
      {renderIsLoginOrNoLogin()}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '120%',
    height: 320,
    marginTop: 50,
    marginBottom: 10,
  },
});
