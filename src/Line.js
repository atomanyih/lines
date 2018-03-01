// @flow

import React, {Fragment} from 'react';
import Path from "./Path";

type Props = {
  borderWidth: number,
  offset: number,
  containerWidth: number
}

const Line = ({borderWidth, offset, containerWidth, ...otherProps}: Props) => (
  <Path {...{
    ...otherProps,
    d: [
      ['M', offset, 0],
      ['L', offset + borderWidth, borderWidth],
      ['L', borderWidth, offset + borderWidth],
      ['L', 0, offset],
    ],
    stroke: 'white',
    fill: 'none',
    strokeLinecap: 'square',
    strokeLinejoin: 'round',
  }} />
);

export default Line