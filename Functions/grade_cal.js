let gardeCal = function(score,total)
{
   let result =(score/total)*100
  // return `you got ${result} %` 

   if((result >=90)&&(result<=100))
   {
       console.log(`You got A (${result}) %`)
   }else if((result >=80)&&(result<=89))
   {
       console.log(`You got B (${result}) %`)
   }if((result >=70)&&(result<=79))
   {
       console.log(`You got C (${result}) %`)
   }if((result >=60)&&(result<=69))
   {
       console.log(`You got D (${result}) %`)
   }if((result >=0)&&(result<=59))
   {
       console.log(`You got F (${result}) %`)
   }

}
val =gardeCal(3,10)