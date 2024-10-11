MyLibrary Application Overview

Features

The MyLibrary application is a .NET-based backend service combined with an Angular-based frontend, designed for managing a personal library of books. It allows users to register, log in, and manage their book collections. Key functionalities include:

User Account Management

Registration: Users can create accounts without email confirmation, ensuring a seamless onboarding experience. Login: Secure authentication using JWT tokens, which are generated upon successful login and can be validated for session management. Account Deletion: Users can delete their accounts securely.

Book Management

Add Book: Users can add new books to their library, including metadata such as title, author, ISBN, published year, genre, and status. Users can also upload book cover images with validation for file type and size. Retrieve Books: Users can view their entire collection of books, filtered by their user ID. Update Book: Users can modify existing book entries while retaining current information. Delete Book: Users can remove books from their collection.

User Profile Management

Get User Details: Users can access their profile information: username and email.

Security Features

Utilizes ASP.NET Core Identity for robust user authentication and authorization. Implements logging for tracking user activities and debugging. Ensures secure handling of JWT tokens for authenticated routes.

Structure Controllers 

The application includes various controllers
AccountController: Handles user login, registration, and token validation. 
UserController: Manages user account details and deletion. 
LibraryController: Facilitates book operations, including adding, retrieving, and deleting books.

Models 

The application uses models such as:
ApplicationUser: Extends IdentityUser to represent users in the application. 
Book: Represents a book in the user's library with properties like title, author, ISBN, and cover image.

Services

Utilizes services for user management and database operations, ensuring separation of concerns and maintainability.

Pages Landing Page (LandingPageComponent)

Purpose: Serves as the entry point for users, providing login and registration forms. Functionality: Contains reactive forms for user login and registration. Handles form submissions and validations. Uses AuthService for authentication processes. Redirects users to the home-page upon successful login or registration. Provides visual feedback on form submission success or failure. Uses event listeners to toggle between sign-in and sign-up forms.

Forgot Password Page (ForgotPasswordComponent)

Purpose: Enables users to request a password reset link. Functionality: Contains a form for users to enter their email address. Uses AuthService to send a reset password email. Displays messages to the user regarding the success or failure of the request. Provides a navigation option back to the login page.

Reset Password Page (ResetPasswordComponent)

Purpose: Allows users to reset their password using a token sent via email. Functionality: Retrieves the token from the URL's query parameters. Validates the new password and its confirmation. Submits the new password to the backend via PasswordService. Provides user feedback based on success or failure of the password reset process.

Edit Book Page (EditBookComponent)

Purpose: Facilitates the editing of book details. Functionality: Fetches the book ID from the route parameters and converts it to uppercase. Populates the form with existing book details retrieved from HomeService. Validates form inputs and submits the updated book information. Uses reactive forms for input handling and validation. Provides user feedback on form submission success or error, and navigates to the home page upon successful update. Allows users to upload an image for the book, with a default image path as fallback.

Component Interaction

The Landing Page is linked to authentication functionalities via AuthService, allowing users to register and log in. The Reset Password Page interacts with the Forgot Password Page by allowing users to request a reset link and then reset their password using the link received via email. The Edit Book Page pulls data from the backend through HomeService, enabling users to modify existing book entries. Each component utilizes Angular's reactive forms and validation techniques to ensure a robust user experience. Conclusion

Technology Stack Backend: .NET 8 with ASP.NET Core MVC and Entity Framework Core for data access. 
Authentication: ASP.NET Core Identity with JWT for secure user authentication. 
Database: Entity Framework Core for database interaction, leveraging a SQL database for storing user and book information.