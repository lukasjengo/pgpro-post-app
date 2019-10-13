import React from 'react';
import NotFound from '../../pages/notFound/NotFound';

class ErrorBoundaries extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <NotFound errorBoundary />;
    }

    return this.props.children;
  }
}

export default ErrorBoundaries;
