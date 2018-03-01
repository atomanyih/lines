// @flow

import * as React from 'react';
import styled from 'styled-components';

const FrameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const FrameInner = styled.div`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

type Props = {
  width: number,
  height: number,
  children: React.Node
}

const Frame = ({width, height, children}: Props) => (
  <FrameContainer>
    <FrameInner {...{width, height}}>
      {children}
    </FrameInner>
  </FrameContainer>
)

export default Frame;