# Iterative approach

def fibonacci_series (n):
    fibonacci_array = [0,1]
    if n <= 0: 
        return []
    
    if n == 1: 
        return [0]
    
    if n == 2 :
        return fibonacci_array
    

    while len(fibonacci_array) < n:
        fibonacci_array.append(fibonacci_array[-1] + fibonacci_array[-2])

    return fibonacci_array



print(fibonacci_series(0))