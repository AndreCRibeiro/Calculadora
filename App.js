import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class App extends Component {
  state = {
    a: '',
    b: '',
    operation: '',
    result: '',
  };

  handleResult = () => {
    const { a, b, operation } = this.state;

    const FirstNumber = parseFloat(a);
    const SecondNumber = parseFloat(b);

    if (operation === '+') {
      const soma = FirstNumber + SecondNumber;
      this.setState({ result: soma });
    } else {
      const sub = SecondNumber - FirstNumber;
      this.setState({ result: sub });
    }
  };

  render() {
    const { a, b, result, operation } = this.state;

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.container}>
          <View style={styles.result}>
            <Text>{`${b} ${operation} ${a}`}</Text>
            {result ? <Text>{` = ${result}`}</Text> : null}
          </View>
          <View style={styles.options}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 1 }) : this.setState({ b: 1 });
                }}
                style={styles.buttons}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 2 }) : this.setState({ b: 2 });
                }}
                style={styles.buttons}>
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 3 }) : this.setState({ b: 3 });
                }}
                style={styles.buttons}>
                <Text>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 4 }) : this.setState({ b: 4 });
                }}
                style={styles.buttons}>
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 5 }) : this.setState({ b: 5 });
                }}
                style={styles.buttons}>
                <Text>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 6 }) : this.setState({ b: 6 });
                }}
                style={styles.buttons}>
                <Text>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 7 }) : this.setState({ b: 7 });
                }}
                style={styles.buttons}>
                <Text>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 8 }) : this.setState({ b: 8 });
                }}
                style={styles.buttons}>
                <Text>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  operation ? this.setState({ a: 9 }) : this.setState({ b: 9 });
                }}
                style={styles.buttons}>
                <Text>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TextInput
                style={styles.input}
                placeholder="Primeiro valor"
                onChangeText={(text) => {
                  operation
                    ? this.setState({ a: text })
                    : this.setState({ b: text });
                }}
              />
              <TextInput
                style={styles.input}
                placeholder="Segundo valor"
                onChangeText={(text) => {
                  operation
                    ? this.setState({ a: text })
                    : this.setState({ b: text });
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Operações: </Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ operation: '+' });
                }}
                style={styles.buttons}>
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ operation: '-' });
                }}
                style={styles.buttons}>
                <Text>-</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.handleResult();
                }}
                style={styles.buttons}>
                <Text>=</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ a: '', b: '', operation: '', result: '' });
                }}
                style={styles.buttons}>
                <Text>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    marginBottom: 25,
    backgroundColor: '#aaa',
    width: '75%',
    height: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  options: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    width: '75%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 2,
  },
  buttons: {
    marginLeft: 15,
    marginBottom: 5,
  },
  input: {
    margin: 5,
    backgroundColor: '#bbb',
    marginBottom: 10,
  },
});
