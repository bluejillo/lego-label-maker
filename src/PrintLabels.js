import React from 'react';
import {LegoBrickLabel} from "./LegoBrickLabel";
import ReactToPrint from "react-to-print";
import { Button } from "./Button";

class PrintLabels extends React.PureComponent {
    render() {
        return (
            <>
                <ReactToPrint
                    trigger={() => {return <Button>Print Labels</Button>}}
                    content={() => this.componentRef}
                />
                <hr/>
                <LegoBrickLabel
                    brickParts={this.props.brickParts}
                    ref={(el) => (this.componentRef = el)}
                />
            </>
        );
    }
}
 export default PrintLabels;