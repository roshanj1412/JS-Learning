function stringHandsOn(){
    var string='     Hey are you doing good,keep it up   ';
    console.log(`(01==>) The string is:${string}.`);
    console.log(`(02==>) The length of '     Hey are you doing good,keep it up   ' is:${string.length}.`);
    
    var result=string.trim();
    console.log(`(03==>)String after removing extra spaces is:${result} and length is:${result.length}`);

    var stringLength=string.length;
    var resultLength=result.length;
    var noOfSpacesRemoved=stringLength-resultLength;
    console.log(`(04==>)Total number of extra spaces in step thee are:${noOfSpacesRemoved}`);

    var charAtFirst=result.charAt(0);
    var last=result.length-1;
    var charAtLast=result.charAt(last);
    console.log(`(05==>)First and Last Characters are:${charAtFirst} and ${charAtLast}`);

    var words=result.split(" ");
    console.log(`(06==>)Total number of words available in string is:${words.length}`);

    console.log(`(07==>) Index of word 'good' is:${string.indexOf('good')} `);

    console.log(`(08==>)Substring starting from index 22  using 'substring()' is:${string.substring(22)} and using 'slice' is ${string.slice(22)}`);

    console.log(`(09==>)is string und with word "up":${result.endsWith("up")}`);

    console.log(`(10==>) is string starts with "Hey": ${result.startsWith('Hey')}`);
}

stringHandsOn();