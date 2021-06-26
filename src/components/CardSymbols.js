import React from "react";
import "./symbols.css"

class CardSymbols extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isNumber: !isNaN(props.number),
        };
    }

    render() {
        return (
            <div className="symbols" data={`${this.props.number}\n${this.props.symbol}`}>
                {this.props.number === "A" ? (
                    <b>{this.props.symbol}</b>
                ) : ["J", "Q", "K"].includes(this.props.number) ? (
                    <div></div>
                ) : this.state.isNumber ? (
                    new Array(parseInt(this.props.number, 10))
                        .fill(this.props.symbol)
                        .map((cardSymbol, index) => <b key={index}>{cardSymbol}</b>)
                ) : null}
            </div>
        );
    }
}

export default CardSymbols;