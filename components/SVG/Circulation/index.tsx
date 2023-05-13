
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const Circulation = () => {
  const [rotation, setRotation] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((rotation) => rotation + 5);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const { width, height } = Dimensions.get('window');
  const cx = 150;
  const cy = 150;
  const radius = 99;
  const dotRadius = 10;
  const dotCount = 10;

  // create an array of circle data
  const circles = Array.from({ length: dotCount }).map((_, index) => {
    const angle = (360 / dotCount) * index;
    const radians = (Math.PI / 180) * angle;
    const x = cx + (radius + dotRadius /66) * Math.cos(radians + rotation * (Math.PI / 180));
    const y = cy + (radius + dotRadius /66) * Math.sin(radians + rotation * (Math.PI / 180));
    return { cx: x, cy: y, r: dotRadius, fill: 'white', stroke: '#499b01', strokeWidth: 1 };
  });

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {circles.map((circle, index) => (
          <Circle key={index} {...circle} />
        ))}
        <Circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="white"
          strokeWidth={2}
          strokeDasharray="5,5" // sets the dash pattern
          fill="none"
          strokeLinecap="round" // makes the ends of the dashes round
        />
      </Svg>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: '131%',
    marginLeft:'26%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Circulation