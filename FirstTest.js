
// The Sigmoid Function
function sigmoid(x) {

    return(math.dotDivide(1, math.add(math.exp(math.unaryMinus(x)),1)));

}

// Derivative of the sigmoid function
function sigmoid_der(x) {
    return math.dotMultiply(sigmoid(x),(math.subtract(1,sigmoid(x))));
}

function myFunction() {
//Define input features
var input_features = math.matrix([
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1]
]);

//Defining the target outputs
var target_output = math.matrix([
 [0],
 [1],
 [1],
 [1]
 ]);

//Defining the weights
var weights = math.matrix([
[0.1],
[0.2]
]);

//Bias weight
var bias = 0.3;

//Learning Rate
var lr = 0.05;

var epoch;

for (epoch = 0; epoch < 10000; epoch++) {

    var inputs = input_features;

    var in_o = math.add(math.multiply(inputs, weights), bias);

    //Feed Forward Output
    var out_o = sigmoid(in_o);

    //Backpropogation
    //Calculating Error
    var error = math.subtract(out_o, target_output);

    //Calculating derivative
    var derror_douto = error;
    var douto_dino = sigmoid_der(out_o);

    //Multiplying individual derivatives
    var deriv = math.dotMultiply(derror_douto, douto_dino);

    //Multiplying with the 3rd individual derivative :
    //Finding the transpose of input_features
    var inputs = math.transpose(input_features);
    var deriv_final = math.multiply(inputs, deriv);

    //Updating the weights values :
    weights = math.subtract(weights, math.dotMultiply(lr, deriv_final));

    //Updating the bias weight value :
    for (var i = 0; i < math.subset(math.size(deriv), math.index(0)); i++) {
        bias = math.subtract(bias, lr * math.subset(deriv, math.index(i,0)));
    }



}

var firstNumber = document.getElementById("first").value;

var secondNumber = document.getElementById("second").value;



//Taking inputs:
var single_point = math.matrix([[firstNumber], [secondNumber]]);

//First step:
var result1 = math.dotMultiply(single_point, weights);

var step1 = math.add(math.subset(result1, math.index(0,0)),math.subset(result1, math.index(1,0)));
var step2 = math.add(step1, bias);
var step3 = math.matrix([[step2]]);

//Second step:
var result2 = sigmoid(step2);

//window.prompt(result1);
//window.prompt(result2);
//window.prompt(weights);
//window.prompt(math.dotMultiply(single_point, weights));
//window.prompt(step2);

///TESTING
    var test = document.getElementById("test");

    //var abc = math.dotDivide(1, math.add(math.exp(math.unaryMinus(1)),1));
    //var abc = math.subset(result2, math.index(0,0));

    var abc = result2;

    var text = document.createTextNode(abc);

    test.appendChild(text);

    ///TESTING
}

