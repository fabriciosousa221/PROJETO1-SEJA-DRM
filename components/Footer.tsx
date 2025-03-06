import {View, Text, StyleSheet} from 'react-native'

function Footer () {
  return (
    <View>
    <Text style={styles.footer}>
    2024 EEEP Deputado Roberto Mesquita
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
  
    textAlign: 'center',
    margin: 6 ,
    padding: 6,
  },

})

export default Footer