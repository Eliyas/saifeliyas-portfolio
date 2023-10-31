const notableWorks = [
    // sysintellects
    {
        "id": "34a5439c-8fd4-4bb2-90da-08d5ee7ae276",
        "body": `
        Product migration. Our API server is running with Spring Framework 4.x and with outdated libraries. 
        As we planned for version 2 upgraded to the latest spring boot.
        <br/>
        <br/>
        Following Steps taken for migration
        <ul className="list-disc mt-2 p-3">
           <li>Created a new spring boot application with updated configurations and spring security.</li>
           <li>Version 1 used the Jersy framework for REST and entity annotations from Javax. so moved all API to spring controllers and upgraded hibernate.</li>
           <li>Hibernate should be upgraded with the latest spring boot. so all query builder methods used are updated.</li>
           <li>Velocity email templating library replaced with Thymeleaf</li>
        </ul>
        `,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1002,
        "orgId": "4",
        "userId": "3"
     },
     {
        "id": "dcdc02c4-2425-4358-8d4b-aadfe3b5675a",
        "body": `Found a critical vulnerability in log4j in a specific version and advised to upgrade to the latest version.`,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1003,
        "orgId": "4",
        "userId": "3"
     },
     {
        "id": "a2ab0117-c7f4-4607-a63e-24b234e8d284",
        "body": ` Liquebase integration. Our application is the multi-tenant-based solution, every client will have a separate DB.
         So integrated liquebase for db version management and initial db setup with just a single click.`,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1004,
        "orgId": "4",
        "userId": "3"
     },
     // sysintellects end


     // QurHealth
     {
        "id": "e4e9f875-6a8a-4936-b025-995ed5bd4388",
        "body": `Our product Valholla was powered with <b>Angular 5</b> later upgraded to latest which <b>reduced 60% of build size</b> and <b>reduced 50% of initial loading time.</b>`,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1004,
        "orgId": "1",
        "userId": "3"
     },
     {
        "id": "1e2a88fd-034b-4fc1-ad16-086238d50d8a",
        "body": `
            <ul className="list-disc p-4">
                <li>
                    Analyzed unit test case libraries <b>Jest, Mocha, and Jasmine</b> for server code testing. Finalized Jest, 
                    since it has all needed features in one package, like <b>unit testing, mocking class, test runner and coverage report</b>. 
                </li>
                <li>
                    Created POC and example test cases to help the team start writing test cases.
                </li>
            </ul>`,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1004,
        "orgId": "1",
        "userId": "3"
     },
     {
        "id": "c9df0163-cd91-498e-85cb-065b164252a8",
        "body": `
            <b>Third Party Tools Integration </b>
            <ul className="list-disc p-4">
                <li>
                    S3, Confluence, Sharepoint, Google Drive 
                </li>
                <li>
                    Tableau Dashboard, Highcharts
                </li>
                <li>
                    AWS trusted advisor, Cost Explorer
                </li>
                <li>
                    Integrated and customized <b><a className='text-blue-500 hover:text-blue-800' href="https://github.com/polonel/trudesk"
                     target="_blank">Trudesk</a></b> open source help desk.
                </li>
                <li>
                    Splunk Log Management
                </li>
                <li>
                    and more
                </li>
            </ul>`,
        "createdAt": "",
        "comments": [],
        "likedIds": [],
        "sectionType": "NotableWork",
        "type": "Post",
        "sortOrder": 1004,
        "orgId": "1",
        "userId": "3"
     },
     // QurHealth end

     // provility
     
]


export default notableWorks;