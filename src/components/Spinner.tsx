import * as React from 'react';
import * as ReactDOM from 'react-dom'

const mySpinner = document.getElementById('spinner')

class Spinner extends React.Component{
    render(){
        return ReactDOM.createPortal(
            <img src="../../../public/spinner.gif"/>,
            mySpinner
        )
    }
}

export default Spinner;