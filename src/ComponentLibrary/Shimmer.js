import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import ShimmerPlaceHolder from './ShimmerPlaceHolder';
import { color } from '../Utilities/ColorConstants';
import { spacing } from '../Utilities/SpacingConstant';

const Shimmer = ({ margin = 0, customStyle = {}, height = '100%', width = '100%' }) => {
  const bigImageAndSomeRowsAnimated = useRef([]);

  const colorShimmer = [color.SHIMMER_WHISPER, color.WHITE, color.SHIMMER_WHISPER];

  useEffect(() => {
    runBigAvatarAndSomeRowsAnimated();
    // Clean up animation on unmount if needed
    return () => {
      bigImageAndSomeRowsAnimated.current.forEach((ref) => {
        if (ref && ref.getAnimated) {
          ref.getAnimated().stop();
        }
      });
    };
  }, []);

  const runBigAvatarAndSomeRowsAnimated = () => {
    if (Array.isArray(bigImageAndSomeRowsAnimated.current) && bigImageAndSomeRowsAnimated.current.length > 0) {
      const animations = bigImageAndSomeRowsAnimated.current.map((animate) => {
        if (animate && animate.getAnimated) {
          return animate.getAnimated();
        }
        return null;
      });

      Animated.parallel(animations, {
        stopTogether: false,
      }).start(() => {
        runBigAvatarAndSomeRowsAnimated();
      });
    }
  };

  return (
    <View style={[styles.container, { margin, ...customStyle }]}>
      <ShimmerPlaceHolder
        colorShimmer={colorShimmer}
        ref={(ref) => bigImageAndSomeRowsAnimated.current.push(ref)} // Ensure this line is not commented
        style={{ height, width, borderRadius: 10 }}
        visible={false}
        backgroundColorBehindBorder={color.WHITE}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:spacing.WIDTH_30 
    ,flexDirection: 'row'
   },
});

export default Shimmer;
