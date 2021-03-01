import numpy as np

def sigmoid(x):
    return 1/(1+np.exp(-x))




weights = np.array([[0.1],[0.2]])
print(weights.shape)
print(weights)