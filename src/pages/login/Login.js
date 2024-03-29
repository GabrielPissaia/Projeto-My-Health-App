import {signInWithEmailAndPassword} from 'firebase/auth';
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {auth, db} from '../../firebase/config.js';
import {styles} from './Login_sty';
import {useDispatch} from 'react-redux';
import {collection, onSnapshot, query, where} from 'firebase/firestore';
import {reducerSetUser} from '../../redux/users/userSlice.js';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const emailRegex =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/g;

  const [email, onChangeEmail] = React.useState('gabrielpissss@gmail.com');
  const [password, onChangePassword] = React.useState('Skyrim123789');

  const [emailError, onChangeEmailError] = React.useState('');
  const [passwordError, onChangePasswordError] = React.useState('');

  function signIn() {
    if (validateFields()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          findUserById(user.user.uid);
          navigation.navigate('Main');
        })
        .catch(error => console.log(JSON.stringify(error)));
    }
  }

  function createAccount() {
    navigation.navigate('CreateAccount', {name: 'Gabriel'});
  }

  function forgotPassword() {
    navigation.navigate('ForgotPassword', {name: 'Gabriel'});
  }

  function validateFields() {
    onChangeEmailError('');
    onChangePasswordError('');
    let isValid = true;

    if (!email.match(emailRegex)) {
      onChangeEmailError('E-mail inválido');
      isValid = false;
    }

    if (!password) {
      onChangePasswordError('Senha inválida');
      isValid = false;
    }

    return isValid;
  }

  async function findUserById(userId) {
    const q = query(collection(db, 'users'), where('userId', '==', userId));
    
    onSnapshot(q, snapshot => {
      snapshot.forEach(u => {
        dispatch(
          reducerSetUser({
            userId: u.data().userId,
            name: u.data().name,
            gender: u.data().gender,
            birthdayDate: u.data().birthdayDate,
            email: u.data().email,
          }),
        );
      });
    });
  }

  return (
    <ImageBackground
      source={require('../../assets/images/initial-background.jpeg')}
      resizeMode="cover"
      style={styles.container}>
      <LinearGradient
        colors={['#949d98', '#FFFFFF', '#DDE6E5', '#949d98']}
        style={styles.gradient}></LinearGradient>

      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.vaccineIcon}
            source={require('../../assets/images/icon-vaccine.jpg')}
          />
          <Text style={styles.title}>MyHealth</Text>
        </View>
        <View>
          <Text style={styles.titlePar}>
            Controle as suas vacinas e fique seguro
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Digeite seu e-mail"
              placeholderTextColor="#419ED7"
            />
            {emailError.length > 0 && (
              <Text style={styles.error}>{emailError}</Text>
            )}
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Digeite sua senha"
              placeholderTextColor="#419ED7"
              secureTextEntry={true}
            />
            {passwordError.length > 0 != null && (
              <Text style={styles.error}>{passwordError}</Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Button
              onPress={signIn}
              title="Entrar"
              color="#37BD6D"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              onPress={createAccount}
              title="Criar minha conta  "
              color="#419ED7"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
          <View style={styles.buttonBox}>
            <Button
              onPress={forgotPassword}
              title="Esqueci minha senha"
              color="#B0CCDE"
              accessibilityLabel="Learn more about this purple button"
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
