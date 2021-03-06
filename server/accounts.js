
// make an admin if there isn't one
// Indiana Jones, a worthy administrator
// of things intellectual 
Meteor.startup(function() {
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      'username': 'Dr. Jones', 
      'email': 'indy@o.e',
      'password': 'pwd',
      'profile': {
        'role':'admin'
      }
    })
  }
});

Accounts.onCreateUser( function(options, user){
  if (!options.profile) {
    randomStatus = Math.ceil(Math.random()*10);
    if(randomStatus >= 5) { randomStatus = randomStatus - 5 };
    colors = ["red", "blue", "yellow", "green", "purple"];

    options.profile = {};
    options.profile.role = "pupil";
    options.profile.status = colors[randomStatus];
    user.profile = options.profile
  } else {
    user.profile = options.profile
  }

  return user
});

