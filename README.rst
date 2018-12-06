==========
Eat at DCU
==========

This is a web application_ for checking availability in DCU’s restaurants and cafes

Django MarkdownX
================
I didn't use the classis markdown, I used Django MarkdownX. It is a comprehensive Markdown_ plugin built for Django_, the renowned high-level Python web framework, with flexibility, extensibility, and ease-of-use at its core.

Motivation
==========
This project was realized as part of my Erasmus exchange with DCU_

Requirements
============
|Supported_versions_of_Python| |Supported_versions_of_Django| |License|

Installation
============
Donwload the project or clone it with ``git clone``

To install django run the following coommand : 

``pip install django==1.11``

Before running the application we need to create the needed DB tables (from the ``src/ca377`` folder) :

``python3 manage.py makemigrations eatatdcu``

``python3 manage.py migrate``

The next step is to populate the database by running the following command :

``python3 manage.py shell``

And inside the shell, run the following command :

``import load_db_data``

Note that these scripts load data from csv files in the data folder.

How to use it
=============

Go to the folder ``src/ca377``

And run the following command to run the server localy: ``python3 manage.py runserver``

The server is running at this adress : ``http://127.0.0.1:8000/eatatdcu/``

API Reference
=============

Key features
============

* Raw editing.
* Live preview.
* Drag & drop image uploads (automatically stored in the designated location in the *Media* directory).
* Customizable image insertion tag.
* Definition of maximum size for an image.
* Definition of acceptable image formats (PNG, JPEG, SVG).
* Image manipulations (compression, size reduction, cropping, upscaling).
* Pre- and post- text modification.
* Easy template customization, layout modification, and personalization.
* Multiple editors per page.
* Django Admin support.

Preview
=======

.. image:: https://github.com/neutronX/django-markdownx/raw/master/django-markdownx-preview.gif?raw=true
   :target: https://github.com/neutronX/django-markdownx
   :align: center
   :alt: django-markdownx preview

*(using Bootstrap for layout and styling)*

.. _application: http://ledevec2.pythonanywhere.com/eatatdcu/
.. _Markdown: https://en.wikipedia.org/wiki/Markdown
.. _Django: https://www.djangoproject.com 
.. _DCU: https://dcu.ie

.. _application: http://ledevec2.pythonanywhere.com/eatatdcu/

.. |Supported_versions_of_Python| image:: https://img.shields.io/badge/python-3.6-green.svg
.. |Supported_versions_of_Django| image:: https://img.shields.io/badge/django-1.11-green.svg
.. |License| image:: https://img.shields.io/pypi/l/django-markdownx.svg
