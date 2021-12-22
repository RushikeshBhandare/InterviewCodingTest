import React from "react";
import { StyleSheet, Text,View } from "react-native";

const FoodBlock = ( {title, des} ) =>{
    return(
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                {title}
            </Text>
            <Text
                style={styles.des}
            >
              {des}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width : '90%',
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    des:{
        paddingLeft: 10
    }
})

export default FoodBlock