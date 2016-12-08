/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Marty",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000",
        "email": "myemail@email.com",
        "github": "www.mygithub.com",
        "twitter": "twitterUsername",
        "location": "Honolulu"
    },
    "welcomeMessage": "Hi, welcome to my portfolio",
    "skills": ["skill1", "skill2"],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedImg = HTMLbioPic.replace("%data%", this.biopic);

        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

        // 		HTMLcontactGeneric.replace("%data%", );
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend([formattedRole]);
        $("#header").prepend([formattedName]);
        $("#header").append([formattedImg]);
        $("#topContacts").append([formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation])
        $("#footerContacts").append([formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation])
        $("#header").append([formattedWelcome, HTMLskillsStart]);
        // var skills = this.skills;
        for (i = 0; i < this.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
            $("#skills").append([formattedSkills]);
        }
    }
}

bio.display();

var education = {
    "schools": [{
        "name": "Nove Southeastern University",
        "location": "Fort Lauderdale, FL",
        "degree": "Masters",
        "majors": ["CS", "CS"],
        "dates": "2013",
    }, {
        "name": "Eckend College",
        "location": "Saint Petersburg, FL",
        "degree": "BA",
        "majors": ["CS", "CS"],
        "dates": "2003",
    }],
    "onlineCourses": [{
        "title": "Javascript Crash Course",
        "school": "Udacity",
        "dates": "2014",
        "url": "www.url.com"
    }],
    display: function() {
        // console.log(this);
        for (var i = 0; i < this.schools.length; i++) {
            $("#education").append([HTMLschoolStart]);
            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name)
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree)
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates)
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location)
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(", "))
            $(".education-entry").last().append([formattedSchoolName, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor]).find("a").append([formattedSchoolDegree])
        }
        $(".education-entry").last().after([HTMLonlineClasses]);
        for (var j = 0; j < this.onlineCourses.length; j++) {
            $("#education").append([HTMLschoolStart]);
            var formattedOlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[j].title)
            var formattedOlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[j].school)
            var formattedOlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[j].dates)
            var formattedOlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[j].url)
            $(".education-entry").last().append([formattedOlineTitle, formattedOlineDates, formattedOlineURL]).find("a").append([formattedOlineSchool])
        }
    }
}

education.display();


var work = {
    jobs: [{
        employer: "Planet Express",
        title: "Delivery Boy",
        location: "Brooklyn, NY",
        dates: "January 2000 - Future",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium."
    }, {
        employer: "Panucci's Pizza",
        title: "Delivery Boy",
        location: "Manhattan, NY",
        dates: "1998 - Devember 31, 1999",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium."
    }],
    display: function() {
        // console.log(this);
        for (var i = 0; i < this.jobs.length; i++) {
            $("#workExperience").append([HTMLworkStart]);
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location)
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description)
            $(".work-entry").last().append([formattedWorkEmployer, formattedWorkDates, formattedWorkLocation, formattedWorkDescription]).find("a").append([formattedWorkTitle])
        }
    }
}

work.display();


var projects = {
    projects: [{
        title: "Sample Project 2",
        dates: "2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium.",
        images: ["images/197x148.gif", "images/197x148.gif"]
    }, {
        title: "Sample Project 1",
        dates: "2014",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium.",
        images: ["images/197x148.gif", "images/197x148.gif"]
    }],
    display: function() {
        // console.log(this);
        for (var i = 0; i < this.projects.length; i++) {
            $("#projects").append([HTMLprojectStart]);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
            $(".project-entry").last().append([formattedProjectTitle, formattedProjectDates, formattedProjectDescription]);
        	var images = this.projects[i].images;
        	for (var j = 0; j < images.length; j++) {
        		var formattedProjectImages = HTMLprojectImage.replace("%data%", images[j]);
        		 $(".project-entry").last().append(formattedProjectImages);
        	}
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap)

