import React from 'react';
import ExerciseList from '../components/ExerciseList';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';

const Exercises = ({username, exercises}) => (
	<React.Fragment>
		<Welcome
			username={username}
		/>
		<ExerciseList
			exercises={exercises}
		/>
		<AddButton/>
	</React.Fragment>
)

export default Exercises;