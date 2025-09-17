# Responsive Personal-Portfolio
It is a Responsive Portfolio Website made by using basic Front-End(HTML, CSS, JS) and a JS Library Emailjs.\
To use the Portfolio copy all the files and folders as they are.\
NOTE: Email sending functionality will work with some changes.

The website contains 7 main components:
1. Navigation Bar - To quickly relocate to a specific section.
2. Home - Showing website's overview, to put your own image save your image in the img folder with the name "MyImg1.png".
3. About - Something about myself, to put your own image save your image in the img folder with the name "MyImg2.png".
4. Skills - Skills shown by boxes here with a percentage which shows about the knowledge in that specefic area, which is truly my self estimated number, to add, delete or modify a skill work with the divs with "skillsDivs" class inside The div with the id "skillsDiv1". Handle CSS accordingly.
5. Projects - My personal projects are mentioned here, to mention your own projects use the div with class "projects" and work with the div with id "projectsDiv1", "projectsDiv2", and so on. Handle CSS accordingly.
6. Contact - To let the viewers connect with me.\
   NOTE: To achieve this functionality on your system you will have to do some changes in the JS file.\
   At the very first line, replace PUBLIC_KEY with your emailjs public key found in the account section.\
   Inside the sendMail function in its return statement, replace the "SERVICE_ID" with your emailjs service id found in the Email Services and "TEMPLATE_ID" with your template's id found in its settings.\
   Also, the name of the keys of your parms object inside the sendMail function should be exactly same in your template enclosed in {{ }} otherwise it will throw error 400 and email functionality won't work.
8. Footer - Any website's basic component.
