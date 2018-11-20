import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import ErrorBoundary from '../src/components/ErrorBoundary';
import MyProvider from './components/MyProvider';

ReactDOM.render(<ErrorBoundary>
                    <MyProvider>
                        <App/>
                    </MyProvider>
                </ErrorBoundary>,
    document.getElementById('root'))