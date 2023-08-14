import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { max } from 'd3-array';

const CircleChart = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const svg = select(chartRef.current);
    const data = [1, 2, 3, 4, 5];
    const width = 777;
    const height = 777;
    const xScale = scaleLinear().domain([0, data.length]).range([0, width]);

    const yScale = scaleLinear()
      .domain([0, max(data)])
      .range([height, 0]);

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', (d) => yScale(d))
      .attr('r', 5)
      .attr('fill', 'blue')
      .attr('opacity', 0)
      .transition()
      .delay((d, i) => i * 100)
      .duration(500)
      .attr('opacity', 1);

    const xAxis = axisBottom(xScale);
    const yAxis = axisLeft(yScale);

    svg.append('g').attr('transform', `translate(0, ${height})`).call(xAxis);

    svg.append('g').call(yAxis);
  }, []);

  return (
    <View>
      <svg ref={chartRef} width="777" height="777" />
    </View>
  );
};

export default CircleChart;
