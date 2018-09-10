import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';
import cubo from '../videos/paralelepipedo.mp4';

export default class Cubo extends Component {
    render() {
        return (
            <Video 
                source={cubo}
                style={style.backgroundVideo}
            />
        );
    }
}

const style = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
