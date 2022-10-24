import React from "react";
import { newColor, newQuote } from './actions/qmActions';
import { connect } from "react-redux";
import '../../scss/quoteMachine.scss';
import { FaTwitterSquare, FaTumblrSquare, FaQuoteLeft } from "react-icons/fa";


class Presentational extends React.Component {

  //controls the opacity of the text inside quote box

  handleOpacity() {

    let quote = document.getElementById('text');
    let author = document.getElementById('author');

    quote.classList.add('animatedOpacity');
    author.classList.add('animatedOpacity');

    function delOpacity() {
      quote.classList.remove('animatedOpacity');
      author.classList.remove('animatedOpacity');
    }
    setTimeout(delOpacity, 1500);
  }
  render() {

    // Random color genearator

    function randomColorGenerator() {
      return ("#" + (Math.floor(Math.random() * 16777215).toString(16)));
    };
    const randomColor = randomColorGenerator();


    return (
      <div id='quote-box'>
        <p id='text'><FaQuoteLeft id="quoteIcon" />
          {this.props.oneQuote[this.props.counter].quote}
        </p>
        <p id='author'>
          {this.props.oneQuote[this.props.counter].name}
        </p>
        <div id="icons">
          <a href='twitter.com/intent/tweet' id='tweet-quote'><FaTwitterSquare id="twitterIcon" style={{
            color: this.props.nextColor,
            transition: 'color 2s'
          }} /></a>

          <a href="https://www.tumblr.com/explore/trending?source=homepage_explore" id="tumblr-quote"><FaTumblrSquare id="tumblrIcon" style={{
            color: this.props.nextColor,
            transition: 'color 2s'
          }} /></a>
        </div>
        <button onClick={() => {
          this.props.newQuote();
          this.props.newColor(randomColor);
          this.handleOpacity();
        }} id='new-quote' style={{
          backgroundColor: this.props.nextColor,
          transition: 'background-color 2s'
        }}>New quote</button>
      </div>
    );
  }
}

//Redux connection

const mapStateToProps = (state) => {
  return {
    oneQuote: state.quoteMachine.quoteList,
    counter: state.quoteMachine.counter,
    nextColor: state.quoteMachine.color
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    newQuote: () => {
      dispatch(newQuote())
    },
    newColor: (color) => {
      dispatch(newColor(color))
    }
  };
}

export const ContainerQuoteMachine = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);
