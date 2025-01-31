import React from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {color} from '../Utilities/ColorConstants';
import {buttonSize, buttonType, spacing} from '../Utilities/SpacingConstant';
import {Button} from './Button';
import { strings } from '../Utilities/Language/Index';

interface ModalPopupProps {
  isVisible: boolean;
  onClose: () => void;
  imageSource?: any;
  modalText?: string;
  isButtonVisible?: boolean;
  onButtonClick?: ()=>void
}

const ModalPopup = ({
  isVisible,
  onClose,
  imageSource,
  modalText,
  isButtonVisible,
  onButtonClick
}: ModalPopupProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.modalContainer}>
        {/* Close button outside the popup */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <View>
            <Text style={styles.xIcon}>X</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.modalContent}>
          {/* Dynamic content */}
          {imageSource && <Image source={imageSource} style={styles.image} />}
          {modalText && <Text style={styles.text}>{modalText}</Text>}
          {isButtonVisible && (
            <Button
              label={strings.modal_button_name}
              type={buttonType.PRIMARY}
              size={buttonSize.FIXED}
              width={spacing.WIDTH_180}
              onPress={onButtonClick}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align to the bottom of the screen
    alignItems: 'flex-end',
    borderTopEndRadius: spacing.WIDTH_10,
  },
  closeButton: {
    width: spacing.WIDTH_30,
    height: spacing.WIDTH_30,
    borderRadius: spacing.WIDTH_26,
    backgroundColor: color.FORD_GRAY, // Set your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.WIDTH_6,
  },
  modalContent: {
    backgroundColor: color.WHITE,
    padding: spacing.WIDTH_20,
    borderRadius: spacing.WIDTH_10,
    width: '100%', // Occupy full width
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: spacing.WIDTH_100,
    height: spacing.WIDTH_100,
    resizeMode: 'cover',
    marginBottom: spacing.WIDTH_10,
  },
  text: {
    marginBottom: spacing.WIDTH_10,
  },
  xIcon: {
    color: color.BLACK, // Set your desired text color
    fontSize: spacing.WIDTH_20,
  },
});

export default ModalPopup;
