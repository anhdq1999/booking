import { Roles } from 'route/config';

import UsersManager from 'markup/Pages/admin/user-manager/UsersManager';
import Garbage from 'markup/Pages/admin/user-manager/Garbage';

export default [
	{
		component: UsersManager,
		path: '/users-manager',
		title: 'Users Manager',
		exact: true,
		permission: [
			Roles.ADMIN
		],
	},

	{
		component: Garbage,
		path: '/users-manager/garbage',
		title: 'Users Garbage',
		permission: [
			Roles.ADMIN
		],
	}


]