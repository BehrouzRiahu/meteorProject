if (Meteor.isClient) {
  Meteor.startup(function () {
        Meteor.Router.to("/main");
    });
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });
}