import React, { PropTypes } from 'react';
import Navigation from './common/Navigation';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="navigation">
                    <Navigation loading={this.props.loading} />
                </div>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);