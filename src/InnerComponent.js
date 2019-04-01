import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAction } from './actions'
class InnerComponent extends Component {
  componentDidMount() {
    //this.props.login({success:true});
  }
  _onButtonClick = () => {
    const { requestAction } = this.props;
    requestAction({title:'asd'});
  }
  render() {
    const { getRequestAsync } = this.props;
    const title = getRequestAsync && getRequestAsync.title;
    return (
      <div className="App">
        <header className="App-header">
          first Title: {title}
          <button onClick={() => this._onButtonClick()}>
            LOGIN
	  </button>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    getRequest: state.request,
    getRequestAsync: state.requestAsync,
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    requestAction
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(InnerComponent);
