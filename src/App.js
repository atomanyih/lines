// @flow
import React from 'react';
import {compose, withProps} from 'recompose';

import withSin from "./withSin";
import Path from "./basics/Path";
import Frame from "./Frame";
import Half from "./Half";

const containerWidth = 100;
const innerWidth = 50;
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
  // let borderWidth = (1+ sinValue) * 25

  return (
    <Frame width={700} height={700}>
      <SVG viewBox={[0, 0, containerWidth, containerWidth]}>
        <defs>
          <clipPath id="top-left" x={0} y={0} width={containerWidth} height={containerWidth}>
            <Path {...{
              d: [
                ['M', 0, 0],
                ['L', containerWidth, 0.1], // fudge factor to avoid white line in between halves
                ['L', 0.1, containerWidth],
                'Z'
              ]
            }}/>
          </clipPath>
          <symbol id="half" viewBox="0 0 100 100">
            <g clipPath="url(#top-left)">
              <Half {...{numLines, lineSpacing, offsetFactor, containerWidth, borderWidth}}/>
            </g>
          </symbol>
        </defs>
        <use xlinkHref="#half" />
        <use xlinkHref="#half" transform={`rotate(180 ${containerWidth / 2} ${containerWidth / 2})`} />
      </SVG>
    </Frame>

  );
};

export default compose(
  withSin(5000),
)(App)