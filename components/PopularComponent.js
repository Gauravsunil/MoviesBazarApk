import React,{Component} from 'react';
import {TouchableOpacity, View,Text,Image,StyleSheet,ScrollView,Linking} from 'react-native';
import{WebView} from 'react-native-webview'
import {Card,Icon} from 'react-native-elements';
class Popular extends Component{
    constructor(){
        super();
        this.state={
            movie:null,
        }
    }
    async componentDidMount(){
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
        const res=await fetch(url);
        const data=await res.json();
        //alert(data.results[0]);
        this.setState({movie:data.results})

    }
    static navigationOptions={
        title:'Popular'
    }
    
    render(){
        const {navigate}=this.props.navigation;
        return(
            <ScrollView style={styles.container}>
            {(()=>{
                if(this.state.movie!=null){
                    return(
                        <View style={styles.box}>
                        {this.state.movie.map((item)=>{
                            return(             
                                <TouchableOpacity onPress={() => navigate('Movie',{movieId:item.id})}>
                                    <Image source={{uri:`https://image.tmdb.org/t/p/w200/${item.poster_path}`}} style={styles.image}/>
                                </TouchableOpacity>
                                )
                        })}
           
                        
                        </View>
                    )
                }else{

                    return(
                        <Text></Text>
                    )
                }
            })()}
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#000000'
    },
    image:{
        width:140,
        height:260,
        marginTop:10,
        margin:'auto',
        borderRadius:15
      },
      box:{
          justifyContent:'space-evenly',
          flexDirection:'row',
          flexWrap:'wrap'
      }
})
export default Popular;