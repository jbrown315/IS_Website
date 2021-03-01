
function myFunction() {
    var test = document.getElementById("test");

    var text = document.createTextNode(math.derivative('x^2', 'x').toString());

    test.appendChild(text)

}

// The Sigmoid Function
function sigmoid(x) {
    return (1)/(1+(Math.pow(Math.E,-x)))
}

// Derivative of the sigmoid function
function sigmoid_der(x) {
    return sigmoid(x)*(1-sigmoid(x))
}

//Define input features
var input_features = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
];

//Defining the target outputs
var target_output = [
 [0],
 [1],
 [1],
 [1]
 ];

//Defining the weights
var weights = [
[0.1],
[0.2]
]

//Bias weight
var bias = 0.3

//Learning Rate
var lr = 0.05

var epoch;

for (epoch = 0; epoch < 10000; epoch++) {
  var inputs = input_features




}