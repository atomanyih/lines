// @flow

import * as React from 'react';
import Ripple from "./Ripple";
import Line from "./basics/Line";
import {range, scale} from "./util";
import findIntersection from "./findIntersection";

type Props = {
  numLines: number,
  borderWidth: number,
  offsetFactor: number,
  containerWidth: number,
  r: number,
}

const circle = ({cx, cy, r, x}) => cy - Math.sqrt(r * r - (cx - x) * (cx - x));

const CircleHalf = ({numLines, borderWidth, offsetFactor, containerWidth, r}: Props) => (
  <React.Fragment>
    {
      range(numLines).map((v) => {
        const offset = v * (containerWidth / 2 / numLines) + offsetFactor + containerWidth / 2;
        const strokeWidth = scale(0.1, 1.5)(1 - v / numLines)


        if (offset < (containerWidth / 2 - r) || offset > (containerWidth / 2 + r)) {
          return (
            <Line {...{
              d: [
                `M ${offset} 0`,
                `L ${offset} ${containerWidth / 2}`,
                `M ${containerWidth - offset} 0`,
                `L ${containerWidth - offset} ${containerWidth / 2}`,
              ],
              key: v,
              stroke: 'white',
              strokeWidth
            }}/>
          )
        }
        const y = circle({
          cx: containerWidth / 2,
          cy: containerWidth / 2,
          r,
          x: offset
        })

        return (
          <Line {...{
            d: [
              `M ${offset} 0`,
              `L ${offset} ${y}`,
              `L ${containerWidth - offset} ${y}`,
              `L ${containerWidth - offset} ${0}`,
            ],
            key: v,
            stroke: 'white',
            strokeWidth
          }}/>
        )
      })
    }

  </React.Fragment>
);

export default CircleHalf;