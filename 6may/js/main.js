class Product{
    constructor(no,name,price,count){
        this.no=no;
        this.name=name;
        this.price=price;
        this.count=count;
    }
  GetInfo(){
      return `No-${this.no},Name-${this.name},Price-${this.price},Count-${this.count}`
  }
}
class Book extends Product{
    constructor(no,name,price,count,genre){
        super(no,name,price,count);
        this.genre=genre;
    }
    books=[];
    Add(book){
        this.books.push(book)
    }
    GetBookPriceAvg(){
        total=0;
        this.books.forEach(x=>total=+this.price)
        return total/this.books.length;
    }
}
let arr=["Banan","limon"]
arr.push("Kiwi")


let a=128;
let hsl=1;
let i=0;
while (hsl<a) {
    hsl*=2;
    i++;
    
}
if(hsl==a){
    console.log("2 nin quvvetidir");
}
else{
    console.log("nin quvveti deyil");
}
let str="Salam"
function CheckStr(text,search,count=0){
    for(let i=0; i<text.length;i++){
        if (text[i]==search) {
            count++
            
        }
    }
    return count;
}