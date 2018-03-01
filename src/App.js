// @flow
import React from 'react';
import {compose, withProps} from 'recompose';

import Line from './Line';
import withSin from "./withSin";
import Path from "./Path";
import Frame from "./Frame";
import Half from "./Half";

const containerWidth = 100;
const innerWidth = 10;
const borderWidth = (containerWidth - innerWidth) / 2;

type Props = {
  viewBox: number[]
}

const SVG = ({viewBox, ...otherProps}: Props) => (
  <svg {...{
    viewBox: viewBox.join(' '),
    ...otherProps,
  }}/>
);

const numLines = 15;
const lineSpacing = containerWidth / numLines;

const App = ({sinValue}) => {
  let offsetFactor = (1 + sinValue) * 10;

  return (
    <Frame width={500} height={500}>
      <SVG viewBox={[0, 0, containerWidth, containerWidth]}>
        <defs>
          <clipPath id="top-left" x={0} y={0} width={containerWidth} height={containerWidth}>
            <Path {...{
              d: [
                ['M', 0, 0],
                ['L', containerWidth, 0],
                ['L', 0, containerWidth],
                'Z'
              ]
            }}/>
          </clipPath>
        </defs>
        <g clipPath="url(#top-left)">
          <Half {...{numLines, lineSpacing, offsetFactor, containerWidth, borderWidth}}/>
        </g>
        <g clipPath="url(#top-left)" transform={`rotate(180 ${containerWidth / 2} ${containerWidth / 2})`}>
          <Half {...{numLines, lineSpacing, offsetFactor, containerWidth, borderWidth }}/>
        </g>
      </SVG>
    </Frame>

  );
};

export default compose(
  withSin,
)(App)