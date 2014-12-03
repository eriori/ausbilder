// this is all user-related javascript

//Template.userItem.helpers({
//  circle: function() {
//    console.log(this)
//        var svg = d3.select("body").append("svg")
//        var circle = svg.selectAll("circle")
//                        .data([0])
//                        .enter()
//                        .append("circle");
//        circle.attr("r", 10)
//              .attr("cx", 20)
//              .attr("cy", 20)
//              .attr("fill", "blue")
//    }
//})

//  <h3>
//    {{#each emails}}
//      {{this.address}}
//    {{/each}}
//  </h3>


Template.userItem.rendered = function() {
  var status = this.data.profile.status
  Tracker.autorun(function() {
    var svg = d3.select("#circle").append("svg")
    var circle = svg.selectAll("circle")
                    .data([0])
                    .enter()
                    .append("circle");
    circle.attr("r", 10)
          .attr("cx", 20)
          .attr("cy", 20)
          .attr("fill", status);
  });
}

Template.usersList.helpers({
  // try doing all of the filtering
  // on the client, get it working,
  // then try to tackle working around
  // Accounts' autopublish 
  users: function() {
    var removeCurrentUser = {$ne: Meteor.userId()}
    return Meteor.users.find({_id: removeCurrentUser })
  }
})


