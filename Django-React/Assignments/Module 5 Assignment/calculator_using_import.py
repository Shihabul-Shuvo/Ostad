import UDFs.operations as ops
from UDFs import user_inputs

def menu():
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Exit")

def calculator():
    while True:
        menu()
        choice = input("Enter choice (1/2/3/4/5): ")

        if choice == '5':
            print("Exiting...")
            break

        if choice == '1':
            num1, num2 = user_inputs.inputs()
            print(f"{num1} + {num2} = {ops.add(num1, num2)}")
        elif choice == '2':
            num1, num2 = user_inputs.inputs()
            print(f"{num1} - {num2} = {ops.subtract(num1, num2)}")
        elif choice == '3':
            num1, num2 = user_inputs.inputs()
            print(f"{num1} * {num2} = {ops.multiply(num1, num2)}")
        elif choice == '4':
            num1, num2 = user_inputs.inputs()
            print(f"{num1} / {num2} = {ops.divide(num1, num2)}")
        else:
            print("Invalid Choice. Choose between 1-5.")
calculator()
