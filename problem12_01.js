//Create a function that recieves an array of numbers and returns an array containing only positive numbers
function getPositives(ar)
{
    var ar2 = [];
    for (var i=0; i<ar.length; i++)
    {
        var el = ar[i];
        
        if (el >=0)
        {
            ar2.push(el);
        }
    }
    return ar2;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);

console.log(ar2);

/* The above code is defining a function named 'getPositives' that takes array 'ar' as an argument. The function creates an new empty array 'ar2'. Then, using a for loop it iterates over each element of the 'ar' array and checks whether the current element is greater than or equal to zero. If the element is non negative it is added to the 'ar2' array using the 'push()' method. After all the elements of 'ar' have been processed, the function returns 'ar2'.*/
