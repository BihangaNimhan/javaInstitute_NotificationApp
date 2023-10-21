import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";



export function But(props) {
const [Textcolor, setColor] = useState(props.color);
const [backGroundColor, setBackGroundColor] = useState(props.backgroundColor);
   
    const ui = (
        <Pressable disabled={props.disabled} onPress={props.onPress} style={styles.but}>
            <View style={[styles.view,{backgroundColor:backGroundColor}]}>
                <Text style={{ color: Textcolor }}>{props.name}</Text>
            </View>
        </Pressable>

    );



    return ui;
}
const styles = StyleSheet.create(
    {
        but: {
            justifyContent: "center",
            alignItems: "center",
            margin:30,
        },
        view: {
            backgroundColor: "green",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius:3,
            width:"100%",
            justifyContent:"center",
            alignItems:"center",
            margin:20,
        }
    }
);