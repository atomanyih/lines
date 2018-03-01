// @flow

import React from "react";

type PathSegment = string | [string, number, number]

type Props = {
  d: PathSegment[]
}

const pathSegmentToString = (segment: PathSegment) => (
  typeof segment === 'string'
    ? segment
    : segment.join(' ')
);

const Path = ({d, ...otherProps}: Props) => (
  <path {...{
    ...otherProps,
    d: d.map(pathSegmentToString).join(' ')
  }}/>
);

export default Path;