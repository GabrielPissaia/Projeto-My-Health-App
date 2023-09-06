import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#ADD4D0',
  },
  titleContainer: {
    justifyContent: 'center',
    height: '25%',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Averia Libre',
  },
  button: {
    height: 70,
  },
  gradient: {
    position: 'absolute',
    opacity: 0.8,
    left: 0,
    height: '100%',
    width: '100%',
    top: 0,
  },
  error: {
    left: 50,
    bottom: -5,
    position: 'absolute',
    color: 'red',
  },
  vaccineIcon: {
    resizeMode: 'stretch',
    height: 50,
    width: 50,
  },
  title: {
    textDecorationLine: 'underline',
    fontSize: 54,
    color: '#419ED7',
  },
  buttonBox: {
    fontSize: 18,
    marginVertical: 20,
    width: '70%',
  },
  contentContainer: {
    height: '100%',
    padding: 10,
  },
  input: {
    paddingHorizontal: 10,
    height: 51,
    backgroundColor: 'white',
    color: '#419ED7',
    width: '84%',
  },
  inputContainer: {
    paddingVertical: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    display: 'flex',
  },
  titlePar: {
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 38,
    color: '#419ED7',
  },
  label: {
    paddingRight: 10,
    fontSize: 18,
    width: '18%',
  },
  inputBox: {
    paddingVertical: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
  },
});  

export {styles};
