import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();

    if(isLoading)
        return (
            <View style={{ flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <ActivityIndicator color="red" size={60}/>
            </View>
        )

    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}
