import { createSlice } from "@reduxjs/toolkit";
const fishGuardianData = [
    {
        "id" : 1,
        "name" : 'Alex',
        "p1" : 'We have detected suspicious activity on your abstract crop account. To secure your account, we require your immediate attention.',
        "p2" : 'Click on the following link to verify your account details:',
        "link" : 'http://13lajf910938jsalfjfjlajfakdfjl.com',
        "p3" : 'Please do this at your earliest convenience to avoid any potential risks to your account. Ignoring this message may lead to account suspension.',
        "p4" : 'Thank you for your cooperation',
        "p5" : 'XYZ Corp Support Team',
    },
    {
        "id": 2,
        "name": "Peter",
        "p1": "We hope this email finds you well. Attached is the invoice for the recent purchase made on behalf of abstract corporation.",
        "p2": "Kindly review the attached document and confirm the payment by clicking the link below:",
        "link": "http://afoi901alkafljlkjflakjf.mail.yxy",
        "p3": "If you have any questions or concerns, please contact our billing department immediately.",
        "p4": "Thank you for your prompt attention to this matter.",
        "p5": "Sincerely, abstract Corp Billing Department"
      },
      {
        "id": 3,
        "name": "Mark",
        "p1": "Hello Mark, Our security systems have detected a potential breach in the XYZ Corp network. To safeguard your account and sensitive information, we require your immediate action.",
        "p2": "Please click on the following link to update your security settings:",
        "link": "http://akljf10498agljk10948/lja/fa.com",
        "p3": "Your swift response is crucial in preventing any unauthorized access. We appreciate your cooperation.",
        "p4": "",
        "p5": "Best Regards, XYZ Corp Security Team",
      },      
      {
        "id": 4,
        "name": "Robert",
        "p1": "Hello Robert, I hope this email finds you well. We have an urgent financial matter that requires your immediate attention. ",
        "p2": "Please find the attached invoice for your review and approval.",
        "link" : "https://www.abstract.com/invoice/15e/type?=doc",
        "p3": "Once you've reviewed the attached document, kindly reply to this email with the confirmation. Your prompt response is highly appreciated.",
        "p4" : "",
        "p5": "Best regards, Elon Jobs abstract corp"
      },
      {
        "id": 5,
        "name": "Carl",
        "p1": "Hello Carl, In light of the recent surge in COVID-19 cases, we have updated our safety measures for all employees.",
        "p2": "Click on the link below to review the new guidelines and complete the mandatory health measures.",
        "link": "https://abstract.com/health-guidelines",
        "p3": "Your compliance with these measures is crucial for the well-being of our abstract Corp community.",
        "p4": "Stay safe, abstract corp health team and Safety Team"        
    },
    {
        "id": 6,
        "name": "David",
        "p1": "Dear David, As we approach the tax season deadline, we need your immediate attention for a document review.",
        "p2": "Click the link below to access your W-2 form and ensure all details are accurate.",
        "link": "https://www.tax.gov.in/check-w-2/123/type?=verify",
        "p3": "Failure to review and update your tax information may result in delays or errors in processing.",
        "p4" : "",
        "p5": "Thank you for your prompt cooperation. Best regards, abstract Corp Finance Department"
       },
       {
            "id": 7,
            "name": "Charles",
            "p1": "Hello Charles, We attempted to deliver a package to your office, but there was an issue with the delivery.",
            "p2": "Please click the link below to track your package and provide delivery instructions.",
            "link": "https://abstract.com/track-package",
            "p3": "Your swift response is crucial to avoid any further delivery complications.",
            "p4" : "",
            "p5": "abstract corp delivery department"
          },
          {
            "id": 8,
            "name": "William",
            "p1": "Dear William, We hope this message finds you well. Our team has recently implemented some important updates to enhance the security of your account.",
            "p2": "- **Date of Update:** 12-01-24",
            "p3": "- **Changes Made:** fix some common bug and error",
            "p4": "If you have any questions or concerns regarding these updates, please do not hesitate to contact our support team at [abstrac_support@email.com] or call us at [19872-39524].",
            "p5": "Thank you for your continued trust in our services. Best regards, abstract corporation Customer Support Team"
          },
          {
            "id": 9,
            "name": "John",
            "p1": "Dear John, We are thrilled to inform you that your email has been randomly selected as the grand prize winner of the abstract Lottery!",
            "p2": "To claim your winnings, kindly click on the secure link below and fill out the necessary information for verification purposes:",
            "link": "https://abstract-lottery-claim.com",
            "p3": "Please note that this link is time-sensitive, and you must claim your prize within the next 48 hours.",
            "p4" : "",
            "p5": "We appreciate your participation and look forward to celebrating your success! Best Regards, The abstract Lottery Team"
          },
          {
            "id": 10,
            "name": "Jane",
            "p1": "Dear Jane, We wanted to inform you about some recent changes in our company policies and procedures.",
            "p2": "Click the link below to access the updated document:",
            "link": "https://abstract.com/company-announcement",
            "p3": "Your understanding and adherence to these changes are appreciated for a smooth transition.",
            "p4" : "",
            "p5": "Thank you for your cooperation. Best Regards, abstract Corp Management Team"
          }   
]
export const FishGuardianSlice = createSlice({
    name : 'FishGuardian',
    initialState : fishGuardianData,
    reducers : {}
})
export const {} = FishGuardianSlice.actions;
export default FishGuardianSlice.reducer
