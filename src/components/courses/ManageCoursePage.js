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

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    render() {
        return (
            <div className="row">
                <h1 className="text-center">Manage Course</h1>
                <div className="col-md-8 col-md-offset-2">
                    <div className="well well-lg">
                        <CourseForm
                            onChange={this.updateCourseState}
                            onSave={this.saveCourse}
                            allAuthors={this.props.authors}
                            course={this.state.course}
                            errors={this.state.errors}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// Pull in React Router context so router is available on this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course) {
        return course[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // from the path /course/:id

    if (courseId) {
        course = getCourseById(state.courses, courseId);
    }

    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        //getCourses: course => dispatch(courseActions.getCourses())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);