---
---
DNS stands for Domain Name Services (or sometimes Server) it is the term given to the software/hardware that links friendly domain names such as microsoft.com to the actual server addresses 100.100.100.100, after all remembering a name is a lot easier than a chain of numbers.

Generally there are a lot of DNS servers on the internet and when your computer requests a web site it looks up the name in one of these DNS services and then knows the address to use to connect to it, unfortunately as the Internet has grown some DNS servers either can not keep up with the changes or simply have a moment of hiccupidness where they associate the wrong address with a name and this may lead to some websites not being accessible to a few people while most still can use it. Usually such a problem will correct itself the next time the DNS server updates but this is not always the case.

Luckily if you have Windows operating system there is a way to tell the computer to always use a specific address when entering a website name, so if you find yourself not being able to access the game through the forlornonline.com domain name (via FES) while Forlorngames.com or Fho2.com still work it may simply be that your DNS is out of alignment and needs a tune up!

The work around I mentioned above is as follows:

1.  Go to Start > Run.
2.  Type in C:\\windows\\system32\\drivers\\etc and press OK.
3.  Open hosts (this is a file in the folder) in Notepad.
4.  Press Ctrl + End to move the cursor to the end of the file (should be a new line).
5.  Enter the following 74.86.102.82 followed by the tab key and then forlornonline.com so the line should look like the following:
    *   74.86.102.82                   forlornonline.com
6.  Save and close the file.
7.  Close all open browser windows then connect to forlornonline.com again.

This should fix your DNS problem, of course if we ever change servers the address mentioned above will likely change again so you would have to alter this hosts file or take the line out and rely on your DNS working normally.