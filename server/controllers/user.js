import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

import User from "../models/user.js";
import validateSigninInput from "../validation/signin.js";
import validateSignupInput from "../validation/signup.js";
const client = new OAuth2Client(process.env.OAuth2Client_KEY);

export const signin = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateSigninInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email })
  .exec((error, user) => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const { _id, name, email } = user;

        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
          expiresIn: "10h",
        });
        res.status(200).json({
          token,
          result: {
            _id,
            name,
            email
          },
        });
      } else {
        return res.status(400).json({
          passwordIncorrect: "Password Incorrect!",
        });
      }
    } else {
      return res.status(400).json({
        emailNotFound: "Email not found",
      });
    }
  });
};

export const signup = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateSignupInput(req.body);
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

  User.findOne({ email: req.body.email })
  .exec((error, user) => {
      if(user) return res.status(400).json({
          email: 'Email already exists'
      });

      const {
          name, 
          email, 
          password,
          agreedTerms
      } = req.body;
      const newUser = new User({ 
          name, 
          email, 
          password,
          agreedTerms
      })
      
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json({
                  userCreated: 'User created successfully!'
              }))
              .catch(err => console.log(err));
          });
        });
      
  });
};

export const googlesignin = async (req, res) => {
  const { token } = req.body;

  client
    .verifyIdToken({ idToken: token, audience: process.env.OAuth2Client_KEY })
    .then((res) => {
      const { email_verified, name, email } = res.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              err: "Something went wrong...",
            });
          } else {
            if (user) {
              const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
                expiresIn: "1h",
              });
              const { _id, email, name } = user;

              res.json({
                token,
                result: { _id, name, email },
              });
            } else {
              let password = "ironman";
              let newUser = new User({ name, email, password });
              newUser.save((err, data) => {
                if (err) {
                  return res.status(400).json({
                    err: "Something went wrong...",
                  });
                }
                const token = jwt.sign(
                  { id: user._id },
                  process.env.SECRET_KEY,
                  { expiresIn: "1h" }
                );
                const { _id, email, name } = user;

                res.json({
                  token,
                  result: { _id, name, email },
                });
              });
            }
          }
        });
      }
    });
};
