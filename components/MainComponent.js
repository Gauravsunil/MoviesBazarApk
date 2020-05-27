import React,{Component} from 'react'
import Home from './HomeComponent';
import Movie from './MovieComponent'
import Popular from './PopularComponent.js'
import Top from './TopComponent'
import Search from './SearchComponent'
import Upcoming from './UpcomingComponent'
import Nowplaying from './NowplayingComponent'
import { View,StyleSheet,Text,Platform ,ScrollView,Image} from 'react-native';
import {Icon} from 'react-native-elements'
import {createStackNavigator,createDrawerNavigator,DrawerItems,SafeAreaView} from 'react-navigation';
const PopularNavigator=createStackNavigator({
    Popular:{screen:Popular,
        navigationOptions:({navigation})=>({
            headerLeft:<Icon name='menu' size={30}
            color='white'
            onPress={()=>navigation.toggleDrawer()}
            />
        })},
        
        Movie:{screen:Movie}
    

},
{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;
const SearchNavigator=createStackNavigator({
    Search:{screen:Search,
        navigationOptions:({navigation})=>({
            headerLeft:<Icon name='menu' size={30}
            color='white'
            onPress={()=>navigation.toggleDrawer()}
            />
        })},
        
        Movie:{screen:Movie}
    

},
{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;
const TopNavigator=createStackNavigator({
    Top:{screen:Top,
        navigationOptions:({navigation})=>({
            headerLeft:<Icon name='menu' size={30}
            color='white'
            onPress={()=>navigation.toggleDrawer()}
            />
        })},
        
        Movie:{screen:Movie}
    

},
{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;
const UpComingNavigator=createStackNavigator({
    Upcoming:{screen:Upcoming,
        navigationOptions:({navigation})=>({
            headerLeft:<Icon name='menu' size={30}
            color='white'
            onPress={()=>navigation.toggleDrawer()}
            />
        })},
        
        Movie:{screen:Movie}
    

},
{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;

const NowPlayingNavigator=createStackNavigator({
    Nowplaying:{screen:Nowplaying,
        navigationOptions:({navigation})=>({
            headerLeft:<Icon name='menu' size={30}
            color='white'
            onPress={()=>navigation.toggleDrawer()}
            />
        })},
        
        Movie:{screen:Movie}
    

},
{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;

const HomeNavigator=createStackNavigator({
    Home:{screen:Home,
    navigationOptions:({navigation})=>({
        headerLeft:<Icon name='menu' size={30}
        color='white' 
        onPress={()=>navigation.toggleDrawer()}
        />
    })},
    
    Movie:{screen:Movie}

},
{
    initialRouteName:'Home',
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#000000',
            padding:10
        },
        headerTitleStyle:{
            color:'#fff'
        },
        headerTintColor:'#fff'
    })
}) ;

const CustomDrawerContentComponent=(props)=>(
    <ScrollView>
        <SafeAreaView style={styles.safearea}
            forceInset={{top:'always',horizontal:'never'}}>
              <View style={styles.drawerHeader}>
                  <View style={{flex:1}}>
                      <Image source={require('../assets/logo.png')}
                      style={styles.drawerImage}/>
                  </View>
                  <View style={{flex:2}}>
                      <Text style={styles.drawerHeaderText}>
                          MoviesBazar
                      </Text>
                  </View>
              </View>
              <DrawerItems {...props}/>  
            </SafeAreaView>
    </ScrollView>
)
const MainNavigator=createDrawerNavigator({
    Home:{
        screen:HomeNavigator,
        navigationOptions:{
            title:'Home',
            drawerLabel:'Home'
        }
    },
    Search:{
        screen:SearchNavigator,
        navigationOptions:{
            title:'Search',
            drawerLabel:'Search'
        }
    },
    Popular:{
        screen:PopularNavigator,
        navigationOptions:{
            title:'Popular',
            drawerLabel:'Popular'
        }
    },
    Top:{
        screen:TopNavigator,
        navigationOptions:{
            title:'Top Rated',
            drawerLabel:'Top Rated'
        }
    },
    Upcoming:{
        screen:UpComingNavigator,
        navigationOptions:{
            title:'Upcoming',
            drawerLabel:'Upcoming'
        }
    } ,
    Nowplaying:{
        screen:NowPlayingNavigator,
        navigationOptions:{
            title:'Now Playing',
            drawerLabel:'Now Playing'
        }
    }     
},
{
    drawerBackgroundColor:'#555555',
    contentComponent:CustomDrawerContentComponent
});

class Main extends Component{
    
    render(){
        return(
            <View style={{flex:1,marginTop:10 }} >
                <Text></Text>
                <MainNavigator />
        </View>
        
        )
    }
}
const styles=StyleSheet.create({
    container:{
        margin:10,
        padding:10
    },
    safearea:{
        flex:1
    },
    drawerHeader:{
        backgroundColor:'#000000',
        height:140,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        flexDirection:'row'
    },
    drawerHeaderText:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'
    },
    drawerImage:{
        margin:10,
        width:80,
        height:60
    }
});
export default Main;