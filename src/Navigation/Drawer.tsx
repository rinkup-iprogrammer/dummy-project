import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screens } from "./Language/Index";
import AuthNavigator from "./RootNavigator";
import Screen1 from "../Screens/Screen1/Screen1";
import Screen2 from "../Screens/Screen2/Screen2";
import HomeScreen from "../Screens/Home/Home";
import Screen3 from "../Screens/Screen3/Screen3";

import Screen4 from "../Screens/Screen4/screen4";
const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        <Drawer.Screen
          name="Screen1"
          component={Screen1}
          options={{
            title: "Screen 1",
            drawerLabel: "Screen1 label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        <Drawer.Screen
          name="Screen2"
          component={Screen2}
          options={{
            title: "Screen2",
            drawerLabel: "Screen2 label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        <Drawer.Screen
          name="Screen3"
          component={Screen3}
          options={{
            title: "Screen3",
            drawerLabel: "Screen3 label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
      <Drawer.Screen
          name="Screen4"
          component={Screen4}
          options={{
            title: "Screen4",
            drawerLabel: "Screen4 label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
      </Drawer.Navigator>
  );
}