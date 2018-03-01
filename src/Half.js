// @flow

import * as React from 'react';
import Line from "./Line";

const range = (n) => Array(n).fill().map((_, i) => i);

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
          <Line {...{
            borderWidth,
            containerWidth,
            offset: offset,
            key: v,
          }} />
        )
      })
    }
    <Line {...{
      borderWidth,
      containerWidth,
      offset: 0,
    }} />
  </React.Fragment>
);

export default Half;