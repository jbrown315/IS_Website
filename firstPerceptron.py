# Import Required Libraries
import numpy as np

# Sigmoid Function
def sigmoid(x):
    return 1/(1+np.exp(-x))

# Derivative of sigmoid function
def sigmoid_der(x):
    return sigmoid(x)*(1-sigmoid(x))

# Define input features
input_features = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
print(input_features.shape)
print(input_features)

# Define target Output
target_output = np.array([[0,1,1,1]])

# Reshaping our target output into vector
target_output = target_output.reshape(4,1)

print(target_output.shape)
print(target_output)

# Define weights
weights = np.array([[0.1],[0.2]])
print(weights.shape)
print(weights)

# Bias weight
bias = 0.3

# Learning Rate
lr = 0.05

# Main Logic for neural network
# Running the code 10000 times
for epoch in range(10000):
    inputs = input_features
    '''
     Feed forward input :
    
     in_o is the dot product of inputs (aka input_features) and weights
    
     inputs is a 4*2 matrix
     weights is a 2*1 matrix
    
     So in_o is a 4*1 matrix after adding the bias (single number)
    
     
    
    '''
    in_o = np.dot(inputs, weights) + bias

    # Feed forward output :
    out_o = sigmoid(in_o)

    # Backpropogation
    # Calculating Error
    error = out_o - target_output

    # Going with the formula :
    x = error.sum()
    #print(sigmoid(in_o))

    # Calculating derivative
    derror_douto = error
    douto_dino = sigmoid_der(out_o)

    # Multiplying individual derivatives
    deriv = derror_douto * douto_dino

    # Multiplying with the 3rd individual derivative :
    # Finding the transpose of input_features
    inputs = input_features.T
    deriv_final = np.dot(inputs, deriv)

    # Updating the weights values :
    weights -= lr*deriv_final

    # Updating the bias weight value :
    # print(bias);
    for i in deriv:
        bias -= lr * i

# Check the final values for weight and bias
print(weights)
print("bias"+str(bias))

# Taking inputs:
single_point = np.array([1, 0])

# First step:
result1 = np.dot(single_point, weights) + bias

# Second step:
result2 = sigmoid(result1)

# Print final result:
print("single_point" + str(single_point))
print("dot product" + str(np.dot(single_point, weights)))
print("weights"+ str(weights))
print("result1" + str(result1))
print("result2" + str(result2))
#print(deriv)