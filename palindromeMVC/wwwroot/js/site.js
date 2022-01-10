function getValues() {
    let startingValue = String(document.getElementById("startValue").value);

    //transform the string so that it's more manageable
    let transformedValue = valueTransform(startingValue);

    //reverse the string to compare it to the starting-transformed value
    let reverseValue = reverseString(transformedValue);

    //compare the string
    let templateReturn = stringComparison(transformedValue, reverseValue);

    //finally, produce a conclusion based on the comparison.
    if (templateReturn == true) {
        document.getElementById("results").innerHTML = `<h5 class="lead">Congratulations! ${startingValue} is certainly a palindrome!</h5>`;
    }
    else if (templateReturn == false) {
        document.getElementById("results").innerHTML = `<h5 class="lead">Unfortunately, "${startingValue}" is not a palindrome.</h5>`;
    }

}

function reverseString(transformedValue) {
    let reverseValue = "";
    for (i = transformedValue.length - 1; i >= 0; i--) {
        reverseValue += transformedValue[i];
    }
    return (reverseValue);
}

function valueTransform(startingValue) {
    transformedValue = "";
    transformedValue = startingValue.split(" ").join("")
    transformedValue = transformedValue.toLowerCase();
    return (transformedValue);
}

function stringComparison(transformedValue, reverseValue) {
    let templateReturn = false;
    if (transformedValue == reverseValue) {
        templateReturn = true;
    }
    return (templateReturn);
}