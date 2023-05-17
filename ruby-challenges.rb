# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudo Code
# I created a method called even_or_odd that will take in a number as a parameter.
# Using a Ternary Operater we create an if else statement telling the program that if the number is not divisible by two then the number is odd, and if it is divisible by two it is even. 
# Using string interpolation I referenced the number into the string so it produces expected output of saying number is odd or even.  


def even_or_odd (number)
    number % 2 == 0 ? "#{number} is Even" : "#{number} is odd"
end    

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

p even_or_odd(reposts1)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudo Code: created a method that takes in a string and removes all vowels
# Method: I created a method that takes the string as an imput
# Delete: using the delete method I told it to remove all vowels including the uppercase vowels
# Returns a string with the vowels removed.

def delete_vowel (string)
    string.delete("aeiouAEIOU")
end
beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
p delete_vowel(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

#Pseudo Code: create a methos that checks for palindrome
# Method: creating a method called pal_tester I check for palindromes
# Usinf the downcase method to make sure the program can examine all characters at the same starting point, I use a ternary operator to check if the downcase reserved string is equal to itself or not.
# Using string interpolation to produce expected output we tell the user whether the string is a palindrome

def pal_tester (string)
    string.downcase == string.downcase.reverse ? "#{string} is a palindrome" : "#{string} is not a palindrome"
end    


palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p pal_tester(palindrome_test_case2)