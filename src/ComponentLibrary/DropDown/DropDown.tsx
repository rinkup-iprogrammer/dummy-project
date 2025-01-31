import { StyleSheet, Text, TouchableOpacity, View, Image, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { spacing } from '../../Utilities/SpacingConstant'
import CSS from 'csstype';

interface DropDownPropsTypes {
    selectValue?: string | undefined;
    headingLabel?: string | undefined;
    ismodalVisible: boolean;
    titleViewStyle?: StyleProp<ViewStyle> | undefined;
    selectOption: ()=>void;
}

const DropDown = (props: DropDownPropsTypes) => {
    const selectOption = props.selectOption
    const selectValue = props.selectValue ?? 'Select'
    const headingLabel = props.headingLabel ?? 'Heading'
    const ismodalVisible = props.ismodalVisible
    const titleViewStyle = props.titleViewStyle ?? {}
    return (
        <View>
            <View style={[{ ...styles.headingContainer },titleViewStyle]}>
                <Text style={styles.heading}>{headingLabel}</Text>
            </View>
            <View style={{ ...styles.dropDownContainer }}>
                <TouchableOpacity style={{ ...styles.clickable }} onPress={selectOption} >
                    <Text style={styles.selectedText}>{selectValue}</Text>
                    <Image
                        source={require('../../Assets/Icons/Webp/arrow_down.webp')}
                        style={{
                            transform: [{ rotate: ismodalVisible ? "180deg" : "0deg" }],
                            ...styles.arrowIcon
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer: {
        backgroundColor: 'lightgray',
        alignSelf: 'flex-start',
        height: 65,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 5,
    },
    dropDownContainer: {
        marginTop: -30,
        backgroundColor: 'white',
        borderRadius: 35,
    },
    clickable: {
        borderWidth: 0.5,
        paddingHorizontal: 15,
        borderColor: 'gray',
        borderRadius: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectedText: {
        fontSize: 15,
        color: 'black'
    },
    arrowIcon: {
        tintColor: 'gray',
        width: spacing.WIDTH_20,
        height: spacing.WIDTH_50,
    },
    heading: {
        color: 'black'
    },
});


export default DropDown;
