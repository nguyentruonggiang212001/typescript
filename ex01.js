"use strict";
{
    const username = "giang";
    let age = 20;
    let isTeacher = true;
}
//Array 
{
    const myStudent = ["hoang", "huy", "thai"];
    const arr1 = [1, 2, "F8"];
    const arr2 = [1, 2, "Hoang", "F8"];
    console.log(myStudent);
    console.log(arr1);
    console.log(arr2);
    let isMarried = true;
    // enum: "male","female","other"
    let Gender;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
        Gender[Gender["Other"] = 2] = "Other";
    })(Gender || (Gender = {}));
    let gender = Gender.Male;
    let GioiTinh;
    (function (GioiTinh) {
        GioiTinh[GioiTinh["Nam"] = 0] = "Nam";
        GioiTinh[GioiTinh["Nu"] = 1] = "Nu";
        GioiTinh[GioiTinh["Khac"] = 2] = "Khac";
    })(GioiTinh || (GioiTinh = {}));
    let gioiTinh = GioiTinh.Nam;
}
