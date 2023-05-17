import {UsersList} from "../UsersList/UsersList";

export const Main = ({users}) => {
	return (
		<>
			<UsersList
			users={users}
			/>
		</>
	)
}