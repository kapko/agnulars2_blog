export const Routes = [
	{
		path: '',
		loadChildren: './home/home.module'
	},
	{
		path: 'about',
		loadChildren: './about/about.module'
	},
	{
		path: 'about/detail',
		loadChildren: './about/detail/detail.module'
	}
]
