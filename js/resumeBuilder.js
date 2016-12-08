/*
This is empty on purpose! Your code to build the resume will go here.
 */


// $("#main").append(["Mrt"]);

// var awesomeThoughts = "I am Mrt and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(awesomeThoughts);
// console.log(funThoughts);

// $("#main").append([funThoughts]);

// var skills = ["", ""]

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
    schools: [{
        name: "Eckend College",
        location: "Saint Petersburg, FL",
        degree: "BA",
        majors: ["CS", "CS"],
        dates: "2003",
    }, {
        name: "Nove Southeastern University",
        location: "Fort Lauderdale, FL",
        degree: "Masters",
        majors: ["CS", "CS"],
        dates: "2013",
    }],
    onlineCourses: [{
        title: "Javascript Crash Course",
        school: "Udacity",
        dates: "2014",
        url: "www.url.com"
    }],
    display: function() {
        console.log(this);
        for (var i = 0; i < this.schools.length; i++) {
            $("#education").append([HTMLschoolStart]);
            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name)
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree)
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates)
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location)
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors.join(", "))
            $(".education-entry").last().append([formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor])
        };
        $("#education").append([HTMLonlineClasses]);
        for (var i = 0; i < this.onlineCourses.length; i++) {
            // $("#education").append([HTMLschoolStart]);
            var formattedOlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title)
            var formattedOlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school)
            var formattedOlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[i].dates)
            var formattedOlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[i].url)
            $(".education-entry").last().append([formattedOlineTitle, formattedOlineSchool, formattedOlineDates, formattedOlineURL])
        };
    }
}

education.display();

// var HTMLonlineClasses = '<h3>Online Classes</h3>';
// var HTMLonlineTitle = '<a href="#">%data%';
// var HTMLonlineSchool = ' - %data%</a>';
// var HTMLonlineDates = '<div class="date-text">%data%</div>';
// var HTMLonlineURL = '<br><a href="#">%data%</a>';

var work = {
    jobs: [{
        employer: "Panucci's Pizza",
        title: "Delivery Boy",
        location: "Manhattan, NY",
        dates: "1998 - Devember 31, 1999",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium."
    }, {
        employer: "employer2",
        title: "Delivery Boy",
        location: "Brooklyn, NY",
        dates: "January 2000 - Future",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla imperdiet egestas. Etiam ultrices magna nec lectus commodo, et aliquet dolor faucibus. Mauris mauris sapien, laoreet et hendrerit a, pharetra at mauris. Maecenas pellentesque facilisis pretium."
    }],
    display: function() {
        console.log(this);
    }
}

work.display();
