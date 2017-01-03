function patate (number, text)
{

if (typeof number === typeof text) {
console.log("identique");
}

else if (typeof number !== typeof text) {
console.log("pas identique!");
}
}
patate(4, "p");