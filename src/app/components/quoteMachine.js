import React from "react";
import { newQuote } from './actions/qmActions';
import { connect } from "react-redux";

class Presentational extends React.Component {
  render() {
    console.log(this.props.counter)
    return (
      <div id='quote-box'>
        <p id='text'>
          {this.props.oneQuote[this.props.counter].quote}
        </p>
        <p id='author'>
          {this.props.oneQuote[this.props.counter].name}
        </p>
        <button onClick={this.props.newQuote} id='new-quote'>New quote</button>
        <a href='twitter.com/intent/tweet' id='tweet-quote'>Icons</a>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    oneQuote: state.quoteMachine.quoteList,
    counter: state.quoteMachine.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newQuote: () => {
      dispatch(newQuote())
    }
  };
}

export const ContainerQuoteMachine = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
