const byteSize = (str) => {
  // write your code here
	if(str="")
	{
		return 0
	}
	let arr=str.split("")
	return arr.length
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
