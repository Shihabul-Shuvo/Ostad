def valid_number_input(prompt):
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("Enter a valid number.")

class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            return "Undefined \nMessage: Division by '0' is not possible"
        return round(a / b, 2) 
    
    def get_user_inputs(self):
        num1 = valid_number_input("Enter the first number: ")
        num2 = valid_number_input("Enter the second number: ")
        return num1, num2

    def menu(self):
        print("Select operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Exit")

    def run(self):
        while True:
            self.menu()
            choice = input("Enter choice (1/2/3/4/5): ")

            if choice == '5':
                print("Exiting...")
                break

            if choice == '1':
                num1, num2 = self.get_user_inputs()
                print(f"{num1} + {num2} = {self.add(num1, num2)}")
            elif choice == '2':
                num1, num2 = self.get_user_inputs()
                print(f"{num1} - {num2} = {self.subtract(num1, num2)}")
            elif choice == '3':
                num1, num2 = self.get_user_inputs()
                print(f"{num1} * {num2} = {self.multiply(num1, num2)}")
            elif choice == '4':
                num1, num2 = self.get_user_inputs()
                print(f"{num1} / {num2} = {self.divide(num1, num2)}")
            else:
                print("Invalid Choice. Choose between 1-5.")


calculator = Calculator()
calculator.run()
