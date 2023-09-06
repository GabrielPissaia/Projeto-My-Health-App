import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#ADD4D0',
    overflow: 'scroll',
    padding: 15,
  },
  titleContainer: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    height: 50,
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconBox: {
    width: '14%',
    height: 41,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputBox: {
    padding: 20,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '86%',
    height: 41,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    fontSize: 19,
  },
  cardsContainer: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 14,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 60,
  },
  footerButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ADD4D0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonBox: {
    width: '50%',
    fontSize: 18,
    marginVertical: 20,
  },
  loading: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    title: {
      fontSize: 25,
      color: '#3F92C5',
    },
  },  
});

export {styles};
