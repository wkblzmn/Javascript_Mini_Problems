//calculate the sum of numbers in an array of numbers
function sumArray(ar)
{
    var sum = 0;
    for(i=0;i<ar.length;i++)
    {
        sum+=ar[i];
    }
    return sum;
}
var ar= [2,3,-1,5,7,9,10,15,95,100];
var sum=sumArray(ar);
console.log(sum)