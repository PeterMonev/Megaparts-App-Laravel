# Megaparts App

Megaparts application using Laravel

To get started with the project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/PeterMonev/Megaparts-App-Laravel
    ```

2. Install PHP dependencies using Composer:

```
composer install
```

3. Rename the .env.example file to .env and configure your database settings:

-   You can find the schema of the database in the database.sql file located in the database directory. Import this SQL file into your database using a tool like phpMyAdmin.

4. Migrate the database:

```
php artisan migrate
```

5. Start the project

```
php artisan serve
npm run dev
```

# User Roles and Access Permissions

1. **Guest**: Guest have access to the frontend of the application.

2. **User**: Users can login and register an have access to the frontend of the application and can view products details, add them to the shopping cart and remove product from cart.

-   User Account is `email: marry@abv.bg` `password: 12345678` or create your new account.

3. **Admin**: Аdmin has access to the admin panel, which provides ability to create, delete and modify both products and users.

-   Admin Account is `email: peter@abv.bg` `password: 12345678`

# Sending Email and Verify Registration Emails

-   You can send an email to all users via command line.

```
php artisan email:sendtoall
```

-   Registered users receive an email that they must verify in order to access a cart with products and be able to add items to it.
