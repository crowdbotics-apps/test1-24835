import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile211358Navigator from '../features/UserProfile211358/navigator';
import Tutorial211357Navigator from '../features/Tutorial211357/navigator';
import NotificationList211329Navigator from '../features/NotificationList211329/navigator';
import Settings211328Navigator from '../features/Settings211328/navigator';
import Settings211320Navigator from '../features/Settings211320/navigator';
import UserProfile211318Navigator from '../features/UserProfile211318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile211358: { screen: UserProfile211358Navigator },
Tutorial211357: { screen: Tutorial211357Navigator },
NotificationList211329: { screen: NotificationList211329Navigator },
Settings211328: { screen: Settings211328Navigator },
Settings211320: { screen: Settings211320Navigator },
UserProfile211318: { screen: UserProfile211318Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
