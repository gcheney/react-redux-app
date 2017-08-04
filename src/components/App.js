import React, { PropTypes } from 'react';
import Navigation from './common/Navigation';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="navigation">
                    <Navigation />
                </div>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;