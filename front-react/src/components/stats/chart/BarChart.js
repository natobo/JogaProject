import React, { useEffect, useRef } from 'react';
import * as d3 from '../../../../../node_modules/d3/dist/d3';

export const BarChart = ({ data, filterBy }) => {
  const barChart = useRef();
  const maxValue = Math.max(...data.map((val) => val[filterBy]));

  const sortableData = [];
  for (const i in data) {
    if (true) {
      sortableData.push([data[i].name, data[i][filterBy]]);
    }
  }

  sortableData.sort(function (a, b) {
    return b[1] - a[1];
  });

  console.log(sortableData);

  const drawGraph = (games) => {
    const canvas = d3.select('#chartArea');

    const width = 1000;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append('svg');
    svg.attr('width', width);
    svg.attr('height', height);

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, maxValue]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(sortableData.map((d) => d[0]))
      .range([0, iwidth])
      .padding(0.1);

    // Add tooltip
    const tooldiv = canvas
      .append('div')
      .style('visibility', 'hidden')
      .style('position', 'absolute')
      .style('background-color', 'rgb(255,255,255)');

    // Draw-bars
    const bars = g.selectAll('rect').data(sortableData);
    bars
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .style('fill', 'rgb(38,10,135)')
      .attr('x', (d) => x(d[0]))
      .attr('y', (d) => y(d[1]))
      .attr('height', (d) => iheight - y(d[1]))
      .attr('width', x.bandwidth())
      .on('mouseover', (e, d) => {
        tooldiv
          .style('visibility', 'visible')
          .text(`${d[0]}:  ${Math.round(d[1])}`);
      })
      .on('mousemove', (e, d) => {
        tooldiv
          .style('top', `${e.pageY + 25}px`)
          .style('left', `${e.pageX + 25}px`);
      })
      .on('mouseout', () => {
        tooldiv.style('visibility', 'hidden');
      });

    // Y-Axis
    g.append('g').classed('y--axis', true).call(d3.axisLeft(y));
  };
  useEffect(() => {
    document.querySelector('#chartArea').innerHTML = '';
    drawGraph(data);
  }, [data]);

  return (
    <div id="chartArea">
      <svg ref={barChart} />
    </div>
  );
};
