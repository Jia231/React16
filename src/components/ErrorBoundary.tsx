import * as React from 'react';

interface IState{
    hasError : boolean
}

class ErrorBoundary extends React.Component<{},IState>{
    state = {
        hasError : false
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render(){
        return this.state.hasError ? <div>There was an error!!</div> : this.props.children
    }
}

export default ErrorBoundary;