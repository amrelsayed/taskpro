## Project Setup

**First:**
You need to clone this repo by running this command `git clone https://github.com/amrelsayed/taskpro.git`

**Second:**
You can setup the project with 2 easy ways

# First Way

By using Composer, you have to have php, and composer installed locally, npm as well
And MySql if you want to use it or you can just juse sqlite database.

You can run `composer install` to install php packages
`npm install` for node packages

Then copy .env.example and update it with your own settings `cp .env.example .env`

You need to run migrations with optional seeding data `php artisan migrate --seed`

And finally run `php artisan serve`

You can use thise seeded user info to be able to quickly login:

**Email:** admin@admin.com
**Password:** 12345678

# Second Way

By using Docker

You can run `docker-compose up`

Than run the previous commands prefixed with `./vendor/bin/sail `
