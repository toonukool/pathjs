var course = new Object();
var course = {
    title: "nimman",
    instructor: "none",
    level: 1,
    update: function(){

        return alert("update!");
    }
}

console.log(course.title);
course.update();