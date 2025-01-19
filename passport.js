// This is the authentication page 

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: 'YOUR_GOOGLE_CLIENT_ID',
            clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
            callbackURL: 'http:localhost:5000/auth/google/callback',
            
        },
        (accessToken , refreshToken , profile , done)=>{
            // Save user info to the database or session
            done(null , profile)
        }
    )
);

// Serialize user
passport.serializeUser((user,done)=>{
    done(null,user);

});
passport.deserializeUser((user , done)=>{
    done(null, user);
});