import os
a=1
for i in os.listdir():
	os.rename(i,str(str(a)+'.png'))
	a+=1