# Calculator Project - Assignment 1

A comprehensive exploration of Python programming concepts through multiple calculator implementations.

---

## Common Programming Concepts Used Throughout

1. **Functions**: Reusable code blocks for separation of concerns
2. **Try-Except Blocks**: Error handling for invalid numeric input
3. **While Loops**: Persistent input validation and repeated operations
4. **Control Flow (If-Elif-Else)**: Routes logic based on user choice
5. **Type Conversion**: `float()` converts string input to numeric values
6. **Division by Zero Handling**: Checks if divisor is zero before division
7. **String Formatting (F-strings)**: Clean output with embedded variables

---

## Key Programming Concepts Used

### 1. **Try-Except Blocks (Error Handling)**
```python
try:
    return float(input(prompt))
except ValueError:
    print("Enter a valid number.")
```
Catches `ValueError` when invalid input is provided, prevents crashes, enables graceful recovery.

### 2. **Division by Zero Handling**
```python
if b == 0:
    return "Undefined \nMessage: Division by '0' is not possible"
return round(a / b, 2)
```
Guard clause pattern: checks divisor before division, returns meaningful error message.

### 3. **While Loops**
```python
while True:
    if exit_condition:
        break
```
Enables repeated operations until user chooses to exit.

### 4. **Class Concept (OOP)**
```python
class Calculator:
    def add(self, a, b):
        return a + b
```
Encapsulates related functionality, improves organization and reusability.

### 5. **Import Concept**
```python
import UDFs.operations as ops          # Import with alias
from UDFs import user_inputs           # Direct import
```
Enables code reuse, promotes modularity, reduces duplication.

---

## File Descriptions

### 1. **simple_calculator.py**
Basic procedural implementation - all code in one file.

**Unique Aspects:** Linear execution - takes two numbers and displays all four operations at once.

---

### 2. **menu_based_calculator.py**
Interactive menu-driven calculator.

**Unique Aspects:** User selects operation via menu, can perform multiple calculations without restarting, implements menu loop with exit option.

---

### 3. **calculator_class.py**
Object-oriented implementation.

**Unique Aspects:** 
- Uses `Calculator` class with methods for each operation
- Encapsulates functionality within a class
- Creates instance and calls methods: `calculator = Calculator()` → `calculator.run()`

---

### 4. **calculator_using_import.py**
Modular implementation using custom package.

**Unique Aspects:**
- **Imports & Modules**: Imports functions from separate files
- **Package Structure**: Uses `UDFs/` package with organized modules:
  - `operations.py`: All arithmetic operations
  - `user_inputs.py`: Input handling and validation
  - `__init__.py`: Package initialization
- **Namespace Management**: Uses aliases (`ops`) to avoid name conflicts
- Demonstrates clean separation of concerns

---

## Supporting Modules (UDFs Package)

### **UDFs/operations.py**
Contains functions: `add()`, `subtract()`, `multiply()`, `divide()` (with zero-check and rounding).

### **UDFs/user_inputs.py**
Contains functions: `get_number_input()` (validates input), `inputs()` (gets two numbers).

---

## How to Run

```bash
python simple_calculator.py
python menu_based_calculator.py
python calculator_class.py
python calculator_using_import.py
```

