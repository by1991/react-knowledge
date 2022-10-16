var students = [1, 2, 3, 4, 5];

function rd(students) {
    var length = students.length, index, temp;

    for (let point = length - 1; point >= 0; point--) {
        index = Math.floor(Math.random() * length);

        temp = students[index];
        students[index] = students[point];
        students[point] = temp;
    }

    return students;
}


console.log(rd(students));
console.log(rd(students));
console.log(rd(students));
console.log(rd(students));