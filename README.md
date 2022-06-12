# Tiny House

TinyHouse is a home-sharing app built for a full-stack React Masterclass

## Features

- Sign-in with their Google account information.
- Search for listings in various different locations in the world.
- See specific details about listings.
- Book listings for a period of time.
- Connect their Stripe account to be allowed to create listings (i.e. be a host in TinyHouse) and receive payments from
  other users.
- Create (i.e. host) listings of their own.
- See a history of the listings they've created, the bookings they've made, and the bookings made to their own listings.
- See a history of listings created by other users

### Sign-in with Google

Users will be able to sign-in to the TinyHouse application through Google Sign-In by providing their Google account
information.

![Google auth interface](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-login.png)

When a user attempts to sign in with Google Sign-In, they'll be prompted to provide their Google account information and
when successful, will be directed to the TinyHouse application in the logged-in state.

When logged-in, users are able to book listings in the TinyHouse application.

### Search for listings in various different locations in the world

Users are to be able to search for listings in practically any part of the world. To search for listings, users can use
the search input available in the homepage or in the app header menu.

![Search interface in app](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-search-inputs.png)

When a search is made, users are then directed to a listings page where they're able to survey all the listings that
have been created for a certain location.

![Search result by Los Angeles](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-listings.png)

### See listing details

When a user is to select a listing from a list of listings presented to them, specific details about the listing is to
be shown to the user consisting of but not limited to the listing's description, title, image, address, and the host of
the listing.

![Listing details](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-listing.png)

### Book listings for a period of time

In the overview for a specific listing, users are able to request a listing is to be booked for a certain period of
time.

![Booking listing with date validation](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-confirm-booking.png)

### Connect with Stripe

If a user is interested in hosting and/or creating listings within TinyHouse, they'll first need to connect their Stripe
account which will allow them to receive payments from other users. A user will be to connect their Stripe account from
their user profile section in the user page.

![Stripe](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-connect-stripe.png)

### Create (i.e. host) listings

When signed-in to the application and connected with Stripe, users will be able to create new listings. This is to be
done in the host page where users are required to provide all valid information for new listings such as but not limited
to the listing title, image, address, and price.

![Interface of creating listing](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-host-listing.png)

### See history of listings created and bookings made

When signed in and located within the user page of one's own account, the user will be able to see a history of all the
listings they've created and the bookings they've made for other listings.

![History of own listings](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-user-page.png)

### See history of listings created by other users

When visiting the user page of other users in the TinyHouse application, a user is able to see the listings created by
other users.

![History of some user](https://d2uusema5elisf.cloudfront.net/courses/tinyhouse-react-masterclass-part-2/module_0/lesson_0.2/public/assets/tinyhouse-other-user-listings.png)
