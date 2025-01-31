import React, { useState, useEffect, useRef } from "react";
import { Animated, Platform, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import { color } from "../Utilities/ColorConstants";

const ShimmerPlaceHolder = React.forwardRef(
  ({
    width = 100,
    reverse = false,
    height = 15,
    colorShimmer = [color.SHIMMER_GRAY, color.SHIMMER_GGS, color.SHIMMER_GRAY],
    style,
    widthShimmer = 1,
    children,
    visible,
    backgroundColorBehindBorder = color.ACTIVE_GREEN,
    hasBorder = false,
    location = [0.3, 0.5, 0.7],
    autoRun = false,
    duration = 2000,
    delay = 0,
    isInteraction = true,
  }, ref) => {
    const beginShimmerPosition = useRef(new Animated.Value(-1)).current;

    useEffect(() => {
      loopAnimated();
    }, [autoRun]);

    const loopAnimated = () => {
      const shimmerAnimated = getAnimated();

      shimmerAnimated.start(({ finished }) => {
        if (!visible && finished) {
          loopAnimated();
        }
      });
    };

    const getAnimated = () => {
      beginShimmerPosition.setValue(-1);
      return Animated.timing(beginShimmerPosition, {
        toValue: 1,
        delay,
        duration,
        useNativeDriver: true,
        isInteraction,
      });
    };

    const linearTranslate = beginShimmerPosition.interpolate({
      inputRange: [-1, 0],
      outputRange: reverse ? [width, -width] : [-width, width],
    });

    return (
      <View style={!visible ? [styles.container, style] : []}>
        {!visible ? (
          <View style={styles.shimmerContainer}>
            <Animated.View style={[styles.shimmer, { transform: [{ translateX: linearTranslate }] }]}>
              <LinearGradient
                colors={colorShimmer}
                style={[styles.gradient, { width: 80 * widthShimmer }]}
                start={{
                  x: -1,
                  y: 0.5,
                }}
                end={{
                  x: 2,
                  y: 0.5,
                }}
                locations={location}
              />
            </Animated.View>

            {/* Force run children */}
            <View style={styles.childrenContainer}>{children}</View>

            {/* If style has border */}
            {((style && style.borderRadius) || hasBorder) &&
              Platform.OS == "android" ? (
              <View
                style={[
                  styles.borderBackground,
                  {
                    borderRadius: style.borderRadius || width / 2 + 40 / 2,
                    borderWidth: 40,
                    borderColor: backgroundColorBehindBorder,
                  },
                ]}
              />
            ) : null}
          </View>
        ) : (
          children
        )}
      </View>
    );
  }
);

ShimmerPlaceHolder.defaultProps = {
  width: 200,
  height: 15,
  widthShimmer: 1,
  duration: 2000,
  delay: 0,
  colorShimmer: [color.SHIMMER_GRAY, color.SHIMMER_GGS, color.SHIMMER_GRAY],
  reverse: false,
  autoRun: false,
  visible: false,
  backgroundColorBehindBorder: color.WHITE,
  hasBorder: false,
  location: [0.3, 0.5, 0.7],
  isInteraction: true,
};


ShimmerPlaceHolder.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  widthShimmer: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  colorShimmer: PropTypes.array,
  reverse: PropTypes.bool,
  autoRun: PropTypes.bool,
  visible: PropTypes.bool,
  children: PropTypes.any,
  style: PropTypes.any,
  backgroundColorBehindBorder: PropTypes.string,
  hasBorder: PropTypes.bool,
  isInteraction: PropTypes.bool,
};
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  shimmerContainer: {
    flex: 1,
    backgroundColor: color.SHIMMER_GRAY,
  },
  shimmer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  childrenContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 7,
    bottom: 0,
    zIndex: 1,
    flex: 1,
  },
  borderBackground: {
    position: "absolute",
    top: -40,
    bottom: -40,
    right: -40,
    left: -40,
  },
});


export default ShimmerPlaceHolder;
