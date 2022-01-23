import React,{useEffect,useState} from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from "../constants/Colors";


const  NotificationCard=props=>{
   
    return(
        <View style={styles.notificationCard}>
                {props.forNotificationScreen && <View>
                    <Text style={styles.title}>{props.notificationTitle}</Text>
                <Text style={styles.subTitle}>{props.customerFname} {props.customerLname} wants to eat your {props.orderedDish}</Text>
                    </View>}
                {props.forOrderScreen &&
                 <View>
                <Text style={styles.title}>Order Id: #{props.orderId}</Text>
                <Text style={styles.title}>{props.customerFname}{props.customerLname} wants to eat your {props.orderedDish}</Text>
                </View>
                }
                <Text style={{...styles.title,color:Colors.primaryColor}}>Order Details</Text>
                <View style={styles.notificationContainer}>
                <Text style={{...styles.subTitle}}>{props.orderedDish}</Text>
                <Text style={{...styles.subTitle}}>{props.servingSize} Person</Text>
                </View>
                <View style={styles.notificationContainer}>
                <Text style={{...styles.subTitle}}>Total Amount</Text>
                <Text style={{...styles.subTitle}}>{props.totalAmount}</Text>
                </View>
                <View style={styles.notificationContainer}>
                <Text style={{...styles.subTitle}}>Order Status</Text>
                <Text style={{...styles.subTitle}}>{props.status}</Text>
                </View>
                <View style={styles.notificationContainer}>
                <Text style={{...styles.subTitle}}>Order Placed At</Text>
                <Text style={{...styles.subTitle}}>{props.timeOfOrder}</Text>
                </View>
                
            {props.currentStatus==='pending' &&
            <View style={styles.btnContainer}>
            <TouchableOpacity>
                <View style={{...styles.buttonContainer}}>
                    <Text style={styles.btnTitle}>Cancel</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{...styles.buttonContainer}}>
                    <Text style={styles.btnTitle}>Confirm</Text>
                </View>
            </TouchableOpacity>
            </View>
            }
        </View>
    )
};

const styles=StyleSheet.create({


    notificationCard:{
         width:'95%',
         backgroundColor:'#f5f5f5',
         borderRadius:15,
         elevation:5,
         padding:15,
         overflow:'hidden',
         marginVertical:5,
         marginHorizontal:10
       
    },   
    
    title:{
        fontSize:16,
        fontWeight:"bold",
        color:'#000'
    },
    subTitle:{
        fontSize:16,
        color:"#000"
    },
    notificationContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonContainer:{
        backgroundColor:Colors.primaryColor,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:70,
        marginHorizontal:5,
        borderRadius:10
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingTop:5
    },
    btnTitle:{
        color:Colors.whiteColor,
        fontSize:16,
    }


});

export default NotificationCard;