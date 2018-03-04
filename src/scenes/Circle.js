// @flow
import React from 'react';
import {compose, withProps} from 'recompose';

import withSin from "../withSin";
import Path from "../basics/Path";
import Frame from "../Frame";
import CircleHalf from "../CircleHalf";
import {BACKGROUND_COLOR, CIRCLE_FILL} from "../Colors";

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

const numLines = 29;

const App = ({sinValue}) => {
  let offsetFactor = 0;
  const r = innerWidth / 2 * (1 + sinValue);

  return (
    <Frame width={700} height={700}>
      <SVG viewBox={[0, 0, containerWidth, containerWidth]}>
        <defs>
          <clipPath id="circle-frame" x={0} y={0} width={containerWidth} height={containerWidth}>
            <circle r={containerWidth / 2} cx={containerWidth / 2} cy={containerWidth / 2}/>
          </clipPath>
          <symbol id="half" viewBox="0 0 100 100">
            <g clipPath="url(#circle-frame)">
              <CircleHalf {...{numLines, offsetFactor, containerWidth, borderWidth, r}}/>
            </g>
          </symbol>
        </defs>
        <use xlinkHref="#half"/>
        <use xlinkHref="#half" transform={`rotate(180 ${containerWidth / 2} ${containerWidth / 2})`}/>
      </SVG>
    </Frame>

  );
};


const minutesToMs = minutes => minutes * 60000;

export default compose(
  withSin(minutesToMs(30)),
)(App)