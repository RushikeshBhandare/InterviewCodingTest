import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Counter = () =>{
    const [val, setVal] = useState(0)
    return(
        <View
            style={
                styles.rootContainer
            }
        >
            <TouchableOpacity
                onPress={()=>{ setVal(val + 1) }}
                style={styles.button}
            >
                <Text>
                    in 
                </Text>
            </TouchableOpacity>

            <Text
                style={styles.numberText}
            >
                {val}
            </Text>

            <TouchableOpacity
                onPress={()=>{setVal(val - 1)}}
                style={styles.button}
            >
                <Text>
                    de
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width: 200,
        height: 40,
        backgroundColor: 'gray',
        borderRadius: 15,
        justifyContent:'center',
        alignItems: 'center'
    },
    numberText:{
        fontSize: 100
    }
})

export default Counter