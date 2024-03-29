---
name: Identifying a problem with your Connection
category: configuring-and-installation
layout: help_topic
---
If you think you are lagging more than you should be, please follow these steps.

Go to Windows start button, choose Run and type cmd.exe into the box provided then click OK. It will open a Windows command prompt.

Next type:

**tracert landsofhope.com**

Followed by the ENTER key on your keyboard.

A trace will then be run from your PC to our game server, it may take as much as 20 - 30 seconds to complete, it is important you run this trace during a period of "lag" and not when things are running fine (although sometimes comparing the two can be interesting).

You should then email the results of the trace to [support@landsofhope.com](mailto:support@landsofhope.com) to see if there is anything obvious in your trace causing the problem.

Typically if any steps (before about step 18) have a lot of \* symbols in the response times this would indicate a problem or if MS response times for several steps are greater than 250 or 500ms that would indicate a problem.