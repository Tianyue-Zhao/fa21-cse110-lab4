let student = {
    name: 'Sarah',
    major: 'lol why am i doing this',
    'Grad Year' : 'why use spaces?',
    greeting: function() { console.log('Not so good'); },
    'Favorite Teacher': {
        name: 'Must get all points at least try'
    },
    courseLoad: ['1', '2']
};

console.log(student.name)
student.greeting()
console.log(student["Favorite Teacher"].name)
console.log(student.courseLoad[0])