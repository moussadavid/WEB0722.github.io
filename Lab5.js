function sum(number){
    const a3 =number.filter(s => s > 70);
     let total=0;
    // for( let i= 0; i< a3.length; i++)
    // {
    //     total+= a3[i];
    // }
    let temp= a3.reduce((x,y)=>x+y ,total);
    console.log(temp);
}

sum([10,20,28,90,80,85]);


function getNewArray(words)
{
    const result = words.filter(function(word)
    {
        return word.length>=5;
    }
    ).filter(function(word)
    {
        return word.includes('a');
    });
    console.log(result);

}

getNewArray(['ward1','dsfsdfsd','sdfsdfsdf','dff']);