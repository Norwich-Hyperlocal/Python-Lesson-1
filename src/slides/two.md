

---
			
# What is a list?

...its a list!

	`myList = []` Initialize list
	
Thats starting an empty list, or you can assign variables to your list

	`myList = [1, 2, 3, 4, 7]`
	
And call them like

	`print myList[0]`
	
What should this print in the terminal?

	`1`
	
Math time!

You can do the following in python

	`* (start) for times`
	`/ (back slash) for divides`
	`+ (plus) for plus`
	`- (minus) for minus`
	
So what does the following show

	`a = 5`
	`b = 2`
	`print a * b`
	
Correct!

	`10`
	
What does the following show

	`z = 100`
	`b = 4`
	`print z / b`
	
Correct

	`25`
	
What does the following show

	`a = "Hello"`
	`b = "World"`
	`print a + b`
	
Correct

	`Hello World`
	
What does the following show

	`a = "Hello"`
	`b = "World"`
	"print a * b`
	
Correct

	`Traceback (most recent call last):`
  	`File "<stdin>", line 1, in <module>`
	`TypeError: can't multiply sequence by non-int of type 'str'`
	

---

# Conditions

We can evaluate variables, by checking variables against some expressions we can return true or false.

So what does the following equal

	`x = 2`
	`print x == 2`
	
Huh?
	
	`True`
	
So what does the following show

	`x = 2`
	`print x == 3`
	
Correct

	`False`
	
What does the following show

	`x = 2`
	`print x < 3`
	
Correct 

	`True`
	
What does the following show

	`x = 2`
	`if x == 2:`
	`	print "it does"`
	
Correct

	`it does`
	
How about this

	`g = "Hello"`
	`if g != "World":`
	`	pring "it does not"
	
Correct

	`it does not`
	
Loops

Loops are a sequence of instructions that are repeated until a condition is reached.

So what does this do? remember lists anyone?

	`myList = [1, 2, 3, 4, 5]`
	`for item in myList:`
	`	print item`
	
Correct!

	`1`
	`2`
	`3`
	`4`
	`5`
	
How about this

	`count = 1`
	`while count < 5`
	`	print count`
	`	count = count + 1`
	
Correct

	`1`
	`2`
	`3`
	`4`
	`5`
			
			Functions!

Ok so functions are sets of instructions that are can be called any time in your program.

So what does the following do?

	`def my_function():`
	`	print "Hello World"
	
Correct

NOTHING!

What does this do?

	`def my_function():`
	`	print "Hello World"`
	``
	`my_function()`
	
Correct

	`Hello World`
	
How about this

	`a = 2`
	`def my_function(b):`
	`	print b * 5`
	``
	`my_function(a)`
	
Correct

	`10`