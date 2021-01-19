import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const register = () => {
    console.log('Registrando');
    console.log(formData);
  };

  return (
    <>
      <TextInput
        placeholder="Correo electrónico"
        placeholderTextColor="#969696"
        style={styles.input}
        keyboardType="email-address"
        onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, password: e.nativeEvent.text})
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Repetir Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, repeatPassword: e.nativeEvent.text})
        }
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.btnText}>Regístrate</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    height: 50,
    color: 'white',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1E3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1E3040',
  },
  login: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
});
