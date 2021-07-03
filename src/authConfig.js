// Config object to be passed to Msal on creation
export const msalConfig = {
    auth: {
        clientId: "d3ef52f8-7258-4624-a75d-57a77dd4f823",
        authority:
            "https://dgweb.b2clogin.com/dgweb.onmicrosoft.com/B2C_1_signInAndSignUp",
        knownAuthorities: ["dgweb.b2clogin.com"],
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000",
    },
};

// Scopes you add here will be prompted for consent during login
export const loginRequest = {
    scopes: []
};
