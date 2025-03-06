import {View} from 'react-native' // import dos componenentes neste arquivo App.tsx.
import Title from './components/Title'
import Subtitle from './components/Subtitle'
import Button from './components/Button'
import Footer from './components/Footer'
// função para exibir os outros componentes criados.
function App () {
  return (
    <View>
      <Title/>
      <Subtitle/>
      <Button/>
      <Footer/>
    </View>
  )
}

export default App 