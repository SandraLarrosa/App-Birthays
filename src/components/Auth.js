import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <KeyboardAwareScrollView
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled>
      <View style={styles.view}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        {renderIsLoginOrNoLogin()}
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
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
