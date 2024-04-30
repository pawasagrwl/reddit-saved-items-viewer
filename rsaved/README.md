# RSaved (URL Redirector)

This Node.js application serves as a simple redirect server. It's configured to automatically redirect all incoming requests from its hosted URL to a predefined target URL, such as a GitHub Pages site. This setup is particularly useful for redirecting traffic from a custom domain hosted on services like Fly.io to your personal or project pages.

## Setup

### Prerequisites

- Node.js installed on your local machine.
- Access to a hosting service like Fly.io where you can deploy Node.js applications.

### Dependencies

The project relies on the Express framework for routing traffic and the dotenv package for managing environment variables. You can install these dependencies by running:

```bash
npm install express dotenv
```

### Environment Variables

Create a `.env` file in the root directory of your project with the following content:

```plaintext
PORT=3000              # Optional: default is 3000 if not specified
TARGET_URL=<your_target_url> # The URL where all traffic should be redirected
```

Replace `<your_target_url>` with the actual URL you wish to redirect traffic to, such as your GitHub Pages URL.

## Deployment

1. **Local Testing**: Run the server locally by executing `node server.js`. Ensure it redirects requests to your target URL correctly.
2. **Deploy to Fly.io**: Follow the instructions on Fly.io to deploy your Node.js application. Ensure you include the necessary environment variables in your deployment configuration.

## Usage

Once deployed, any traffic to your Fly.io domain will be redirected to the `TARGET_URL` specified in your environment variables. This is useful for SEO purposes or when migrating old URLs to new ones without breaking existing links.

## Example

Here’s what happens when a user visits your Fly.io domain:

1. The server receives the request.
2. The server redirects the user to the `TARGET_URL` defined in your `.env` file.
3. The user is seamlessly redirected to your specified target page, such as a GitHub Pages site.

## Note

This server is a simple redirect mechanism and does not handle other types of HTTP requests or serve static files. For a more complex setup, consider extending the functionality using additional Express middleware or other Node.js frameworks.