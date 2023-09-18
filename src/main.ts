import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import * as d3 from 'd3';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from D3 SVG drawer!</h1>
   
    <svg width="200" height="200" id="arc-container">
     <!-- Your arc will go here -->
    </svg>
  `,
})
export class App implements OnInit {
  constructor() {}
  

  ngOnInit(): void {
    //   // Select the SVG container
    //   const svg = d3.select('#arc-container');
    //   // Define arc parameters
    //   const arcRadius = 80;
    //   const startAngle = 0; // in radians
    //   const endAngle = Math.PI / 2; // in radians
    //   const centerX = 100;
    //   const centerY = 100;
    //   // Create an arc generator
    //   const arcGenerator = d3.arc()
    //     .innerRadius(0)
    //     .outerRadius(arcRadius)
    //     .startAngle(startAngle)
    //     .endAngle(endAngle);
    //   // Append the arc to the SVG container
    //   svg.append('path')
    //     .attr('d', arcGenerator)
    //     .attr('transform', `translate(${centerX}, ${centerY})`)
    //     .attr('fill', 'blue'); // Change the color as needed
  }
}

bootstrapApplication(App);
