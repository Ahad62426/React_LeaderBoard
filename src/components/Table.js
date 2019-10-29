import React, { Component } from 'react';

export default class Table extends Component {
	renderContent() {
		const { users } = this.props;
		return users.map((user, index) => {
			return (<tr key={index}>
				<td>{user.age}</td>
				<td>{user.name}</td>
				<td>{user.points}</td>
				<td>{user.rank}</td>
			</tr>)
		});
	}

	render() {
		return (<div>
			<table className="table table-striped">
				<thead>
					<tr key="head">
						<th>Age</th>
						<th>Name</th>
						<th>Points</th>
						<th>Rank</th>
					</tr>
				</thead>
				<tbody>
					{this.renderContent()}
				</tbody>
			</table>
		</div>)
	}
}
