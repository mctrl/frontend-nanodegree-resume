/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append(["Mrt"]);

 // var awesomeThoughts = "I am Mrt and I am AWESOME!";

 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

 // console.log(awesomeThoughts);
 // console.log(funThoughts);

  // $("#main").append([funThoughts]);

  var formattedName = HTMLheaderName.replace("%data%", "Martina");

  var formattedRole = HTMLheaderRole.replace("%data%", "Something");

  $("#header").append([formattedRole]);

  $("#header").prepend([formattedName]);
