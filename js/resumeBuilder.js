/*
This is empty on purpose! Your code to build the resume will go here.
 */


// $("#main").append(["Mrt"]);

// var awesomeThoughts = "I am Mrt and I am AWESOME!";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// console.log(awesomeThoughts);
// console.log(funThoughts);

// $("#main").append([funThoughts]);

var skills = ["", ""]

var bio = {
	"name": "Marty",
	"role": "Something",
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
		$("#header").append([formattedWelcome, HTMLskillsStart]);
		// var skills = this.skills;
		for (i = 0; i < this.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", this.skills[i]);
			$("#skills").append([formattedSkills]);
		}
	}
}

bio.display();