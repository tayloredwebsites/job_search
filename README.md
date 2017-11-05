# 'List Jobs Sought' CRUD example website

## This code is running on heroku at:
<https://pure-coast-59848.herokuapp.com/>

## Why I wrote this site:

* as a realistic example to teach myself react.js
* to develop a versioned api in the backend
* to demonstrate deployment to localhost and/or heroku

## what this code demonstrates:

* That the Rails 5.1 Webpacker configuration is not asynchronous.  Note the page only displays once the list of jobs returns even though I am using axios asynchronous ajax calls.  Note the last commit to the project added some delays to confirm that this configuration is synchronous.

* Not sure of the benefits of Rails5.1 webpacker, except if there is react code that needs to be integrated with an existing standard Rails jquery front end.

* My initial first attempt at React 16:
    * Use of ES6 classes with constructors.
    * Use of JSX for clean readable HTML templates.
    * State kept at highest appropriate level (main or component).
    * Use of axios for back end AJAX/XMLHttpRequest calls (which should be asynchronous).
    * Using events instead of ref attributes for cleaner code.
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


## Installation instructions for localhost:
- note: $ is the command prompt.

* download this repo as zip file and create the repo on local machine
    * $ https://github.com/tayloredwebsites/job_search/archive/master.zip
    * unzip master.zip into your chosen directory
    * $ cd job_search-master
* Note: Requires a version of ruby that can handle Rails 5.1.4. (I am using 2.3.5p376 using rbenv)
    * $ ruby -v
* Note: Requires PostgreSQL - for compatibility with Heroku deployment.
* Install Postgres on Mac (with command line tools):
    * download postgres.app and move into Application directory.
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
    * $ gem install pg -- --with-pg-config=/Applications/Postgres.app/Contents/Versions/latest/bin/pg_config
    * $ bundle install
    * $ bin/rake db:migrate
* Install webpack in this new repo (overwrite as needed):
    * $ rails webpacker:install
    * $ rails webpacker:install:react
* Bring up site on localhost (in separate terminal windows):
    * $ bin/webpack-dev-server
    * $ bin/rails server

## Deploy to Heroku:

* Note: Requires Heroku toolbelt see: https://devcenter.heroku.com/articles/heroku-cli
* $ heroku create
* $ git push heroku master
* $ heroku run rake db:migrate
* $ git remote -v (to confirm remote name)
* Note: to visit site, use url of format:
    * https://{remote name here}.herokuapp.com/
* to check Heroku logs:
    * heroku logs --tail
