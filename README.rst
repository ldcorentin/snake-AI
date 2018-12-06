==========
Eat at DCU
==========

This is a web application_ for checking availability in DCU’s restaurants and cafes.

Django MarkdownX
================
I didn't use the classis markdown, I used Django MarkdownX. It is a comprehensive Markdown_ plugin built for Django_, the renowned high-level Python web framework, with flexibility, extensibility, and ease-of-use at its core.

Motivation
==========
This project was realized as part of my Erasmus exchange with DCU_.

Requirements
============
|Supported_versions_of_Python| |Supported_versions_of_Django| |License|

Installation
============
Donwload the project or clone it with ``git clone``.

To install django run the following coommand ::

$ pip install django==1.11

Before running the application we need to create the needed DB tables (from the ``src/ca377`` folder) ::

$ python3 manage.py makemigrations eatatdcu

Then ::

$ python3 manage.py migrate

The next step is to populate the database by running the following command ::

$ python3 manage.py shell

And inside the shell, run the following command ::

>>> import load_db_data

Note that these scripts load data from csv files in the data folder.

How to use it
=============

Go to the folder ``src/ca377``.

And run the following command to run the server localy::

$ python3 manage.py runserver

The server is running at this adress : ``http://127.0.0.1:8000/eatatdcu/``.

API Reference
=============

We use an API to get our special informations about restaurants : http://jfoster.pythonanywhere.com/

Tests
=====
All tests are automated with the creation of a new database specifically designed for testing 

To run the tests localy you need to Go to the ``src/ca377`` folder.

And you need to run the following command ::

$ python3 manage.py test eatatdcu

Here is an exemple of how the database is created ::

        def part5_setup(self):
 
                # Sets up a test database - for testing part five 
           
                campus1 = Campus(1,'test campus')
                campus2 = Campus(2,'another test campus')
                campus3 = Campus(3,'yet another test campus')
                rest1 = Restaurant(1, 'test r1','student centre',1,time(hour=8),time(hour=17),750,0,1)
                rest2 = Restaurant(2, 'test r2','ballymun road',1,time(hour=9),time(hour=18),250,1,1)
                rest3 = Restaurant(3, 'test r3','in library',1,time(hour=10),time(hour=17),300,0,1)
                rest4 = Restaurant(4, 'test r4','beside entrance',3,time(hour=10),time(hour=16),200,1,0)
                campus1.save()
                campus2.save()
                campus3.save()
                rest1.save()
                rest2.save()
                rest3.save()
                rest4.save()
        
 And here is one exemple for two tests ::
 
 def test_rest_retrieval_case(self):
        # Test retrieval of restaurants for a campus (case-insensitive)
        self.part3_setup()
        response = self.client.get(reverse('eatatdcu:restaurants'),{'campus':'Test Campus'})
        self.assertEqual(response.status_code,200)
        self.assertContains(response,'r1')
        self.assertContains(response,'r2')
        self.assertContains(response,'r3')  
    def test_rest_empty_retrieval(self):
        # Test empty retrieval of restaurants for a campus
        self.part3_setup()
        response = self.client.get(reverse('eatatdcu:restaurants'),{'campus':'another test campus'})
        self.assertEqual(response.status_code,200)
        self.assertContains(response,'No restaurants found')
 


.. _application: http://ledevec2.pythonanywhere.com/eatatdcu/
.. _Markdown: https://en.wikipedia.org/wiki/Markdown
.. _Django: https://www.djangoproject.com 
.. _DCU: https://dcu.ie

.. _application: http://ledevec2.pythonanywhere.com/eatatdcu/

.. |Supported_versions_of_Python| image:: https://img.shields.io/badge/python-3.6-green.svg
.. |Supported_versions_of_Django| image:: https://img.shields.io/badge/django-1.11-green.svg
.. |License| image:: https://img.shields.io/pypi/l/django-markdownx.svg
