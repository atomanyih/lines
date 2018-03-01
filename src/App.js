// @flow
import React from 'react';
import Line from './Line';
import withSin from "./withSin";
import Path from "./Path";

// const Path = styled.path`
//   stroke: ${({stroke}) => stroke}
// `;

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

const range = (n) => Array(n).fill().map((_, i) => i);

const numLines = 15;
const lineSpacing = innerWidth / numLines;

// const OtherLine = ({offset}) => (
//   <Path{...{
//     d: [
//       ['M', offset, 0],
//       ['L', containerWidth, containerWidth - offset]
//     ],
//     stroke: 'white',
//     fill: 'none',
//     strokeLinecap: 'square',
//     strokeLinejoin: 'round',
//   }}/>
// )

const App = ({sinValue}) => {
  return (
    <SVG viewBox={[0, 0, containerWidth, containerWidth]}>
      <defs>
        <clipPath id="top-left" x={0} y={0} width={containerWidth} height={containerWidth}>
          <Path {...{
            d: [
              ['M', 0, 0],
              ['L', containerWidth, 0],
              ['L', 0, containerWidth],
              ['Z', '', '']
            ]
          }}/>
        </clipPath>
      </defs>
      {/*<rect x={borderWidth} y={borderWidth} width={innerWidth} height={innerWidth} fill="white"/>*/}
      <g clipPath="url(#top-left)">
        {
          range(numLines).map((v) => {
            const offset = (v + 1) * lineSpacing + (1 + sinValue) * 10;

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
      </g>

      {/*<Line {...{*/}
      {/*borderWidth,*/}
      {/*containerWidth,*/}
      {/*offset: innerWidth,*/}
      {/*}} />*/}

      <Line {...{
        borderWidth,
        containerWidth,
        offset: 0,
      }} />
    </SVG>
  );
};

export default withSin(App)