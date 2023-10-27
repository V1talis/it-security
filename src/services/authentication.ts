import { UserManager } from "oidc-client-ts";

const config = {
  authority: 'https://your-auth0-domain.auth0.com',
  client_id: 'your-client-id',
  redirect_uri: 'http://localhost:3000/callback', // Your redirect URI
  response_type: 'code',
  scope: 'openid profile email',
  client_secret: 'your-client-secret', // Keep this secret on the server-side
};

const userManager = new UserManager(config); 

userManager.signinRedirectCallback().then(() => {
    // Authentication successful, you can now make authenticated API calls.
  });