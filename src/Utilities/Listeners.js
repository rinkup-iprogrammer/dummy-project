import NetInfo from '@react-native-community/netinfo';
import { log, navigateToScreen, networkAvailable } from './Utility';
import { screens } from '../Navigation/Language/Index';

let firstTime = true

export const addNetworkListener = (props, AppState, clearTimeoutRef) => {
    NetInfo.addEventListener(
        async (state) => {
            log('LISTENER', state)
            log('LISTENER firstTime', firstTime)
            if (!firstTime) {

                const net = await networkAvailable()
                log("net..........", net)
                log('LISTENER firstTime', 'firstTime')
                log('appstate...', AppState)

                if (!net || AppState?.currentState.match(/inactive|background/)) {
                    clearTimeoutRef();
                    navigateToScreen(screens.NOINTERNET);
                }
            } else {
                firstTime = false
            }
        }
    );
}