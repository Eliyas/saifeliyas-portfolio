import notableWorks from "./notableWork";
import skills from "./skills";
import works from "./work";

const data: any = {
   "posts": [
      // SysIntellect Posts
      {
         "id": "9cd1b08a-74d5-41a3-b8ab-667e9e340d40",
         "body": "<b>Associate Technical Architect - Present</b>",
         "createdAt": "",
         "sortOrder": 1000,
         "sectionType": "Experience",
         "type": "Post",
         "userId": "4",
         "comments": [
            {
               "id": "1ddab796-8e4f-465a-a58a-f18c4940476d",
               "body": `Supporting all aspects of client's products like migration, securing, third-party tools integration, 
               designing flows and features developing, suggesting, and implementing best practices, and participating in
                product proposal creation to help our customers on how our enterprise suite solves their day-to-day problems and fulfill their needs.`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
            {
               "id": "afb2ddb7-4680-442b-9aed-86adacb7b97a",
               "body": `Supporting our products as well as our customer's products as enterprise solutions providers.`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 2000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
            {
               "id": "3d8fcc80-25b6-47e2-9e22-681ae2d16fe0",
               "body": `Our customers are from universities, restaurants, private and government sectors.`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 2000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
            {
               "id": "212bdf80-37c5-4362-8ec3-e61e2c7c5a66",
               "body": `Some of our clients 
               <br/>`,
               "images": [
                  { url: "/images/cmx-clients1.png", alt: "client", "width": "200", "height": "200" },
                  { url: "/images/cmx-clients2.png", alt: "client", "width": "200", "height": "200" },
                  { url: "/images/cmx-clients3.png", alt: "client", "width": "200", "height": "200" },
                  { url: "/images/cmx-clients4.png", alt: "client", "width": "200", "height": "200" },
                  { url: "/images/cmx-clients5.png", alt: "client", "width": "200", "height": "200" },
                  { url: "/images/cmx-clients6.png", alt: "client", "width": "100", "height": "100" },
               ],
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 2000,
               "sectionType": "Experience",
               "type": "Reply",
               "org": "4",
               "userId": "3"
            }
         ],
         "replies": [
            {
               "id": "9f646505-88e7-4ef3-9367-9438260f8fd6",
               "body": `
                  <ul className="list-disc p-4">
                     <li>
                        Increased usability and user interactions of key features which
                        <b>increased 20% sales</b> and <b>proposal success rate.</b> A few things done to
                        archive it are Enhancing search, simplifying e-sing, and reducing
                        document tree structure view screen load time.
                    </li>
                     <li>
                        Securing application from vulnerability by frequently checking library
                         issues and upgrading to the latest versions.
                    </li>
                     <li>
                        <b>Increased client satisfaction by 30%</b> by integrating requested
                        third-party tools and feature changes request done shortly by enabling
                        configurations.
                     </li>
                  </ul>`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
         ],
         "likedIds": []
      },

      // SysIntellect Posts end

      // Client Feedbacks posts
      {
         "id": "fa80b0ba-97d2-42a3-9a9d-338abb2a392d",
         "body": `What my clients thinks about me as a freelancer?`,
         "createdAt": "",
         "comments": [],
         "likedIds": [],
         "sectionType": "ClientFeedback",
         "type": "Post",
         "sortOrder": 2000,
         "userId": "3",
         "replies": [
            {
               "id": "9fca89fa-0d12-4d60-9c4e-e8d057b6a150",
               "body": ``,
               "images": [
                  { url: "/images/feedback1.png", alt: "feedback", "width": "500", "height": "250" }
               ],
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
            {
               "id": "d138ed09-6e48-44d6-8581-492cb21655f2",
               "body": ``,
               "images": [
                  { url: "/images/feedback2.png", alt: "feedback", "width": "500", "height": "200" }
               ],
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
         ]
      },
      // Client Feedbacks posts end

      // QurHealth Experience
      {
         "id": "ca8307ba-d073-4f78-ab72-ba5de9db97e5",
         "body": "<b>Software Associate L3 - 2018-10 to 2022-03</b>",
         "createdAt": "",
         "sectionType": "Experience",
         "type": "Post",
         "sortOrder": 2000,
         "userId": "1",
         "comments": [],
         "likedIds": [],
         "replies": [
            {
               "id": "4d907e2e-fe8a-4768-9eaf-850d4c1f2534",
               "body": ` 
               <ul className="list-disc p-4">
                  <li>Led Engineering team and organization in Tech Stack transformation
                  from <b>.Net, C#</b> to <b>Angular, NodeJS</b> which helped them to develop
                  revenue-making products.</li>
                  <li>Guided team in all aspects of technical complications and learning which
                  <b>reduced 30% time</b> and a lot of money in developing products.</li>
                  <li>Maintaining code quality and security which also helps the company to
                  attain <b>ISO certifications</b> by enabling vulnerability tools, unit testing, and
                  code reviewing.</li>
               </ul>`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
         ],
       
      },

      // QurHealth Experience end


      // Provility 
      {
         "id": "cad3e9a1-bcba-46df-ab47-6b61d83be08d",
         "body": "<b>Senior Software Engineer - 2015-10 to 2018-10</b>",
         "createdAt": "",
         "sectionType": "Experience",
         "type": "Post",
         "sortOrder": 4000,
         "userId": "2",
         "comments": [],
         "likedIds": [],
         "replies": [
            {
               "id": "814aa370-2384-45c7-87e1-fe14889aece9",
               "body": ` 
               <ul className="list-disc p-4">
                  <li>
                     Reduced the senior’s and manager’s <b>dependency by 70%</b> by taking
                     full ownership of project and client interactions.
                  </li>
                  <li>
                     Led and guided a 3-member team which helped the organization to
                     acquire and maintain <b>2 more projects</b> by utilizing them.
                  </li>
               </ul>`,
               "createdAt": "",
               "comments": [],
               "likedIds": [],
               "sortOrder": 1000,
               "sectionType": "Experience",
               "type": "Reply",
               "userId": "3"
            },
         ]
      }
      // Provility end
   ],
   userIdMap: {}
}

data

let userIdMap = {
   "3": {
      "id": "3",
      "name": "MohamedEliyas",
      "username": "SaifEliyas",
      "bio": "<b>Full Stack Developer</b> with <b>7+</b> years of product development experience. <br/> Analysing and Integrating third party tools, Application migration, deploying application with low cost and highly scalable environment and supporting team with all technical aspects. ",
      "createdAt": "2015",
      "profileImage": "/images/profile-pic.jpg",
      "coverImage": "/images/cover.png",
      "location": "chennai, TamilNadu, India",
      "website": "https://techlymeta.com",
      "linkedIn": "https://www.linkedin.com/in/mohamed-eliyas-1a81b092/",
      "twitter": "https://twitter.com/saifeliyas",
      "instagram": "sds",
      "freelancer": "https://www.freelancer.in/u/SaifEliyas",
      "upWork": "https://www.upwork.com/freelancers/~0113346825dc76d349",
      "mobile": "+91 9543016237",
      "gmail": "saifeliyas@gmail.com",
      "sortOrder": 1,
      "followingIds": [
         "1",
         "2"
      ],
      "followersCount": "1B",
      "hasNotification": false,
      "userType": "Individual"
   },
   "4": {
      "id": "4",
      "name": "Sysintellects",
      "username": "Sysintellects",
      "bio": "Sysintellects, LLC, is a specialized provider of contract and vendor management software, document management, automation and business productivity solutions, which includes it's <b>CMx- Contract Management Experience suite</b> of products for contract and vendor tracking , management and document automation.",
      "createdAt": "",
      "location": "101 E. Park Blvd, Suite 600, Plano, 75074",
      "website": "http://www.sysintellects.com/contact.html",
      "linkedIn": "https://www.linkedin.com/company/sysintellects/",
      "twitter": "",
      "instagram": "",
      "coverImage": "/images/sysintellects_cover.jpg",
      "profileImage": "/images/sysintellects_logo.jpg",
      "followingIds": [],
      "followersCount": "0",
      "sortOrder": 2,
      "hasNotification": false,
      "userType": "Organization"
   },
   "1": {
      "id": "1",
      "name": "QurHeath",
      "username": "QurHeath",
      "bio": "QurHealth is a conversational AI company delivering personalized care at Scale. <br/> As a health data company, our IP led technology framework provides security, compliance and trusted access to patients, providers, payers and researchers.",
      "createdAt": "",
      "coverImage": "/images/qur-bg.png",
      "profileImage": "/images/QurHealth_Logo.png",
      "website": "https://qurhealth.com/",
      "linkedIn": "https://www.linkedin.com/company/qurhealth/",
      "twitter": "",
      "instagram": "",
      "location": " Sipcot IT Park, Chennai, Tamilnadu, India",
      "followingIds": [],
      "followersCount": "0",
      "sortOrder": 3,
      "hasNotification": false,
      "userType": "Organization"
   },
   "2": {
      "id": "2",
      "name": "Provility Solution",
      "username": "Provility",
      "bio": "bio",
      "createdAt": "",
      "coverImage": "/images/robocompass.jpg",
      "profileImage": "/images/provility_logo.jpg",
      "location": "Perungudi, Chennai, Tamil Nadu, India",
      "website": "https://provility.com/",
      "linkedIn": "https://www.linkedin.com/company/provility/",
      "twitter": "",
      "instagram": "",
      "followingIds": [],
      "followersCount": "0",
      "sortOrder": 4,
      "hasNotification": false,
      "userType": "Organization"
   }
}

data.userIdMap = userIdMap;
data.posts.push(...skills);
data.posts.push(...notableWorks);
data.posts.push(...works);

export default data;