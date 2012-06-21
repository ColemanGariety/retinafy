Retinafy
=========

Retinafy is a lightweight plugin that allows you to easily employ high-resolution graphics in your next web project.


How does it work?
==================

When you install Retinafy and tell it what section of your site to add high resolution graphics to, the plugin will
scour that section for images that aren't already retina optimized. When it finds them, it checks to see if there is
a high resolution version of that image on your server, if there is, it automatically switches out the file.


What does Retinafy have over other retina graphic replacement scripts?
======================================================================

There are a number of retina graphic enabling scripts out there, but none allow you to switch out background images
of elements, they only switch out image files. In addition, Retinafy is a very lightweight plugin, weighing in at a
mere 887 bytes (4kb), so loading pages with this plugin stays blazing fast.

How do I use it?
================

1. Include a copy of jQuery on the page and then retinafy.min.js below it.

  `<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>`
	`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>`

2. Now in a script tag, tell Retinafy where you want to apply high resolution graphics to your site. This feature allows you to easily re-apply Retinafy even after images change on yoru site.

	`<script>
		$('html').retinafy();
	</script>`

The above code will apply high resolution graphics to the entire page. All you need to do is upload high resolution file to the server.

3. So now I need some retina graphic files to switch out. Let's say I have an image…

	`<img src="my-great-image.jpg" />`

it's inside of my html somewhere. I'll upload a version of 'my-great-image.jpg' that is twice the number of pixels to my server in the same directory as the original file.

	`my-great-image.jpg`<br>
	`my-great-image@2x.jpg`

Retinafy will automatically detect if the user is on a retina display, and switch out my-great-image for my-great-image@2x!

Retinafy