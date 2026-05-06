import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError : true , error}
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
        <main style={{padding: '6rem 1rem', textAlign: 'center', minHeight: '60vh'}}>
          <div style={{maxWidth: 560, margin: '0 auto'}}>
            <p className="eyebrow">Something Went Wrong</p>
            <h1>We hit a snag</h1>
            <p>
              An unexpected error stopped the page from loading. We're sorry for the
              interruption — please try refreshing, or head back to the homepage.
            </p>
            <div style={{display:'flex', gap:'0.75rem', justifyContent:'center', marginTop:'1.5rem'}}>
              <button className="btn-fibc" onClick={() => window.location.reload()}>
                Refresh Page
              </button>
              <Link to="/" className="btn-fibc-outline" onClick={this.resetError}>
                Go Home
              </Link>
            </div>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;