{
 const username: string = "giang";

 let age: number = 20;

 let isTeacher: boolean = true;
}

//Array 

{
    const myStudent: string[] = ["hoang","huy","thai"];
    const arr1: [number,number,string] = [1,2,"F8"];
    const arr2: (string|number)[] =[1,2,"Hoang","F8"];
    console.log(myStudent);
    console.log(arr1);
    console.log(arr2);

    let isMarried: boolean = true
    

    // enum: "male","female","other"

    enum Gender{
      Male,
      Female,
      Other
    }

    let gender:Gender = Gender.Male  

    enum GioiTinh{
        Nam,
        Nu,
        Khac
    }
    
    const gioiTinh: GioiTinh = GioiTinh.Nam
  
}


