//this is the js for lesson

Template.lessonsList.helpers({
  lessons: function() {
    return Lessons.find()
  }
})
