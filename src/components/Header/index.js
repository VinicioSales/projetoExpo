//import React from "react"
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {Feather} from '@expo/vector-icons'
import React, {useState} from 'react'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    const [inputValue, setInputValue] = useState('');
    return(
        /*<View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Sujeito Prog</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name='user' size={27} color='#fff'/>
                </TouchableOpacity>
            </View>
        </View>*/
        <View>
            <TextInput
                placeholder='Digite aqui'
                value={inputValue}
                onChangeText={setInputValue}
            />
        </View>
        
    );
}

const styles = StyleSheet.create(
    {
        container:{
            backgroundColor: '#8000ff',
            paddingTop: statusBarHeight,
        }
    }
)