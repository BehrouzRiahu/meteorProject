Router.configure({
    layoutTemplate: 'lay'
});

Router.route('/post');
Router.route('/about');
Router.route('/', {
	template: 'main'
});