// Sort an array of 0s, 1s and 2s | Dutch National Flag problem
// Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls). 

const sortArray = (arr) =>{
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high){
        if(arr[mid] === 0){
            //
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }else if(arr[mid] === 1){
            mid++;
        }else if(arr[mid] === 2){
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

console.log(sortArray([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));


