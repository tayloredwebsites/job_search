# 'List Jobs Sought' CRUD website
### using React 16 on Rails 5 with Webpacker 3

## Service this site provides.
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


## Installation instructions for localhost (Hope this helps - worked for me).

* clone this repo to local computer
    * $ git clone git@github.com:tayloredwebsites/job_search.git
    * $ cd job_search/
* (Requires a version of ruby that can handle Rails 5.1.4.)
    * $ ruby -v
* $ (standard rails setup)
    * $ bundle install --without production
    * $ cp config/database_sample.yml  config/database.yml
    * $ bin/rake db:migrate
* (Optionally load any seed data into the database
    * $ cp db/seeds_sample.rb db/seeds.rb
    * (edit db/seeds.rb for any initial jobs)
    * $ bin/rake db:seed
* edit secrets.yml and provide new secret
	* $ cp config/secrets_sample.yml config/secrets.yml
	* ( edit secrets.yml)
	* ( provide new secret e.g. use https://www.randomlists.com/string)
* (install webpack in this new repo - I needed to do all of these steps)
    * $ npm install --save-dev webpack
    * $ rails webpacker:install
    * $ rails webpacker:install:react
* $ bin/rails server
