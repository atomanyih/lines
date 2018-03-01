// @flow

import React from "react";

type PathSegment = [string, number, number]

type Props = {
  d: PathSegment[]
}

const pathSegmentToString = ([c, x, y]: PathSegment) => `${c}${x} ${y}`;

const Path = ({d, ...otherProps} : Props) => (
  <path {...{
    ...otherProps,
    d: d.map(pathSegmentToString).join(' ')
  }}/>
);

export default Path;