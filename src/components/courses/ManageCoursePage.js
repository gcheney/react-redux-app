import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state  = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Manage Course</h1>
                <div className="col-md-8 col-md-offset-2">
                    <div className="well well-lg">
                        <CourseForm
                            allAuthors={[]}
                            course={this.state.course}
                            errors={this.state.errors}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ManageCoursePage.PropTypes = {
    courses: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    return {
        course: course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //getCourses: course => dispatch(courseActions.getCourses())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);