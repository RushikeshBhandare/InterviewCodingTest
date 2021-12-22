import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import axios from 'axios'
import FoodBlock from '../components/FoodBlock'

const HomeScreen = () =>{
    const [data, setData] = useState()

    useEffect(()=>{
       const getData = async () =>{
            const res = await axios.get('https://random-data-api.com/api/food/random_food?size=10')
            setData(res.data)
            console.log(res.data)
        }
        getData()
    }, [])

    return (
        <View 
            style={styles.rootContainer}
        >
            <View
                style={styles.mainText}
            >
                <Text
                    style={
                        styles.text
                    }
                >
                    Home Scrren
                </Text>
            </View>

            <FlatList
                data={data}
                renderItem={({item})=>{
                    return(
                        <FoodBlock
                        title={item.dish}
                        des={item.description}
                        />
                    )
                }}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        alignItems: 'center'
    },  
    mainText:{
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default HomeScreen