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
//course.update();

var currentDate = new Date();

// we now don't want to specified all of  the vars because it's wasted of time.
// then we will make all of the constructor for all from the template.


function Courses(titles,instructors,levels,published,views){
    this.titles = titles;
    this.instructors = instructors;
    this.levels = levels;
    this.published = published;
    this.views = views;
    this.updateViews = function(){

        return ++this.views;
    };
}


var course01 = new Courses("JSCourse",
"Jake Sake",
1,
"Molten",0
);

console.log(course01.published);
console.log(course01);

//show that . and [] works the same way.

console.log(course01["titles"]);

//see!!