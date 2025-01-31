import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home/Home';
import Screen1 from '../Screens/Screen1/Screen1';
import Screen2 from '../Screens/Screen2/Screen2';
import Toast from '../ComponentLibrary/Toast';
import Screen3 from '../Screens/Screen3/Screen3';
import Screen4 from '../Screens/Screen4/screen4';
import NoInternet from '../ComponentLibrary/NoInternet';
import Permission from '../Screens/Screen1/Permission';
import {ModalScreens, screens} from './Language/Index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import FullScreenLoader from '../Screens/Screen1/FullScreenLoader';
import Demo from '../Screens/Demo/Demo';
import BottomNavigator from '../Screens/Home/Component/BottomNavigator';
import ModalPopup from '../ComponentLibrary/ModalPopup';
import {color} from '../Utilities/ColorConstants';
import Animated from 'react-native-reanimated';

const screenHeight = Dimensions.get('screen').height;
const Stack = createStackNavigator();

function AuthNavigator() {
  const ToastComp = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.STATUS_BAR,
        },
        headerTintColor: color.WHITE,
        headerTitleAlign: 'center',
      }}
      initialRouteName="Home">
      <Stack.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image
                  source={require('../Assets/Icons/Png/hamburger_menu.png')}
                  style={{
                    width: 25,
                    height: 25,
                    marginLeft: 15,
                    tintColor: color.WHITE,
                  }}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name={screens.SCREEN_1}
        component={Screen1}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={screens.SCREEN_2}
        component={Screen2}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={screens.FULLSCREENLOADER}
        component={FullScreenLoader}
        options={{
          headerShown: false,
        }}
      />
      <ToastComp.Screen
        name={screens.TOAST}
        component={Toast}
        options={{
          cardStyle: {backgroundColor: 'transparent'},
          headerShown: false,
          gestureEnabled: true,
          presentation: 'transparentModal',
          gestureResponseDistance: 500,
          gestureDirection: 'vertical',
        }}
      />
      <Stack.Screen
        name={screens.SCREEN_3}
        component={Screen3}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={screens.NOINTERNET}
        component={NoInternet}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={screens.PERMISSION}
        component={Permission}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Screen4"
        component={Screen4}
        options={{
          headerShown: false
        }}/>
      <Stack.Screen
        name={screens.Demo}
        component={Demo}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={'BottomNavigator'}
        component={BottomNavigator}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export function ModalStack({style}) {
  return (
    <View style={{flex: 1, backgroundColor: color.SECONDARY_DARK_1}}>
      <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardOverlayEnabled: true,
            gestureEnabled: true,
            presentation: 'transparentModal',
            gestureDirection: 'vertical',
            cardStyle: {backgroundColor: 'transparent'},
            cardStyleInterpolator: Platform.select({
              ios: CardStyleInterpolators.forModalPresentationIOS,
              android: ({current: {progress}}) => ({
                cardStyle: {
                  translateY: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [screenHeight, 200, 1, 0],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.7],
                    extrapolate: 'clamp',
                  }),
                },
              }),
            }),
          }}>
          <Stack.Screen name="Auth">{(props) => <AuthNavigator />}</Stack.Screen>
          <Stack.Screen name = {ModalScreens.MODALPOPUP} component={ModalPopup} />
        </Stack.Navigator>
      </Animated.View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Modal">{(props) => <ModalStack />}</Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default AuthNavigator;

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    borderRadius: 50,
    elevation: 5,
  },
});
