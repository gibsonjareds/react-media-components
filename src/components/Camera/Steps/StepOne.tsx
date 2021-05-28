import * as React from "react";
import {Button} from "semantic-ui-react";

export default function StepOne (props:{selectMode:(mode: 'none'|'camera'|'upload')=>void}){
    return(<>
        <Button onClick={e=>{e.preventDefault(); props.selectMode('camera');} }>Record from Webcam</Button>
        <Button onClick={e=>{e.preventDefault(); props.selectMode('upload');} }>Upload Video File</Button>
    </>)
}
