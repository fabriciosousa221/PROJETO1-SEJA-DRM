import {View, Text, StyleSheet} from 'react-native'

function Button () {
  return (
    <View>
  <Text style={styles.button}>
   Inicie sua jornada na DRM!    
  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c7e0f4',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    height: 45,
    margin: 6,
    padding: 5,
    textAlign: 'center',
  },

})

export default Button