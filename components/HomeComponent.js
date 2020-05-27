import React from 'react';
import { StyleSheet,ScrollView, Text, View,Image,TouchableOpacity } from 'react-native';
// import {POPULAR} from '../shared/Popular'
// import {TOP} from '../shared/TopDetails'
// import {UPCOMING} from '../shared/Upcoming'
//import Main from './components/MainComponent';
class Home extends React.Component {
  constructor(){
    super();
    this.state={
      popular:null,
      top:null,
      upcoming:null,
      nowplaying:null
    }
  }
  static navigationOptions = {
    title: 'Home'
};
async componentDidMount(){
  const url1 = `https://api.themoviedb.org/3/movie/popular?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
  const url2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
  const url3 = `https://api.themoviedb.org/3/movie/top_rated?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
  const url4 = `https://api.themoviedb.org/3/movie/now_playing?api_key=f2389eed03b839edeb2178897fa33c6d&language=en-US`;
  const res1=await fetch(url1);
  const res2=await fetch(url2);
  const res3=await fetch(url3);
  const res4=await fetch(url4);
  const data1=await res1.json();
  const data2=await res2.json();
  const data3=await res3.json();
  const data4=await res4.json();
  //alert(data.results[0]);
  this.setState({popular:data1.results,top:data3.results,upcoming:data2.results,nowplaying:data4.results})
}
  render(){
    const {navigate}=this.props.navigation;
   return (

    <View style={styles.container}>
     {(()=>{
       if(this.state.top!=null){
         return(

          
      <ScrollView style={styles.mainscroll}>
        
      <Text style={styles.head}>Now Playing</Text>
      
      <View style={styles.scroll}>
      <ScrollView  horizontal={true}>
        
        {this.state.nowplaying.map((item)=>{
          return(
          <>
          
          <TouchableOpacity onPress={() => navigate('Movie',{movieId:item.id})}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w200/${item.poster_path}`}} style={styles.image}/>
          </TouchableOpacity>
          </>
          )
        })}

      </ScrollView>
      </View>
      

      <Text style={styles.head}>POPULAR MOVIES</Text>
      
      <View style={styles.scroll}>
      <ScrollView  horizontal={true}>
        
        {this.state.popular.map((item)=>{
          return(
          <>
          
          <TouchableOpacity onPress={() => navigate('Movie',{movieId:item.id})}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w200/${item.poster_path}`}} style={styles.image}/>
          </TouchableOpacity>
          </>
          )
        })}

      </ScrollView>
      </View>
      
      <Text style={styles.head}>TOP MOVIES</Text>
      <View style={styles.scroll}>
      <ScrollView  horizontal={true}>
        {this.state.top.map((item)=>{
          return(
          <>
          <TouchableOpacity onPress={() => navigate('Movie',{movieId:item.id})}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w200/${item.poster_path}`}} style={styles.image}/>
          </TouchableOpacity>
          </>
          )
        })}

      </ScrollView>
      </View>
      
      <Text style={styles.head}>UPCOMING MOVIES</Text>
      <View style={styles.scroll}>
      <ScrollView  horizontal={true}>
        {this.state.upcoming.map((item)=>{
          return(
          <>
          <TouchableOpacity onPress={() => navigate('Movie',{movieId:item.id})}>
          <Image source={{uri:`https://image.tmdb.org/t/p/w200/${item.poster_path}`}} style={styles.image}/>
          </TouchableOpacity>
          </>
          )
        })}

      </ScrollView>
      
      </View>
      </ScrollView>
         )
       }
       else{
         return(
           <Text style={{color:'white'}}>Loading.....</Text>
         )
       }
     })()}
    </View>
  );
  }
}


const styles = StyleSheet.create({
  header:{
    width:800,
    backgroundColor:'#5ccc',
    alignItems:'center',
    padding:20,

  },
  mainscroll:{
    marginTop:20
  },
  head:{
    fontStyle:'italic',
    fontSize:20,
    marginLeft:10,
    color:'white',
    fontWeight:'bold'
  },
  scroll:{
    flexDirection:'row',
    height:220,
    margin:10
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    fontFamily:'arial',
    justifyContent: 'center',
  },
  main:{
    fontSize:25,
    borderWidth:2,
    borderRadius:8,
    padding:10,
    fontWeight: 'bold',
  },
  image:{
    width:140,
    height:210,
    margin:5,
    borderRadius:5
  }
});
export default Home;