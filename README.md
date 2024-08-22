# Unit2.FreelancerForum

In this workshop, you will create a platform where independent freelancers can advertise their services. 

Requirements
Build your website according to this user story:

A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

Getting Started
There is no starter code for this workshop. However, the solution is very similar to the Shapes guided practice. You are encouraged to use that repository as a starting point for this workshop.

Create a new repository named Unit2.FreelancerForum on GitHub and clone it down.
Add your cohort team to the repository you just made.
Open the project with VS Code and create an HTML file and a JavaScript file.
Figure out a plan for what code you will need to write based on the user story. Use the rubric to guide you.
Hints
Show example freelancers array
If you are feeling stuck, answer the following guiding questions.

Is your HTML file connected to your JS file?
Have you defined arrays for possible names and occupations?
Have you defined an initial array of freelancers?
Do you know how you want the freelancers' information to be displayed on the page?
Have you written and called a function to render the initial freelancer data?
Have you written a function to generate a new random freelancer?
Is this function being called in an interval?
Have you written a function to calculate the average starting price of your freelancers' array?
When should this function be called to update the displayed message?
Submission
Please submit a link to your GitHub repository. 

Rubric
Freelancer Forum Rubric
Freelancer Forum Rubric
Criteria	Ratings	Pts
This criterion is linked to a Learning OutcomeProject Setup
The latest changes have been pushed to the submitted Github repo.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeProject Setup
The repo contains an HTML file and a connected JS file.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeDOM
The HTML does not contain any hard-coded data about freelancer names, occupations, or starting prices.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeDOM
`document.querySelector` is correctly used to select existing DOM elements.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeState
The program initializes an array of possible names and an array of possible occupations.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeState
The program initializes an array of at least two freelancers with names, occupations, and starting prices.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeFunctionality
The initial array of freelancers is rendered onto the page.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeFunctionality
A function is written that correctly calculates the average starting price of the freelancers array.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeDOM
The DOM is updated to reflect the average starting price.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeFunctionality
A function is written that generates a freelancer with a random name, occupation, and starting price. This object is pushed into the freelancers array.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
This criterion is linked to a Learning OutcomeFunctionality
An interval is set to add a freelancer and rerender every few seconds.
1 to >0.0 pts
Observed
0 pts
Not Observed
1 pts
Total Points: 11
