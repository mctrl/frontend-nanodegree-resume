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
        "mobile": "",
        "email": "",
        "github": "",
        "twitter": "",
        "location": ""
    },
    "welcomeMessage": "",
    "skills": ["", ""],
    "biopic": "images/fry.jpg",
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		var formattedImg = HTMLbioPic.replace("%data%", this.biopic);

        $("#header").prepend([formattedRole]);
        $("#header").prepend([formattedName]);
        $("#header").prepend([formattedImg]);

    }
}

bio.display();
