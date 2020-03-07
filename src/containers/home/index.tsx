import { Button, Input, Text, Layout } from '@ui-kitten/components';
import React, { Component, } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet } from 'react-native';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

    render() {
        const { etanol, gasolina, resultado, calculate, handleForm } = this.props.homeStore;

        return (<>
            <Layout style={styles.layout}>
                <Layout style={styles.group}>
                    <Text style={styles.text}>Etanol:</Text>
                    <Input value={etanol.toString()} keyboardType='numeric' onChangeText={(etanol) => handleForm({ etanol })} />
                    <Text style={styles.text}>Gasolina:</Text>
                    <Input value={gasolina.toString()} keyboardType='numeric' onChangeText={(gasolina) => handleForm({ gasolina })} />
                    <Button style={styles.button} onPress={() => calculate()} >CALCULAR</Button>
                    <Text style={styles.paragraph}>{resultado}</Text>
                </Layout>
            </Layout>
        </>);
    }
}

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 24,
        backgroundColor: '#598BFF',
        borderColor: '#598BFF',
        fontSize: 22
    },
    layout: {
        flex: 1,
    },
    group: {
        margin: 24
    },
    text: {
        fontSize: 20,
        marginTop: 10
    }
});