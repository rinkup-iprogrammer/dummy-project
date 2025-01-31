import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, FlatList, Image } from "react-native";
import { buttonSize, buttonType, spacing } from "../../Utilities/SpacingConstant";
import { Button } from "../Button";

interface ModelPropsTypes {
  modalVisible:boolean;
  setModalVisible:any;
  data:any;
  renderItem:any;
  headingLabel:string;
}

const Model = ({
  modalVisible,
  setModalVisible,
  data,
  renderItem,
  headingLabel
}: ModelPropsTypes) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible }}
        >
            <View style={styles.modalView}>
                <Pressable onPress={setModalVisible}>
                    <Image
                        source={require('../../Assets/Icons/Webp/ic_close_black.webp')}
                        style={styles.arrowIcon}
                    />
                </Pressable>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingLabel}>{headingLabel}</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                >
                </FlatList>
                <Button
                    label={'ok'}
                    type={buttonType.PRIMARY}
                    size={buttonSize.LARGE}
                    disabled={false}
                    onPress={setModalVisible}
                />
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 500,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonClose: {
    backgroundColor: 'gray',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headingContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  headingLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrowIcon: {
    width: spacing.WIDTH_20,
    height: spacing.WIDTH_20,
    alignSelf: 'flex-end',
    marginBottom: spacing.WIDTH_10,
  },
});

export default Model;
