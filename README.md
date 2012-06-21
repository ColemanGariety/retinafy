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

Firstly, if not already, include the jQuery plugin in the <head> section of your site:

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>

Now below that, include a copy of retina.min.js below jQuery

<head>
  <script src