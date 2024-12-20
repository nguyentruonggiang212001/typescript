function sum (a: number,b: number ): number {
    return a + b;
}

//Ham ko co kieu tra ve la void
// Voi tham so ko bat buoc khi khai bao ham , su dung "?".
//Khi goi ham co the bo qua tham so tuy chon
function hello(name?:string):void 
{
    console.log(`Xin chao ${name}`);
}

// type Hello = () => void;

hello("F8");
hello();