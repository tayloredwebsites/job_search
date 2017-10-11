# 'List Jobs Sought' CRUD example website

## Why I wrote this site:

* as a realistic example to teach myself react.js
* to develop a versioned api in the backend
* to demonstrate deployment to localhost and/or heroku

## what this code demonstrates:

* My current best practices for React 16:
    * Use of ES6 classes with constructors.
    * Use of JSX for clean readable HTML templates.
    * State kept at highest appropriate level (main or component).
    * Use of axios for back end AJAX/XMLHttpRequest calls.
    * Using events instead of ref attributes for cleaner code.
    * Organized use of bind.
* Use of Rails 5 as a backend.
    * Use of webpacker to provide standard node environment built into site.
* My approaches to having maintainable documentation:
    * comments on major pieces of code, so documentation is next to the code.
    * Providing installation instruction as part of standard documentation.
    * Single place (this README.md) for Overview and installation instructions.


## What this example site does.
This website is designed to keep track of jobs applied for (and the recruiters that helped you find them). This is important, to ensure that you are not submitted to the same company by two different recruiters.

Future enhancements:

* tests ! (will learn about how to test react.js next).
* will consider adding additional information about submission, such as date sent, job description, version of resume, additional materials sent, etc.
* May include Authentication with three roles, admin, recruiter, seeker. This could allow a recruiting firm to let their recruitees use this, while at the same time see what their recruitees have applied for.
* Will probably deploy on a server, such as Heroku for demonstration (and possible usage).

## Technology being used.

This site has been developed to teach myself React.js.  I wanted to have a backend to have experience integrating react.js with a backend.  I chose Rails 5 because I have a lot of experience with Rails.  I intend to also integrate it with a Node / PostgreSQL backend as well.

After looking into the Elm Language, I am coming to value sane management of state.  I am working to create my own best practices for state management, including when to single source and when to scope.

### React 16

I have chosen to use the latest version of React, so that I will not only be up to date, but also to take advantage of the newer ES6 features.  I have used the following technical aspects of react in this code: 

* the new ES6 classes and their constructors
* block scoped let statement
* jsx templating
* components (of course)
* states and properties (of course)


### Rails 5.1

I wanted to be able to store the jobs in some kind of database through a backend.  I chose to create a simple rails 5 backend with a Job model and Jobs controller.


### Webpacker 3

Wnen I initially was developing this site in Rails 5, I started without including webpacker.  React was available to me, but it was provided by the Rails Asset Pipeline.  I decided that I wanted to keep the configuration as standard as possible, so webpacker was included in the configuration, avoiding the asset pipeline.


## Installation instructions for localhost:
- note: $ is the command prompt.

* clone this repo to local computer
    * $ git clone git@github.com:tayloredwebsites/job_search.git
    * $ cd job_search/
* Note: Requires a version of ruby that can handle Rails 5.1.4. (I am using 2.3.5p376 using rbenv)
    * $ ruby -v
* Note: Requires PostgreSQL - for compatibility with Heroku deployment.
* Install Postgres on Mac:
    * download postgres.app and move into Application directory.
    * $ gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
* Note: To set up postgres path for command line tools on Mac.
* Edit ~/.bash_profile and add the following to the end:
    * export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/latest/bin
* Set up database in Postgres using command line:
    * create database job_search;
    * \list (to list all databases to confirm created).
    * create user job_search_ror with password 'password';
    * \du (to list users to confirm creation).
    * grant all privileges on database job_search to job_search_ror;
    * \list (to confirm jobsearch has job_search_ror in access privileges).
* rails setup:
    * $ bundle install
    * $ bin/rake db:migrate
* Install webpack in this new repo:
    * $ rails webpacker:install
    * $ rails webpacker:install:react
* Bring up rails on localhost:
    * $ bin/rails server

## Deploy to Heroku:

* Note: Requires Heroku toolbelt see: https://devcenter.heroku.com/articles/heroku-cli
* $ heroku create
* $ git push heroku master
* $ git remote -v (to confirm remote name)
* Note: to visit site, use url of format:
    * https://{remote name here}.herokuapp.com/
