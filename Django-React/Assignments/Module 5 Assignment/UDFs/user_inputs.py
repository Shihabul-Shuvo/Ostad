def valid_number_input(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Enter a valid number.")

def inputs():
    num1 = valid_number_input("Enter the first number: ")
    num2 = valid_number_input("Enter the second number: ")
    return num1, num2