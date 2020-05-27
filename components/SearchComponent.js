import React,{Component} from 'react';
import {TouchableOpacity, View,Text,Image,StyleSheet,ScrollView,TextInput,Button} from 'react-native';
class Search extends Component{
    constructor(){
        super();
        this.state={
            movie:null,
            name:''
        }
       this.handlesearch=this.handlesearch.bind(this);
          
    }

    async handlesearch(text){
        const url=`https://api.themoviedb.org/3/search/movie?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US&query=${text}&page=1&include_adult=false`;
        const res=await fetch(url);
        const data=await res.json();
        this.setState({movie:data.results})
    }
    
    static navigationOptions={
        title:'Search'
    }
    
    render(){
        const {navigate}=this.props.navigation;
        return(

            <ScrollView style={styles.container}>
            <TextInput 
                placeholder="Search"
                placeholderTextColor = "white"
                style={styles.textbox}
                onChangeText={this.handlesearch}
                /> 
                
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
    textbox:{
        borderRadius:10,
        backgroundColor:'#888888',
        height:50,
        margin:10,
        padding:10,
        color:'white'
    },
    container:{
        backgroundColor:'#000000'
    },
    image:{
        width:140,
        height:260,
        margin:8,
        borderRadius:15
      },
      box:{
          justifyContent:'space-evenly',
          flexDirection:'row',
          flexWrap:'wrap'
      }
})
export default Search;