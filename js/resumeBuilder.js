// Model
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
};

var work = {
  jobs: [{
    employer: "Life",
    title: "Human",
    location: "Kannur",
    dates: "1996 - Present",
    description: "Another human life on the earth"
  }],
};

var projects = {
  projects: [{
    title: "Resume",
    dates: "2017",
    description: "Personal Resume",
    images: ["images/197x148.gif"]
  }],
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
};

// Octopus
var octopus = {
  getBio: function() {
    return bio;
  },

  getWork: function() {
    return work;
  },

  getProjects: function() {
    return projects;
  },

  getEducation: function() {
    return education;
  },

  init: function() {
    view.init();
  }
};

// View
var view = {
  init : function() {
    this.bio = octopus.getBio();
    this.work = octopus.getWork();
    this.projects = octopus.getProjects();
    this.education = octopus.getEducation();

    this.displayBio();
    this.displayWork();
    this.displayProjects();
    this.displayEducation();
  },

  displayBio: function () {
    var formattedName = HTMLheaderName.replace("%data%", this.bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.bio.role);
    $("#header").prepend(formattedName, formattedRole); // prepend, so that it appears before #topContacts

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", this.bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", this.bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", this.bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", this.bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", this.bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", this.bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.bio.welcomeMessage));

    if (this.bio.skills.length) {
      $("#header").append(HTMLskillsStart);
      this.bio.skills.forEach(function (ele) {
        $("#skills").append(HTMLskills.replace("%data%", ele));
      });
    }
  },

  displayWork: function () {
    this.work.jobs.forEach(function (ele) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", ele.employer)+
      HTMLworkTitle.replace("%data%", ele.title);
      // work entry is div created by HTMLworkStart, :last makes sure it is the current div.
      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", ele.dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", ele.location));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", ele.description));
    });
  },

  displayProjects: function () {
    this.projects.projects.forEach(function (ele) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", ele.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", ele.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", ele.description));
      ele.images.forEach(function (i) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", i));
      });
    });
  },

  displayEducation: function () {
    this.education.schools.forEach(function (ele) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", ele.name).replace("#", ele.url) + HTMLschoolDegree.replace("%data%", ele.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", ele.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", ele.location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", ele.majors));
    });

    $("#education").append("<br>", HTMLonlineClasses);
    this.education.onlineCourses.forEach(function (ele) {
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", ele.title).replace("#", ele.url) + HTMLonlineSchool.replace("%data%", ele.school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", ele.dates), "<br>");
      // $(".education-entry:last").append(HTMLonlineURL.replace("%data%", ele.url));
    });
  }
};

octopus.init();

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
