import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Linking} from 'react-native';
import{WebView} from 'react-native-webview'
import {Card,Icon} from 'react-native-elements';
class Movie extends Component{
    constructor(){
        super();
        this.state={
            movie:null,
            video:null,
            torrent:null
        }
    }
    async componentDidMount(){
        var item=this.props.navigation.getParam('movieId','');
        //alert(item);
        const url = `https://api.themoviedb.org/3/movie/${item}?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
        const url1=`https://api.themoviedb.org/3/movie/${item}/videos?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
        const res=await fetch(url);
        const res1=await fetch(url1);
        const data=await res.json();
        const data1=await res1.json();
        const url2=`https://yts.mx/api/v2/list_movies.json?query_term=${data.title}`;
        const res2=await fetch(url2);
        const data2=await res2.json();
       // alert(data.poster_path);
       this.setState({movie:data,video:data1.results[0],torrent:data2.data})

    }
    static navigationOptions={
        title:'Movie'
    }
    render(){
        return(
            <ScrollView style={styles.container}>
            {(()=>{
                if(this.state.movie!=null){
                    return(

                        <>

                        <View style={styles.block}>
                            <Text style={{color:'#999999',fontSize:22}}>{this.state.movie.title}</Text>
                        <Image source={{uri:`https://image.tmdb.org/t/p/w200/${this.state.movie.poster_path}`}} style={styles.image}/>                   

                        <Text style={{fontSize:15,color:'white',textAlign:'center'}}>{this.state.movie.overview}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22,fontWeight:'bold',color:'green'}}>Rating: </Text>
                        <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>{this.state.movie.vote_average}/10</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:22,color:'orange',fontWeight:'bold'}}>Genre: </Text>
                        <Text style={{fontSize:19,fontWeight:'bold',color:'white'}}>{this.state.movie.genres[0].name}</Text>
                        </View>
                        
                        <WebView  source={{uri:`https://youtube.com/embed/${this.state.video.key}`}} javaScriptEnabled={true}
                            domStorageEnabled={true} style={{margin:5,width:350,height:270}}/>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'red',marginRight:10}}>Download Torrent:</Text>
                        <Icon name='download' type='font-awesome' color='green' onPress={()=>{Linking.openURL(`${this.state.torrent.movies[0].torrents[0].url}`)}}/>
                        </View>
                        </View>
                        
                        </>
                    )
                }else{

                    return(
                        <Text style={styles.wait}>Loading...</Text>
                    )
                }
            })()}
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    block:{
        margin:10,
        alignItems:'center'
    },
    container:{
        backgroundColor:'#000000'
    },
    wait:{
	color:'white',
	alignSelf:'center',
margin:'auto'
	},
    image:{
        width:280,
        height:360,
        margin:10,
        alignSelf:'center',
        borderRadius:10
      }
})
export default Movie;