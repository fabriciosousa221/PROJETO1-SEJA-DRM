import {View, Text, StyleSheet} from 'react-native'

function Subtitle () {
  return (
    <View>
    <Text style={styles.subtitle} >
   Escolha um curso e faça sua história
   </Text>
   <Text style={styles.subtitle2}>
  Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Redes de Computadores. Todos eles possuem alta demanda no mercado atual.
  </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    backgroundColor: 'orange',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    height: 45,
    margin: 1 ,
    padding: 6,
    textAlign: 'center',
  },

})

const style = StyleSheet.create({
  subtitle2: {
   fontSize: 18,
    height: 45,
    margin: 6 ,
    padding: 6,
    textAlign: 'center',
  },
})

export default Subtitle