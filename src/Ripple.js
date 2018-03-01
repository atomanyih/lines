// @flow

import React, {Fragment} from 'react';
import Line from "./basics/Line";

type Props = {
  borderWidth: number,
  offset: number,
  containerWidth: number
}

const Ripple = ({borderWidth, offset, containerWidth, ...otherProps}: Props) => (
  <Line {...{
    ...otherProps,
    d: [
      ['M', offset, 0],
      ['L', offset + borderWidth, borderWidth],
      ['L', borderWidth, offset + borderWidth],
      ['L', 0, offset],
    ],
  }} />
);

export default Ripple