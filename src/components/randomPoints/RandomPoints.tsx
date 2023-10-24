import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RandomPoint = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Generate random points
    const points = d3.range(100).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    // Update points
    const updatePoints = () => {
      svg
        .selectAll('circle')
        .data(points)
        .join('circle')
        .attr('width', 1)
        .attr('r', 1)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .style('fill', 'orange')
        .style('opacity', 0.8)
        .transition()
        .duration(1000)
        .attr('cx', (d) => Math.random() * width)
        .attr('cy', (d) => Math.random() * height);
      // .on('end', updatePoints);
    };

    updatePoints();
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      className="-z-20 w-screen absolute left-0 "
    />
  );
};

export default RandomPoint;
