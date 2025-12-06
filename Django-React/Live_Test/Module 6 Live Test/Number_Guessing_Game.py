class Guessing_game:
    def __init__(self):
        self.low = 1
        self.high = 100
        self.attempts = 0

    def number_input(self):
        while True:
            try:
                user_input = input(f"Think of a number between {self.low} and {self.high}, and enter it (for testing): ")
                number = int(user_input)
                if 1 <= number <= 100:
                    return number
                else:
                    print("Please enter a number between 1 and 100.")
            except ValueError:
                print("Invalid input! Please enter a valid number.")

    def guess(self):
        self.attempts += 1
        guess = (self.low + self.high) // 2
        print(f"Computer guesses: {guess}")
        return guess

    def feedback(self):
        while True:
            try:
                feedback = input("Your feedback (H/L/C): ").strip().upper()
                if feedback == "H":
                    return "H"
                elif feedback == "L":
                    return "L"
                elif feedback == "C":
                    return "C"
                else:
                    raise ValueError("Invalid feedback! Please enter 'H' for too high, 'L' for too low, or 'C' for correct.")
            except ValueError as e:
                print(e)

def main():
    game = Guessing_game()
    print("Welcome to the Guessing Game!")
    user_number = game.number_input()
    
    while True:
        guess = game.guess()
        
        feedback = game.feedback()
        
        if feedback == "H":
            game.high = guess - 1
        elif feedback == "L":
            game.low = guess + 1
        elif feedback == "C":
            print(f"Computer guessed your number in {game.attempts} tries!")
            break

if __name__ == "__main__":
    main()
