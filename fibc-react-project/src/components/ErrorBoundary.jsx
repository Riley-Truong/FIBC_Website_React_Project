import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError : true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught and could not load page:', error, errorInfo);
  
    this.setState({
      error, errorInfo
    });
  }

  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  }

  render() {
    if(this.state.hasError){
      return (
        <div className="container my-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              Something went wrong
            </h4>
            <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-3">
                <summary style={{ cursor: 'pointer' }}>
                  Error details (visible in development mode only)
                </summary>
                <pre className="mt-2 p-3 bg-light rounded">
                  <strong>Error:</strong> {this.state.error.toString()}
                  {this.state.errorInfo && (
                    <>
                      <br /><br />
                      <strong>Component Stack:</strong>
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </pre>
              </details>
            )}
            
            <hr />
            <div className="d-flex gap-2">
              <a href="/" className="btn btn-primary ">
                <i className="bi bi-house me-2"></i>
                Go to Homepage
              </a>
            </div>
          </div>
        </div>      
        );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;