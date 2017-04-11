/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: "Amith Mohanan",
  role: "Web Developer",
  welcomeMessage: "Welcome to my Resume!",
  biopic: "images/fry.jpg",
  contacts: {
    mobile: "+91 00 0000 0000",
    email: "amithm7@gmail.com",
    github: "amithm7",
    twitter: "@amithm7",
    location: "Bangalore"
  },
  skills: ["HTML", "CSS", "JS", "Python", "C++", "Java"],

  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole); // prepend, so that it appears before #topContacts

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(ele) {
        $("#skills").append(HTMLskills.replace("%data%", ele));
      });
    }
  }
};

var work = {
  jobs: [{
    employer: "Life",
    title: "Human",
    location: "Kannur",
    dates: "1996 - Present",
    description: "Another human life on the earth"
  }],

  display: function() {
    work.jobs.forEach(function(ele) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", ele.employer) + HTMLworkTitle.replace("%data%", ele.title);
      // work entry is div created by HTMLworkStart, :last makes sure it is the current div.
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", ele.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", ele.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", ele.description));
    });
  }
};

var projects = {
  projects: [{
    title: "Resume",
    dates: "2017",
    description: "Personal Resume",
    images: ["images/197x148.gif"]
  }],

  display: function() {
    projects.projects.forEach(function(ele) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", ele.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", ele.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", ele.description));
      ele.images.forEach(function(i) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", i));
      });
    });
  }
};

var education = {
  "schools": [{
      "name": "Kendriya Vidyalaya",
      "location": "Bangalore",
      "degree": "Junior College",
      "majors": ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      "dates": "2002 - 2014",
      "url": "http://kvasc.kar.nic.in/"
    },
    {
      "name": "AMC Engineering College",
      "location": "Bangalore",
      "degree": "Bachelor of Technology",
      "majors": ["Computer Science"],
      "dates": "2014 - 2020",
      "url": "http://amcgroup.edu.in"
    }
  ],
  "onlineCourses": [{
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": "2017",
      "url": "https://in.udacity.com/"
    },
    {
      "title": "Data Structures and Algorithm using Python",
      "school": "NPTEL",
      "dates": "2017",
      "url": "https://onlinecourses.nptel.ac.in/noc17_cs10/"
    },
    {
      "title": "Haskell Programming",
      "school": "NPTEL",
      "dates": "2017",
      "url": "https://onlinecourses.nptel.ac.in/noc17_cs11/"
    }
  ],

  display: function() {
    education.schools.forEach(function(ele) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", ele.name).replace("#", ele.url) + HTMLschoolDegree.replace("%data%", ele.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", ele.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", ele.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", ele.majors));
    });

    $("#education").append("<br>", HTMLonlineClasses);
    education.onlineCourses.forEach(function(ele) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", ele.title).replace("#", ele.url) + HTMLonlineSchool.replace("%data%", ele.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", ele.dates), "<br>");
      // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", ele.url));
    });
  }
};

bio.display();
education.display();
work.display();
projects.display();
// maps
$("#mapDiv").append(googleMap);


// click locations
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});
// International Name
$("#main").append(internationalizeButton);

function inName(str) {
  var name = str.trim().split(" ");
  str = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase() + " " + name[1].toUpperCase();
  return str;
}
