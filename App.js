import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

/*
Ciclos de vida de un componente:

Son una serie de estados que nos sirven para poder apreciar el flujo de creación de un componente
en RN, y a la vez, dentro de estos, un componente necesita pasar para poder SER. (Apto para componentes con
estado)

°Montaje (se produce la primera vez al generarse un componente)
°Actualización (se produce cuando el componente ya generado se está actualizando)
°Desmontaje (se produce cuando el componente se elimina)
*/

/**Creación de clase que describe dichos ciclos de vida */
class CicloVida extends React.Component {
  constructor(...args) {
    console.log('Ejecutando constructor', ...args);
    super(...args);

    this.state = {
      estado: 'Inicializando el constructor',
    };
  }

  //MÉTODOS DE MONTAJE

  //Método que se ejecuta justo antes del primer renderizado del componente.
  componentWillMount() {
    console.log('Ejecutando componentWillMount');
  }

  //Método de montaje, solo ejecutado del lado del cliente, producido después del primer render (inmediatamente)
  componentDidMount() {
    console.log('Se ejecutó componentDidMount');
  }

  //-------------------------------------------------------------------

  //MÉTODOS DE ACTUALIZACIÓN

  //Método de actualización que se ejecuta cuando las propiedades se van a actualizar (previo a), no antes del primer render, si no antes de inicializar las propiedades por primera vez.
  //Recibe el valor futuro del objeto futuro del objeto de propiedades que se va a tener.

  componentWillReceiveProps(nextProps) {
    console.log(
      'Se ejecuta componentWillReceiveProps con las propiedades futuras',
      nextProps,
    );
  }

  //Es un método de actualización y tiene una particularidad especial con respecto a otros métodos del ciclo de vida, que consiste en que debe devolver un valor boleano.
  //Si devuelve verdadero quiere decir que el componente se debe renderizar de nuevo y si recibe falso quiere decir que el componente no se debe de renderizar de nuevo.
  //Se invocará tanto cuando se producen cambios de propiedades o cambios de estado y es una oportunidad de comprobar si esos cambios deberían producir una actualización en la vista del componente.
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ',
      nextProps,
      nextState,
    );
    // debo devolver un boleano
    return true;
  }

  //Método de actualización se invocará justo antes de que el componente vaya a actualizar su vista.
  componentWillUpdate(nextProps, nextState) {
    console.log(
      'Ejecutando componentWillUpdate. Próximas propiedades y estado: ',
      nextProps,
      nextState,
    );
  }

  //Método de actualización que se ejecuta justamente después de haberse producido la actualización del componente.
  //Como parámetros en este caso recibes el valor anterior de las propiedades y el estado.
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'Ejecutando componentDidUpdate. Anteriores propiedades y estado: ',
      prevProps,
      prevState,
    );
  }

  //Este es el único método de desmontado y se ejecuta en el momento que el componente se va a retirar, útil para realizar limpieza.
  componentWillUnmount() {
    console.log('Se desmonta el componente...');
  }

  render() {
    return (
      <View>
        <Text>Componente del ciclo de vida</Text>
        <Text>Estado: {this.state.estado}</Text>
        <Text>Propiedad: {this.state.propiedad}</Text>
      </View>
    );
  }
}

CicloVida.defaultProps = {
  propiedad: 'Valor por defecto definido para la propiedad',
};

/**Creación de clase que nos sirve para utilizar dichos ciclos de vida */
class UsarCicloVida extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      valorPropiedad: 'Test de valor de propiedad',
    };
  }

  cambiarPropiedad() {
    this.setState({
      valorPropiedad: 'Otro valor',
    });
  }

  render() {
    return (
      <View>
        <CicloVida propiedad={this.state.valorPropiedad} />
        <Button
          onPress={this.cambiarPropiedad.bind(this)}
          title="Press"></Button>
      </View>
    );
  }
}
export default UsarCicloVida;
