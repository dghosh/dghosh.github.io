'use strict';

cvApp.controller('CvController', 
	function CvController($scope) {

		$scope.image = "assets/img/deb.jpg";


		$scope.phoneNumber = "07763431834";
		$scope.personalEmail = "debz.ghosh23@gmail.com";
		$scope.workEmail = "debanjan.ghosh@jpmchase.com";

		$scope.experiences = [
			{
				date: "July 2016 - Present",
				company: "JP Morgan Chase & Co",
				position: "Application Support Analyst",
				descs: ["Currently working in a team that manages a suite of applications in the Markets area: DCPP, OTM, ACM, 3PDP as well as BAM. As part of the BAU role, we as a team monitor the health of the different applications using various tools such as Geneos, Splunk and Qpid Manager. We engage with business users whenever there is any incident or issue reported. We make sure that the problem is resolved as soon as possible so that the users can get back to BAU without affecting their SLAs.",
				"I am also responsible for being the production owner for BAM which requires me to ensure a good health of the application and attending to any incidents or issues arising."]
			},
			{
				date: "September 2014 - July 2016",
				company: "JP Morgan Chase & Co",
				position: "Technical Analyst",
				descs: [
					"Business Activity Monitoring(BAM): Worked in an agile feature team on the 'one stop shop' operations dashboard for payment interventions and BAM alert management. This includes end to end development using Java, UM MQ, Spring, JavaScript/AngularJS.",
					"Accounting Manager: Middleware application written in Java that allows one of the payment system to send real time postings to another system with Cassandra as the persistence layer."
				]	
			},
			{
				date: "July 2013 - September 2013",
				company: "JP Morgan Chase & Co",
				position: "Technology Intern",
				descs: ["Developed a reference implementation for deploying business applications to an application server using a release automation tool and documented the complete deployment process"]
			},
			// {
			// 	date: "June 2012 - September 2012",
			// 	company: "ORCHID Project - University of Southampton",
			// 	position: "Project Support Analyst",
			// 	descs: ["Worked as a Web Developer using Python/Django framework for the project on 'Intelligent Agents for Electrical Vehicle Charging' and developed the website to be used for the project trials."]
			// },
			// {
			// 	date: "2010 - 2012",
			// 	company: "Southampton University OTC",
			// 	position: "Officer Cadet",
			// 	desc: [""]
			// }
		];

		$scope.skills = [
			{
				language: "Java",
				level: 3
			},
			// {
			// 	language: "Spring",
			// 	level: 2
			// },
			{
				language: "JavaScript",
				level: 4
			},
			// {
			// 	language: "AngularJS",
			// 	level: 3
			// },
			{
				language: "HTML/CSS",
				level: 4
			},
			{
				language: "Python/Perl",
				level: 3
			},
			{
				language: "Databases",
				level: 3
			},
			{
				language: "Unix",
				level: 3
			},
			{
				language: "Autosys",
				level: 1
			},
		];

		$scope.levels = [1,2,3,4,5];

		$scope.educations = [
			{
				years: "2010 - 2014",
				school: "University of Southampton",
				subjects: 
				[
					{
						qualification: "",
						grade: "2:1",
						subject: "BSc. Computer Science (2:1)"
					}
				]
			},
			{
				years: "2007 - 2009",
				school: "Peter Symonds College, Winchester",
				subjects: [
					{
						qualification: "A Level",
						grade: "",
						subject: "Mathematics "
					},
					{
						qualification: "A Level",
						grade: "",
						subject: "Further Mathematics "
					},
					{
						qualification: "A Level",
						grade: "",
						subject: "Physics "
					},
					{
						qualification: "AS Level",
						grade: "",
						subject: "Chemistry "
					},
				]
			},
			{
				years: "2002 - 2007",
				school: "Maharana Mewar Public School, India",
				subjects: [
					{
						qualification: "CBSE (Equivalent to GCSEs)",
						grade: "A*",
						subject: "Mathematics "
					},
					{
						qualification: "CBSE (Equivalent to GCSEs)",
						grade: "A*",
						subject: "Science "
					},
					{
						qualification: "CBSE (Equivalent to GCSEs)",
						grade: "A*",
						subject: "English "
					},
					{
						qualification: "CBSE (Equivalent to GCSEs)",
						grade: "A",
						subject: "Sanskrit "
					},
					{
						qualification: "CBSE (Equivalent to GCSEs)",
						grade: "A",
						subject: "Social Science(History, Economics, Geography) "
					}
				]
			}
		];
	}
);