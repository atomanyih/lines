// @flow

import * as React from 'react';
import Ripple from "./Ripple";
import Line from "./basics/Line";
import {range, scale} from "./util";

type Props = {
  numLines: number,
  lineSpacing: number,
  borderWidth: number,
  offsetFactor: number,
  containerWidth: number,
}

const Half = ({numLines, lineSpacing, borderWidth, offsetFactor, containerWidth}: Props) => (
  <React.Fragment>
    {
      range(numLines).map((v) => {
        const offset = ((v + 1) * lineSpacing + offsetFactor) % containerWidth;

        return (
          <Ripple {...{
            borderWidth,
            containerWidth,
            offset: offset,
            key: v,
            stroke: 'white',
            strokeWidth: scale(0.1, 2)(offset / containerWidth),
          }} />
        )
      })
    }
    <Line {...{
      d: [
        'M 0 0',
        `L ${borderWidth} ${borderWidth}`
      ],
      stroke: 'white',
      strokeWidth: 2
    }} />
  </React.Fragment>
);

export default Half;