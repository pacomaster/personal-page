const cvData = [
    {
      "id": 1,
      "name": "Francisco Javier Amezcua Garcia",
      "position": "Software Developer",
      "birthday": "1988-08-16T00:00:00.000Z",
      "email": "fco_amezcua@hotmail.com",
      "phone": "3311356376",
      "photo": "",
      "description": "Proactive software developer with over 13 years of experience at global tech companies, eager to learn and deliver new products to customers using the latest technologies like cloud, microservices, Ai and big data.",
      "experience": [
        {
            "id": 1,
            "company": "Flex",
            "role": "Intern",
            "location" : "Zapopan, MX",
            "summary": "While at Flex (Formally Flextronics) I was an intern developing web application for the production line of Blackberry cellphones",
            "projects" : [
                "ASP.NET applications to scan and monitor pieces of blackberry production lines using SQL Server DB.",
                "Created Store procedures for SQL Server.",
                "Reports in application based on SQL Server views."
            ],
            "technologies" : ["ASP.NET", "C#", "SQL Server"],
            "color": "green",
            "startDate": "2010-01-02T00:00:00.000Z",
            "endDate": "2011-01-02T00:00:00.000Z",
        },
        {
            "id": 2,
            "company": "HP",
            "role": "Software developer Jr.",
            "location" : "Zapopan, MX",
            "summary": "During my time at HP I worked on multiple web applications as full stack developer, using technologies as Java and Javascript.",
            "projects" : [
                "Maintenance of a Java application that was a searcher for Drivers related to HP products.",
                "Development of Front end functionality for the intranet searcher for HP using HTML, CSS, Javascript and Jquery",
                "Development of Demo applications for touchscreen monitors using HTML5, CSS, Javascript and Jquery."
            ],
            "technologies" : ["Java", "HTML", "CSS", "Javascript", "Jquery"],
            "color": "blue",
            "startDate": "2011-01-02T00:00:00.000Z",
            "endDate": "2016-01-02T00:00:00.000Z",
        },
        {
            "id": 3,
            "company": "Oracle",
            "role": "Software developer 3",
            "location" : "Zapopan, MX",
            "summary": "At oracle my main focus was on java development of the oracle universal installer and later the storage factory cloud application",
            "projects" : [
                 "The oracle universal installer is an application that allow users to install or update oracle software. It is a standalone JAVA application executed at command line or visual mode to install or update oracle software",
                 "The Storage Factory is a Java application that creates volumes with preinstalled content to be delivered to the final users. It is a set of multiple JAVA applications, and API to manage the creation jobs, a client to communicate with the API, and a script to mount, install and update the volumes",
                 "The Storage Factory API is delivered as a docker container.",
                 "For Storage Factory alarms and configurations were done in Terraform.",
                 "For Storage Factory Grafana dashboards were created to monitor the different environments where it runs.",
                 "The Storage Factory canary tests to create multiple volumes daily for testing.",
             ],
            "technologies" : ["Java", "Junit", "Mockito", "Swagger", "python", "OCI", "Terraform", "Docker", "Grafana"],
            "color": "red",
            "startDate": "2016-01-02T00:00:00.000Z",
            "endDate": "",
        }
      ],
      "education": [
          {
              "id": 1,
              "name": "Universidad del Valle de Mexico",
              "abbreviation": "UVM",
              "degree": "Ing. Computer Systems",
              "grade": 98,
              "color": "red",
              "startDate": "2007-01-02T00:00:00.000Z",
              "endDate": "2011-01-02T00:00:00.000Z",
          },
          {
                "id": 2,
                "name": "Instituto Tecnologico y de Estudios Superiores de Occidente",
                "abbreviation": "ITESO",
                "color": "blue",
                "degree": "Master Computer Science",
                "grade": 95,
                "startDate": "2015-01-02T00:00:00.000Z",
                "endDate": "2017-01-02T00:00:00.000Z",
            },
    ],
    "skills" : [
        {"id": 1, "name": "Java"},
        {"id": 2, "name": "Linux"},
        {"id": 3, "name": "Docker"},
        {"id": 4, "name": "Grafana"},
        {"id": 5, "name": "HTML"},
        {"id": 6, "name": "CSS"},
        {"id": 7, "name": "Javascript"},
        {"id": 8, "name": ".NET"},
        {"id": 9, "name": "SQL Server"},
        {"id": 10, "name": "Cloud"}
    ],
    "strengths" : [
        {"id": 1, "title": "Accountability", "summary": "Deliver on my promises, I rise up to the standards that our customers expect."},
        {"id": 2, "title": "Quick Learner", "summary": "Fast to adapt to new technologies, every project is different and tools also change so I rapidly adapt to new conditions to deliver results in a prompt matter."},
        {"id": 3, "title": "Team player", "summary": "As part of the team I understand my role to deliver value to our customers but I also enjoy helping others so we can spread the knowledge across the team."}
    ],
    "certifications" : [
        {"id": 1, "name": "Oracle Certified Expert, Java Platform, EE 6 Web Component Developer", "school": "Oracle", "year": 2014},
        {"id": 2, "name": "Certified Scrum Master (CSM)", "school": "Scrum Alliance", "year": 2014},
        {"id": 3, "name": "Certified Scrum Developer (CSD)", "school": "Scrum Alliance", "year": 2014},
        {"id": 4, "name": "SQL Server 2008, Implementation and Maintenance", "school": "Microsoft", "year": 2012},
        {"id": 5, "name": "Oracle Certified Professional, Java SE 6 Programmer", "school": "Oracle", "year": 2011}
    ],
    "languages" : [
        {"code":"en","lang":"english"},
        {"code":"es","lang":"spanish"},
        {"code":"ja","lang":"japanese"}
        ]
    }
]


export default cvData