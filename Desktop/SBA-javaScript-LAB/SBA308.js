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
        console.log("Learner Id" + " " + learnerSubmissions[i].learnerId);
        continue;
    }
}

for(const c of learnerSubmissions) {
    console.log(c)
}

// let x = avg 
let studentScore1 = 197 
let studentScore2 = 141 
let yourPoints1 = 200 
let yourPoints2 = 150 

studentScore1 = 197 

while (studentScore1 === 197) {
    studentScore1 /= yourPoints1; {
        console.log("learnerId" + " " + "18" + " " + "average" + " " + studentScore1)
    }
}

studentScore2

while (studentScore2 === 141) {
    studentScore2 /= yourPoints2; {
        console.log("learnerId" + " " + "55" + " " + "aveerage" + " " + studentScore2)
    }
}

let courseSubjects = ["Intellectuals in Exile", "Philosophy of Anarchists", "Strength of Economists"];
let optionalCourses = ["Properties of Finesse", "The Vitality of Style", "The Nonexistence of True Love", "Learning as a Supreme Activity"]

let updatedCourses = courseSubjects.concat(optionalCourses);
console.log(updatedCourses);

let correctedCourses = updatedCourses.splice(5, 1, "Importance of Strippers", "Timing of Gender Roles")

console.log(updatedCourses);
