import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface DataPoint {
  category: string;
  before: number;
  after: number;
}

export const DataVisualization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const data: DataPoint[] = [
      { category: 'Energy Consumption', before: 100, after: 65 },
      { category: 'Operating Costs', before: 100, after: 50 },
      { category: 'Data Capacity', before: 100, after: 140 },
      { category: 'Processing Speed', before: 100, after: 180 },
    ];

    const margin = { top: 20, right: 40, bottom: 40, left: 180 };
    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.bottom - margin.top;

    const g = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleLinear()
      .domain([0, 200])
      .range([0, width]);

    const yScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, height])
      .padding(0.2);

    // Color scales
    const beforeColor = '#ef4444'; // Red
    const afterColor = '#10b981'; // Green

    // Bars for "before" values
    g.selectAll('.bar-before')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-before')
      .attr('x', 0)
      .attr('y', d => yScale(d.category)!)
      .attr('width', 0)
      .attr('height', yScale.bandwidth() / 2)
      .attr('fill', beforeColor)
      .attr('opacity', 0.7)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 200)
      .attr('width', d => xScale(d.before));

    // Bars for "after" values
    g.selectAll('.bar-after')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar-after')
      .attr('x', 0)
      .attr('y', d => yScale(d.category)! + yScale.bandwidth() / 2)
      .attr('width', 0)
      .attr('height', yScale.bandwidth() / 2)
      .attr('fill', afterColor)
      .attr('opacity', 0.8)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 200 + 500)
      .attr('width', d => xScale(d.after));

    // Y-axis labels
    g.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', -15)
      .attr('y', d => yScale(d.category)! + yScale.bandwidth() / 2)
      .attr('dy', '0.35em')
      .attr('text-anchor', 'end')
      .style('fill', '#d1d5db')
      .style('font-size', '14px')
      .style('font-weight', '500')
      .text(d => d.category);

    // Value labels
    g.selectAll('.value-before')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'value-before')
      .attr('x', d => xScale(d.before) + 5)
      .attr('y', d => yScale(d.category)! + yScale.bandwidth() / 4)
      .attr('dy', '0.35em')
      .style('fill', beforeColor)
      .style('font-size', '12px')
      .style('font-weight', '600')
      .style('opacity', 0)
      .text(d => `${d.before}%`)
      .transition()
      .duration(500)
      .delay((d, i) => i * 200 + 1000)
      .style('opacity', 1);

    g.selectAll('.value-after')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'value-after')
      .attr('x', d => xScale(d.after) + 5)
      .attr('y', d => yScale(d.category)! + (3 * yScale.bandwidth()) / 4)
      .attr('dy', '0.35em')
      .style('fill', afterColor)
      .style('font-size', '12px')
      .style('font-weight', '600')
      .style('opacity', 0)
      .text(d => `${d.after}%`)
      .transition()
      .duration(500)
      .delay((d, i) => i * 200 + 1500)
      .style('opacity', 1);

    // Legend
    const legend = g.append('g')
      .attr('transform', `translate(${width - 120}, 10)`);

    legend.append('rect')
      .attr('width', 15)
      .attr('height', 10)
      .attr('fill', beforeColor)
      .attr('opacity', 0.7);

    legend.append('text')
      .attr('x', 20)
      .attr('y', 5)
      .attr('dy', '0.35em')
      .style('fill', '#d1d5db')
      .style('font-size', '12px')
      .text('Before ZON');

    legend.append('rect')
      .attr('y', 20)
      .attr('width', 15)
      .attr('height', 10)
      .attr('fill', afterColor)
      .attr('opacity', 0.8);

    legend.append('text')
      .attr('x', 20)
      .attr('y', 25)
      .attr('dy', '0.35em')
      .style('fill', '#d1d5db')
      .style('font-size', '12px')
      .text('After ZON');

  }, []);

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
      <h3 className="text-xl font-semibold text-white mb-4 text-center">
        Performance Impact Visualization
      </h3>
      <div className="flex justify-center">
        <svg ref={svgRef} className="max-w-full h-auto" />
      </div>
    </div>
  );
};