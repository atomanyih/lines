// @flow

import React from 'react';
import Path from "./Path";

type Props = {

};

const Line = (props: Props) => (
  <Path {...{
    ...props,
    fill: 'none',
    strokeLinecap: 'square',
    strokeLinejoin: 'square',
  }} />
);

export default Line