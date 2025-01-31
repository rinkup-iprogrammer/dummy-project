import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'; // Import LottieView
import { color } from '../Utilities/ColorConstants';
import { strings } from '../Utilities/Language/Index';
import { fontSizes } from '../Utilities/SpacingConstant';


interface RetryPopupPropsTypes {
  isVisible: boolean;
  onRetry: () => void;
  onCancel: () => void;
  title: string;
}

export const RetryPopup = ({
  isVisible,
  onRetry,
  onCancel,
  title
}: RetryPopupPropsTypes) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onCancel}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <LottieView
            source={require('../Assets/lottie/redgreysademoji.json')} 
            autoPlay
            loop
            style={{ height: 150, width: 150, alignSelf: 'center' }}
          />
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onRetry}>
              <Text style={styles.retryButton}>{strings.retry}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.cancelButton}>{strings.cancel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: color.ACCENT_LIGHT_7,
    padding: 25,
    borderRadius: 10,
    elevation:2,
  },
  modalText: {
    fontSize: fontSizes.FONT_16,
    marginBottom: 20,
    textAlign: 'center',
    color: color.BLACK,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  retryButton: {
    color: color.STATUS_BAR,
    fontSize: fontSizes.FONT_15,
  },
  cancelButton: {
    color: color.PRIMARY_DARK_1,
    fontSize: fontSizes.FONT_15,
  },
});
