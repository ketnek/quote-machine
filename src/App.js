import React from 'react';
import './scss/App.scss';
import { ContainerQuoteMachine } from './app/components/quoteMachine'
import { connect } from 'react-redux';



class Presentational extends React.Component {
  render() {
    return (
      <div id='app' style={{
        backgroundColor: this.props.nextColor,
        color: this.props.nextColor,
        transition: 'background-color 2s, color 2s'
      }} >
        <ContainerQuoteMachine />
        <p>by Kevin</p>
      </div>
    )
  }

};


//Redux connection

const mapStateToProps = (state) => {
  return {
    nextColor: state.quoteMachine.color
  }
}

const ContainerApp = connect(
  mapStateToProps,
  null
)(Presentational);

export default ContainerApp;
