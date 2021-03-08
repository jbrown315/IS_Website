
//function myFunction() {
    //var test = document.getElementById("test");

   // var text = document.createTextNode(math.matrix([[0.1], [0.2]]).toString());

  //  test.appendChild(text)

//}

// The Sigmoid Function
function sigmoid(x) {

    //for (i=0;i<x.length;i++){
    //    x[i][0] = -(x[i][0]);
    //}

    var a = math.subset(x, math.index(0, 0), -(x.subset(math.index(0,0))));
    var b = math.subset(a, math.index(1, 0), -(a.subset(math.index(1,0))));
    var c = math.subset(b, math.index(2, 0), -(b.subset(math.index(2,0))));
    var d = math.subset(c, math.index(3, 0), -(c.subset(math.index(3,0))));


    return 1/(1+math.exp(d))
}

// Derivative of the sigmoid function
function sigmoid_der(x) {
    return sigmoid(x)*(1-sigmoid(x))
}

function myFunction() {
//Define input features
var input_features = math.matrix([
  [0, 0],
  [1, 0],
  [0, 1],
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

    var in_o = math.multiply(inputs, weights);

    //Feed Forward Output
    var out_o = sigmoid(in_o);

    //Backpropogation
    //Calculating Error
    var error = out_o - target_output;

    //Calculating derivative
    var derror_douto = error;
    var douto_dino = sigmoid_der(out_o);

    //Multiplying individual derivatives
    var deriv = derror_douto * douto_dino;

    //Multiplying with the 3rd individual derivative :
    //Finding the transpose of input_features
    var inputs = math.ctranspose(input_features);
    var deriv_final = math.multiply(inputs, deriv);

    //Updating the weights values :
    weights -= lr*deriv_final;

    //Updating the bias weight value :
    for (var i = 0; i < deriv.length; i++) {
        bias -= lr * i;
    }

    ///TESTING
    var test = document.getElementById("test");

    var abc = math.subset(in_o, math.index(1, 0), -(in_o.subset(math.index(1,0))));

    var text = document.createTextNode((abc).toString());

    test.appendChild(text);

    ///TESTING

}
//Taking inputs:
var single_point = math.matrix([0, 1]);

//First step:
var result1 = math.multiply(single_point, weights) + bias;

//Second step:
var result2 = sigmoid(result1);


}

