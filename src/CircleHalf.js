// @flow

import * as React from 'react';
import Ripple from "./Ripple";
import Line from "./basics/Line";
import {range, scale} from "./util";
import findIntersection from "./findIntersection";

type Props = {
  numLines: number,
  lineSpacing: number,
  borderWidth: number,
  offsetFactor: number,
  containerWidth: number,
}

const CircleHalf = ({numLines, lineSpacing, borderWidth, offsetFactor, containerWidth}: Props) => (
  <React.Fragment>
    {
      range(20).map((v) => {
        const offset = ((v + 1) * lineSpacing/2 + offsetFactor) % containerWidth;

        const [x, y] = findIntersection({
          c: offset,
          m: 1,
          cy: containerWidth / 2,
          cx: containerWidth / 2,
          r: 25
        })

        if (isNaN(x) || isNaN(y)) {
          return (
            <Line {...{
              d: [
                `M 0 ${offset}`,
                `L ${containerWidth} ${containerWidth + offset}`,
                `M ${offset} 0`,
                `L ${containerWidth + offset} ${containerWidth}`
              ],
              key: v,
              stroke: 'white',
              strokeWidth: 0.1,
            }}/>
          )

        }

        return (
          <Line {...{
            d: [
              `M 0 ${offset}`,
              `L ${x} ${y}`,
              `L ${y} ${x}`,
              `L ${offset} 0`
            ],
            key: v,
            stroke: 'white',
            strokeWidth: 0.1
          }}/>
        )
      })
    }
    {/*<Line {...{*/}
    {/*d: [*/}
    {/*'M 0 0',*/}
    {/*`L ${borderWidth} ${borderWidth}`*/}
    {/*],*/}
    {/*stroke: 'white',*/}
    {/*strokeWidth: 2*/}
    {/*}} />*/}
  </React.Fragment>
);

export default CircleHalf;