#The Internet and Networking

A brief history of the Internet - from the early beginnings to 1990. There's been written a lot about the early days of the Internet and there are a number of good documentaries. I found this 8 min clip very instructive and fun, enjoy:

- https://www.youtube.com/watch?v=9hIQjrMHTv4

OK, the internet is a worldwide network of connected computers. Machines can connect to each other and exchange information.

Let's look at the main components of a computer network

**Server**

  * machine on the internet in an 'always on' state
  * represent a 'service' of some type (like facebook or google search)
  * some servers just route traffic
  * server (software): process responsible for handling requests
  * server (hardware): machine which runs server software
    
**Application**

A useful system of services (email, chat, ssh, web), we are mainly concerned with web applications on the **World Wide Web**

**Client**

A program that you use to run applications and access services, usually a web browser. 

**We as "full stack" web developers are concerned with both, the Client application running in the browser and the Service application hosted on a Server.

	
##World Wide Web

The World Wide Web is a collection of documents, made up of HTML, that lives on servers of the Internet. For now, I'm not going to talk about the structure of HTML pages: syntax / forms / css / meta data. That's a for another day.

HTML is the basis for almost every web page, it can contain text, images, video - html is what glues everything together - links between the pages makes the web *web-like*. 

The World Wide Web emerged in the early nineties. The first web page was build at CERN (European Organization for Nuclear Research) by Time Berners Lee, he is credited with the invention of the web - he implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet. So here's a pic of the first web server (note the sticker on the box):

	http://en.wikipedia.org/wiki/File:First_Web_Server.jpg 

And here is the first ever web page:

	http://info.cern.ch/hypertext/WWW/TheProject.html**

Now let's talk about the major pieces of the web:

###URLs

A URL is a path to a specific server and a certain document on that server. We are all familiar with URLs.

The main parts of an URL are:

- protocol  (http means the web .. there are others, like ftp)
- host (name of the server, translated to an IP address)
- path (document that that is being requested)
- query params (aka GET parameters) - extra info that the server gets. 

Example:

	http://www.chase.com/account/history?num=112122&page=3

	PROTOCOL    HOST          PATH        QUERY PARAMETERS

Another piece of the URL is the port. A port is a specific door in the server. By default, the web port is 80 - other ports are used for other services: email, file transfer, more … The port number is tagged on to the server name, separated with ':', for example *www.example.com:8080*

#Protocols

A computer communication protocol is a description of the rules computers must follow to communicate with each other. The main protocol on the Internet is TCP/IP

##TCP/IP

TCP/IP is the communication protocol for communication between computers on the Internet.  

It stands for *Transmission Control Protocol / Internet Protocol*.  

TCP/IP defines how computers should be connected to the Internet, and how data should be transmitted between them. Web browsers, for example, use TCP/IP to communicate with Web servers. TCP takes care of:

- **Packet Switching:** *messages are divided into packets before they are sent. Each packet is then transmitted individually and can even follow different routes to its destination. Once all the packets forming a message arrive at the destination, they are recompiled into the original message*
	
- **Guaranteed Delivery:** *All bytes received will be identical with bytes sent and in the correct order*

- **Routing:** *Forward packets to the right desitination through a network*

Each server on the internet has an IP address that uniquely identifies the server in the network.

Find out your ip address (Mac only):

	ipconfig getifaddr en1

TCP/IP is the basis of all internet communication: web, phone, email, video conferencing, movie streaming - on the lowest level, everything is handled by TCP/IP.  

#### ping, traceroute & netcat

**traceroute and ping**

Is server alive and follow the path of a client/server request through the Internet:

	ping www.whitehouse.gov 

	traceroute www.whitehouse.gov
	
	or how about:
	
	traceroute 216.81.59.173 

**netcat**

*man nc* to see what it does. Let's chat via TCP! 

Get into pairs, one person is the Server, the other person is the Client

Server, find out your IP address and share it with Client. In your shell, start listening for data:

	>  nc -l 3333

Client, in your shell, connect to Server using its IP address:

	> nc <server ip address> 3333

Now start typing … packets of information are exchanged between client and server using the tcp protocol.



## Hypertext Transfer Protocol

HTTP is a layer above TCP. 

It specifically handles the exchange of documents. In our world that's HTML documents, i.e. web pages.

**HTTP REQUEST and RESPONSE**

So by typing in a url and hitting GO in your browser, what happens?

*Diagram*

In order to get a document, a browser needs to send a request to a server - that's an HTTP request. Using TCP, the request is routed through the internet to the server handling the request. The server executes a program and responds with an HTTP response, usually the web page that was requested.

There are different types of HTTP Requests - they are expressed as verbs - quick overview: We will get into more detail once we talk about APIs and how to consume services on the Internet.

* `GET` - request a document/resource, the most common request type
* `POST` - create a resource on the server, for example creating creating a blog entry
* `PUT` OR `PATCH` - update a resource, for example updating an existing blog posting
* `DELETE` - destroy a resource, for example deleting a todo list item

more info: http://www.tutorialspoint.com/http/http_methods.htm

HTTP responses have status codes, You may know:

- 404 - page not found
- 500 - internal server error
- 200 - OK, all is good

Here's a list of all status codes: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes

**HTTP requests/responses have a header and a body**

Headers are made up of key/value pairs and contain meta data about the request/response. Example:

Example of REQUEST HEADER:

	GET /hello.htm HTTP/1.1
	User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
	Host: www.tutorialspoint.com
	Accept-Language: en-us
	Accept-Encoding: gzip, deflate
	Connection: Keep-Alive


Example of RESPONSE HEADER: 

	HTTP/1.1 200 OK
	Date: Mon, 27 Jul 2009 12:28:53 GMT
	Server: Apache/2.2.14 (Win32)
	Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
	ETag: "34aa387-d-1568eb00"
	Vary: Authorization,Accept
	Accept-Ranges: bytes
	Content-Length: 88
	Content-Type: text/html

**The BODY of the response contains the actual document, usually that's HTML**

So the purpose of a web server is to respond to HTTP requests. And we are going to learn how to write applications running on web servers that respond to HTTP requests … web applications!


### HTTP tools: 


####Telnet

In your shell:

	telnet www.google.com 80
	GET /intl/en/about/

Talk http to google. Request google.com 'about' page, see what you get back. Inspect the HTTP Response header on top.

####curl

In your shell:

	curl www.reddit.com


###[Lab](https://github.com/wdi-sf-fall/notes/blob/master/week_01_fundamentals/day_1_web_basics/dusk_web_intro/lab.md)
