const courseInfo = {
    id: 15,
    name: "Death Poets"  
}; 

const assignmentGroup = {
    id: 22,
    name: "Fashion of Anarchists",
    courseId: 45,
    groupWeight: 75, 
    assignments: [
        {
            id: 100, 
            name: "Intellectuals in Exile", 
            pointsPossible: 200, 
            dueDate: "January 17, 2057"
        },
        {
            id: 201, 
            name: "Philosophy of Anarchists",
            pointsPossible: 150, 
            dueDate: "February 19, 2057", 
        },
        {
            id: 301,
            name: "Strength of Economists?",
            pointsPossible: 300,
            dueDate: "March 18, 2057", 
        }
    ] 
}; 

const learnerSubmissions = [
    {
        learnerId: 18,
        assignmentId: 100,
        submission: {
            submittedAt: "January 16, 2057",
            score: 197 
        }
    },
    {
        learnerId: 18,
        assignmentId: 201, 
        submission: {
            submittedAt: "February 18, 2057",
            score: 141
        }
    },
    {
        learnerId: 18, 
        assignmentId: 301, 
        submission: {
            submittedAt: "March 15, 2057", 
            score: 299
        }
    },
    {
        learnerId: 55,
        assignmentId: 100,
        submission: {
            submittedAt: "January 17, 2057",
            score: 167
        }
    },
    {
        learnerId: 55,
        assignmentId: 201, 
        submission: {
            submittedAt: "March 10, 2057",
            score: 149
        }
    }
]

for(let i = 0; i < learnerSubmissions.length; i++) {
    if (learnerSubmissions[i].learnerId) {
        console.log(learnerSubmissions[i].learnerId);
    }
}
