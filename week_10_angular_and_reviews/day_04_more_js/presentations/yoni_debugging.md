#Debugging: Yoni Binstock and Tim Gray


So everyone know’s about `console log()`, so we’ll skip that part… Let's talk about debugging front-end Javascript in using Chrome's dev tools.

##The Sources Panel
The Sources panel lets you see all the scripts that are part of the inspected page. Standard controls to pause, resume, and step through code are provided below the panel selection icons.

##Breakpoints
A breakpoint is an intentional stopping or pausing place in a script. Use breakpoints in DevTools to debug JavaScript code, DOM updates, and network calls.

*Note: It may not be desirable to set breakpoints from the DevTools interface. When debugging front end JS, should you wish to launch the debugger from your code, you may use the `debugger` keyword to achieve this.*

To resume code execution, click the Continue  button or use the F8 keyboard shortcut in the DevTools window.

While a script is paused, you can interact with the Watch Expressions, Call Stack, andScope Variables panels in the right-hand side bar.The Call Stack panel displays the complete execution path that led to the point where code was paused

If you have trouble trying to read and debug minified JavaScript in the DevTools, by clicking on the curly brace  ("Pretty Print") icon in the bottom left corner, the JavaScript is transformed into a more human readable form.

[Reference](https://developer.chrome.com/extensions/tut_debugging)


##The Network Panel

Great to see if certain functions or calls are taking too long

You can see that you can add breakpoints in your javascript where the code will stop. You can also control-click to get the menu and set conditions that, if true, will stop your code.

When the code is stopped, you can interrogate any variable that is before the breakpoint to find out what its value is. Additionally you can type the name of variable into the “Watch Expressions” area on the right to see how the values change.


Once you have an item selected you can drill down into it to see the values it contains.

References

* [Console Docs](https://developer.chrome.com/devtools/docs/console)
* [Debugging Reference](https://developer.chrome.com/devtools/docs/javascript-debugging)
* [Video](https://www.youtube.com/watch?v=b9KifHCZ0QM)
* [Codeschool](http://discover-devtools.codeschool.com/chapters/3/challenges/1?locale=en)