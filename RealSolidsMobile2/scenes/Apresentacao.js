import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/tales1.png';

let falas = [];

export default class Apresentacao extends Component {
    

    constructor(props) {
        super(props);

        falas = [
            'Com esse aplicativo, você poderá estudar alguns sólidos geométricos e conhecer algumas de suas propriedades mais importantes. Avance e escolha um sólido para seguir com suas descobertas!'
            
        ];

        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 0) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            Actions.menu();
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View style={[style.innerContainer, { alignItems: 'center', paddingTop: 60, height: '30%' }]}>
                    <Text style={style.titulo}>Real Solids II</Text>
                </View>

                <View style={[style.innerContainer, { height: '70%' }]}>
                    <ImageBackground source={conversa} style={{ flex: 1 }}>
                        <View style={style.texto}>
                            <Text style={style.fala}>
                                {falas[this.state.indice]}
                            </Text>
                        </View>

                        <View style={style.button}>
                            <TouchableOpacity onPress={() => this.proximo()}>
                                <Image source={next} size={32} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                   
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    innerContainer: {
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    texto: {
        // borderWidth: 1,
        width: '66%',
        height: '25%',
        marginLeft: '25%',
        marginTop: '10%',
    },

    fala: {
        fontSize: 18,
    },

    button: {
        alignItems: 'center',
        paddingTop: '44.75%',
        marginLeft: '85%',
        borderRadius: 20,
    },

    
});
