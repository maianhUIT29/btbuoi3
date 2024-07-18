function printStudentInfo(student) {
    console.log("Thông tin học sinh:");
    console.log("Tên:", student.name);
    console.log("Tuổi:", student.age);
    console.log("Điểm trung bình:", student.averageGrade);
}

let student = {
    name: "Nguyen Van A",
    age: 20,
    averageGrade: 8.5
};

printStudentInfo(student);
