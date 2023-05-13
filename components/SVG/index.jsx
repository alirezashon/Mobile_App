/** @format */

// import * as React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Svg, { Circle } from 'react-native-svg';

// export default function DottedCircle() {
//   const [rotation, setRotation] = React.useState(0);

//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setRotation((rotation) => rotation + 10);
//     }, 77);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Svg width={300} height={300}>
//         <Circle
//           cx={150}
//           cy={150}
//           r={99}
//           stroke="white"
//           strokeWidth={2}
//           strokeDasharray="5,5" // sets the dash pattern
//           fill="none"
//           strokeLinecap="round" // makes the ends of the dashes round
//           transform={`rotate(${rotation} 150 150)`}
//         />
//       </Svg>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import * as React from 'react';
// import { View, StyleSheet, Dimensions } from 'react-native';
// import Svg, { Circle } from 'react-native-svg';

// const { width, height } = Dimensions.get('window');

// const DottedCircle = () => {
//   const [rotation, setRotation] = React.useState(0);
//   const circleCount = 3;

//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setRotation((rotation) => rotation + 1);
//     }, 10);

//     return () => clearInterval(intervalId);
//   }, []);

//   const mainCircleRadius = 0.45 * Math.min(width, height);
//   const mainCircleStrokeWidth = mainCircleRadius * 0.1;
//   const mainCircleDashArray = `${2 * Math.PI * mainCircleRadius / circleCount}, ${2 * Math.PI * mainCircleRadius * (circleCount - 1) / circleCount}`;

//   const smallCircleRadius = mainCircleRadius * 0.1;
//   const smallCircleStrokeWidth = smallCircleRadius * 0.2;

//   const mainCircleX = width / 2;
//   const mainCircleY = height / 2;

//   const smallCircleX = mainCircleX + mainCircleRadius * Math.cos(2 * Math.PI * rotation / 360);
//   const smallCircleY = mainCircleY + mainCircleRadius * Math.sin(2 * Math.PI * rotation / 360);

//   return (
//     <View style={styles.container}>
//       <Svg width={width} height={height}>
//         {Array.from({ length: circleCount }, (_, i) => {
//           const angle = 2 * Math.PI * i / circleCount + 2 * Math.PI * rotation / 360;
//           const x = mainCircleX + mainCircleRadius * Math.cos(angle);
//           const y = mainCircleY + mainCircleRadius * Math.sin(angle);

//           return (
//             <Circle
//               key={i}
//               cx={x}
//               cy={y}
//               r={smallCircleRadius}
//               stroke="white"
//               strokeWidth={smallCircleStrokeWidth}
//               fill="none"
//             />
//           );
//         })}
//         <Circle
//           cx={mainCircleX}
//           cy={mainCircleY}
//           r={mainCircleRadius}
//           stroke="white"
//           strokeWidth={mainCircleStrokeWidth}
//           strokeDasharray={mainCircleDashArray}
//           fill="none"
//           strokeLinecap="round"
//           transform={`rotate(${rotation} ${mainCircleX} ${mainCircleY})`}
//         />
//       </Svg>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'black',
//   },
// });

// export default DottedCircle;

import React, { useState } from 'react'
import { View, StyleSheet, PanResponder, Vibration } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

export default function DraggableCircle() {
	const [circleCenter, setCircleCenter] = useState({ x: 150, y: 150 })
	const [circleRadius, setCircleRadius] = useState(50)

	const handleCircleMove = (event, gestureState) => {
		Vibration.vibrate([0, 100, 50, 100])
		setCircleCenter({
			x: circleCenter.x + gestureState.dx,
			y: circleCenter.y + gestureState.dy,
		})
	}

	const circlePanResponder = PanResponder.create({
		onMoveShouldSetPanResponder: () => true,
		onPanResponderMove: handleCircleMove,
	})

	return (
		<Svg
			width='100%'
			height='100%'>
			<Circle
				cx={circleCenter.x}
				cy={circleCenter.y}
				r={circleRadius}
				fill='orange'
				{...circlePanResponder.panHandlers}
			/>
		</Svg>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
})
