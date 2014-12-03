// this is all user-related javascript
Template.userItem.helpers({

  circle: function() {
    var svg = d3.select("body").append("svg")
    var circle = svg.selectAll("circle")
                    .data([0])
                    .enter()
                    .append("circle");
    circle.attr("r", 10)
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("fill", this.profile.status)
  }

})

Template.usersList.helpers({
  // try doing all of the filtering
  // on the client, get it working,
  // then try to tackle working around
  // Accounts' autopublish 
  users: function() {
    console.log(Meteor.userId())
    var removeCurrentUser = {$ne: Meteor.userId()}
    return Meteor.users.find({_id: removeCurrentUser })
  }
})
