import _ from 'lodash';
import './style.css';
import Hotel from './hotel.jpeg';

function component() {
    const element = document.createElement('div');
  
     // Lodash, now imported by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     // style.css script
     element.classList.add('hello');

     // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Hotel;

  element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());