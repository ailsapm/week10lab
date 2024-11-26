function showlargestnumber(){
//declare and create array
const nums = [870, 45, 5, 29, 812, 37, 15];
//use Math.max to find largest number
const largestNum = Math.max.apply(Math, nums);
//print to console
console.log(largestNum); 
//send to html div to display
document.getElementById("reveal").innerHTML += ("The largest number from the array " +nums +" is: " +parseInt(largestNum)); 
}

function getsum(){
    //declare and create array
    const nums = [870, 45, 5, 29, 812, 37, 15];
    // Initialize var
    let sum = 0;
    // use for loop to calculate sum
    for (let i = 0; i < nums.length; i++) {
	// Add each number to the total
    sum += nums[i];
}
    // print to console
    console.log("The total sum of numbers in the array is : ", sum);

    //send to html div to display
    document.getElementById("display").innerHTML += ("The total sum of the array " +nums +" is: " +sum); 
}
    function getmean(){
        //declare and create array
        const nums = [870, 45, 5, 29, 812, 37, 15];
        // Initialize var
        let sum = 0;
        // use for loop to calculate sum
        for (let i = 0; i < nums.length; i++) {
        // Add each number to the total
        sum += nums[i];
        //divide by length of array to get mean
        var mean = sum/nums.length;
    }
        // print to console
        console.log("The average of numbers in the array is : ", mean);
    
        //send to html div to display
        document.getElementById("meanresult").innerHTML += ("The average of the array " +nums +" is: " +mean); 
    
}
