import sys
import os

files = os.listdir('.')

result = '['

for file in files:
	if 'data' in file:
		result+=open(file).read()
		result += ', '
result = result[:-2] + ']'

f = open('all.json', 'w')
 
f.write(result)
print 'Done'