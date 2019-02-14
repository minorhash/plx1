import React, { Component } from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const dat= [
{start: 0,
    end: 500,
    properties: [
{startValue: 1,
        endValue: 2,
        property: 'scale',
      },
    ],
  },
];

class Pl extends Component {
  render() {
    return (
<Plx className='plx' parallaxData={ dat}       >
          my plx
      </Plx>
    );
  }
}

export default Pl
