import {View, Text, StyleSheet} from 'react-native'

function Title () {
  return (
    <View>
  <Text style={styles.title}>
    Bem-vindo à EEEP Deputado Roberto Mesquita
  </Text>

  <Text>
  Venha fazer parte da escola que prepara profissionais para o mercado de trabalho.
  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    height: 70,
    padding: 8,
    margin: 0.2,
    textAlign: 'center,'
  },

  titleText: {
    paddingHorizontal: 8,
    
  }
})

export default Title