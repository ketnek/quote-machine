import React from "react";
import { newQuote } from './actions/qmActions';
import { connect } from "react-redux";
import '../../scss/quoteMachine.scss';
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from "react-icons/fa";


class Presentational extends React.Component {
  render() {
    console.log(this.props.counter)
    return (
      <div id='quote-box'>
        <p id='text'><FaQuoteLeft id="quoteIcon" />
          {this.props.oneQuote[this.props.counter].quote}
        </p>
        <p id='author'>
          {this.props.oneQuote[this.props.counter].name}
        </p>
        <div id="icons">
          <a href='twitter.com/intent/tweet' id='tweet-quote'><FaTwitterSquare id="twitterIcon" /></a>

          <a href="https://www.tumblr.com/explore/trending?source=homepage_explore" id="tumblr-quote"><FaTumblrSquare id="tumblrIcon" /></a>
        </div>
        <button onClick={this.props.newQuote} id='new-quote'>New quote</button>
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
