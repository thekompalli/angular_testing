import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topDetails = 'N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com';
  Data = {
   profile:"Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate."
  }
  Skills = {
    technical:{
      skills: ["JavaScript", "CSS", "HTML", "React", "Redux", "Mongo", "Deployment"]
    }
    ,
    additional:{
      skills: ["Project Management", "Recruitment", "Business Development", "Editing", "Fundraising"]
    }
  }
  WorkExperience = {

    first : {
      jobType: "Event Manager",
      fromTo : "03/2014 - 02/2017",
      address: "C3 Presents, Washington DC",
      work: ["Lead and executes all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation.","Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the Unites State of Women.", "Exercise fiscal cotrol over budget creation, teacking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations."]
    },
    second : {
      jobType : "Community Relations Manager",
      fromTo : "06/2011 - 01/2014",
      address : "Gay & Lesbian elder Housing, Los Angeles",
      work : ["Arranging presentations and pitch deck.", "Designing a PR plan and establishing important focus points.", "Designing, creating and managing content across multiple communication platforms.", "Building relationships with key media players.", "Project-focused intense program with emphasis on Mongo, Express, React and JavaScript (MERN) technical stack."]
    }
  }

  Education = {
    edType : "Engineering Immersion Program",
    fromTo : "11/2018 - 06/2018",
    address : "Thinkful, Chicago, IL",
    projects : ["Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User`s progress is stored on a backend created using Node and MongoDB.", "Developed a language learning app, 'Foodie Phonetics' using spaced repitition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create the backend that stores user data.", "Developed a concierge app, 'Pley', for individuals looking for curated suggestions whn visiting a new place. React was used to develop the front end which includdes real-time chat, drag and drop and variety of advanced features. The backend, buitl using Node, Express and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT."],
    degree : {
      name : "BA,English",
      fromTo : "09/2001 - 09/2005",
      address : "University of California, los Angeles"
    }
  }
  

}
