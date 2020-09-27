// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

const results = () => {
    const studentsList = [
        { name: 'Binod', subjects: [{ subject: 'Grammer', marks: 80 }, { subject: 'Accounts', marks: 79 }] },
        { name: 'Mukund', subjects: [{ subject: 'Grammer', marks: 54 }, { subject: 'Accounts', marks: 98 }] },
        { name: 'Shruti', subjects: [{ subject: 'Grammer', marks: 100 }, { subject: 'Accounts', marks: 79 }] },
        { name: 'Kiran', subjects: [{ subject: 'Grammer', marks: 60 }, { subject: 'Accounts', marks: 69 }] },
        { name: 'Anjali', subjects: [{ subject: 'Grammer', marks: 65 }, { subject: 'Accounts', marks: 85 }] },
        { name: 'Amrita', subjects: [{ subject: 'Grammer', marks: 56 }, { subject: 'Accounts', marks: 74 }] },
        { name: 'Utkarsh', subjects: [{ subject: 'Grammer', marks: 78 }, { subject: 'Accounts', marks: 90 }] },
        { name: 'Shaily', subjects: [{ subject: 'Grammer', marks: 85 }, { subject: 'Accounts', marks: 95 }] }
    ]
    const result = () => studentsList.reduce((object, item) => {
        let percentResult = item.subjects.reduce(() => {
            return (item.subjects[0].marks + item.subjects[1].marks) / item.subjects.length;
        }, {})
        console.log({ 'Name': item.name, 'Percentage': percentResult });
    }, {})
    const finResult = result(studentsList);
    return finResult;
}
results();

















