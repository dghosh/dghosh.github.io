'use strict';

cvApp.controller('CvController', 
	function CvController($scope) {

		// $scope.image = "assets/img/deb.jpg";

		$scope.experiences = [
			{
				date: "2014 - Present",
				company: "JP Morgan Chase & Co",
				position: "Technical Analyst",
				descs: [
					"Business Activity Monitoring(BAM): Currently working in an agile feature team on the 'one stop shop' operations dashboard for payment interventions and BAM alert management. This includes end to end development using Java, UM MQ, Spring, JavaScript/AngularJS. Currently been involved in UI development for the new BAM interface, using Javascript(ES6) along with Angular JS, HTML and Sass.",
					"Accounting Manager: Middleware application written in Java that allows one of the payment system to send real time postings to another system with Cassandra as the persistence layer."
				]	
			},
			{
				date: "July 2013 - September 2013",
				company: "JP Morgan Chase & Co",
				position: "Technology Intern",
				descs: ["Developed a reference implementation for deploying business applications to an application server using a release automation tool and documented the complete deployment process"]
			},
			{
				date: "June 2012 - September 2012",
				company: "ORCHID Project - University of Southampton",
				position: "Project Support Analyst",
				descs: ["Worked as a Web Developer using Python/Django framework for the project on 'Intelligent Agents for Electrical Vehicle Charging' and developed the website to be used for the project trials."]
			},
			{
				date: "2010 - 2012",
				company: "Southampton University OTC",
				position: "Officer Cadet",
				desc: [""]
			}
		];

		$scope.skills = [
			{
				language: "Java",
				level: 4
			},
			{
				language: "Spring",
				level: 2
			},
			{
				language: "JavaScript",
				level: 4
			},
			{
				language: "AngularJS",
				level: 3
			},
			{
				language: "HTML/CSS",
				level: 4
			},
			// {
			// 	language: "Python",
			// 	level: 3
			// },
			{
				language: "Databases",
				level: 3
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