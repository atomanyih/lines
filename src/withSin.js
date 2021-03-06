// @flow

import * as React from 'react';

type Props = {};

type State = {
  val: number
};

type WrappedProps = {
  sinValue: number
}

const withSin = (periodMs: number, phase: number = 0) => (Wrapped: React.ComponentType<WrappedProps>) =>
  class WithSin extends React.Component<Props, State> {
    state = {
      val: 1
    };

    mounted = true;

    animate = () => {
      if (this.mounted) {
        let val = Math.sin((Date.now() * 2 * Math.PI) /  periodMs + phase);
        // console.log(val)
        this.setState({
          val: val
        });


        window.requestAnimationFrame(this.animate)
      }
    };

    componentDidMount() {
      this.animate();
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      return (
        <Wrapped {...{...this.props, sinValue: this.state.val}}/>
      );
    }
  };

export default withSin