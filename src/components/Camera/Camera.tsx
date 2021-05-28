import * as  React from "react";
import {Button} from "semantic-ui-react";
import StepOne from "./Steps/StepOne";

interface CameraProps {
    onVideoCreated: (event: object) => any,
    className : string
}

interface CameraState {
    mode:'camera'| 'upload' | 'none',
    step:'one' | 'two' | 'three' | 'four' | 'five' | 'six'
}

export default class Camera extends React.Component<CameraProps, CameraState> {
    state: Readonly<CameraState> = {
        mode:'none',
        step:'one'
    }
    chooseStep(){
        switch(this.state.step){
            case 'one':
            default:
                return (<StepOne selectMode={mode =>{  this.setState({mode}); } } />);
        }
    }
    render(){
        return <div data-role="camera" className={this.props.className}>
            {this.chooseStep()};
        </div>;
    }
}

export {
    StepOne
};
