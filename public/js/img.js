
    function selectMainPhoto(src) {
        // Get the expanded image
        const expandImg = document.getElementById("main-photo");
        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = src;
        // Show the container element (hidden with CSS)
        /* expandImg.parentElement.style.display = "none"; */
      }
/* import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';

window.onload = function () {

const img = document.querySelector(".thumbnail")
class App extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}   
} */