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

# I contributed to this code : by Starnoh John 2

print(fibonacci_series(10))
print(fibonacci_series(9))

print(fibonacci_series(0))
print(fibonacci_series(20))
