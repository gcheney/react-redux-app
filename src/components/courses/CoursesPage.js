import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Current Courses</h1>
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <CourseList courses={this.props.courses} />
                        <input type="submit"
                            value="Add Course"
                            className="btn btn-lg btn-primary pull-right"
                            onClick={this.redirectToAddCoursePage} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //getCourses: course => dispatch(courseActions.getCourses())
    };
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);