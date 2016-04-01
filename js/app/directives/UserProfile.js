function UserProfile() {
	return {
		transclude: {
			name: 'h4',
			position: 'h6',
			desc: 'p'
		},
		template: [
			'<div>',
				'<h3>User Profile</h3>',
				'<div>Name:<span ng-transclude="name"></span></div>',
				'<div>Position:<span ng-transclude="position"></span></div>',
				'<div>Short Description:<span ng-transclude="desc"></span></div>',
			'</div>'
		].join('')
	}
}

angular
	.module('app')
	.directive('userProfile', UserProfile);