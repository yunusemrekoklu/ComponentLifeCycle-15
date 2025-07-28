import React from "react";

import { Button, Text, View } from "react-native";

/* Aşşağıda yapılan function methodu yerine 
Class methodunu uygularsak compenent lifescale nasıl uygularız onu öğrenmek icin yaptık
 */

class Foo extends React.Component{
    constructor() {
        super();
        this.state = {
            counter :0,
        }
    }
    /*Bu kısımda ise sırayla  yaptığımız lifecycle 
    - compenent oluşturlduğunda renderı yeniler
    - component her güncellendiğinde renderı yenile(button ekliyip ıncrease yaptığımızda)
    -componentten çıkıldığında renderı yeniler(yani component değiştiği veya silindiğinde)
     */

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render(){
        return(
            <View style={{
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"orange",
                borderRadius:30,
                width:200,
                height:200,

            }}>
                <Text style={{fontWeight:"bold",fontSize:50}}>{this.state.counter}</Text>
                <Button title="INCREASE" onPress={()=>{
                    this.setState({
                        counter:this.state.counter + 1,
                    });
                }}/>

            </View>
        )
    }
}

export default Foo;