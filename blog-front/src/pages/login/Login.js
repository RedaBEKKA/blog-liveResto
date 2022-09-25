import React, { useRef, useState } from "react";
import { TextField, Container, Button, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const resetState = () => {
    setIsSignup(!isSignup);
  };

  let password;
  let cpassword;
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  password = watch("password", "");
  cpassword = watch("cpassword", "");
  console.log(password, cpassword);
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: "1px solid #999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        padding: "10px 0 30px",
        boxShadow: "5px 5px 10px #ccc",
      }}
    >
      <h1>{isSignup ? "Sign Up" : "Login "}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3} mt={3}>
          {isSignup && (
            <TextField
              variant="outlined"
              label="full name"
              fullWidth
              autoComplete="name"
              autoFocus
              {...register("name", {
                required: "name Required",
                pattern: {
                  value:
                    /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                  message: "Invalide name",
                },
              })}
              error={!!errors?.name}
              helperText={errors?.name ? errors.name.message : null}
            />
          )}
        </Box>

        <Box mb={3}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            {...register("email", {
              required: "email required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalide email adress",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>

        <Box mb={3}>
          {isSignup && (
            <TextField
              variant="outlined"
              label="phone"
              fullWidth
              autoComplete="text"
              {...register("phone", {
                required: "phone Required ",

                pattern: {
                  value: /^[0-9]*.{10}$/,
                  message: "Invalide phone number",
                },
              })}
              error={!!errors?.phone}
              helperText={errors?.phone ? errors.phone.message : null}
            />
          )}
        </Box>

        <Box mb={3}>
          <TextField
            variant="outlined"
            label="password"
            fullWidth
            type="password"
            autoComplete="password"
            {...register("password", {
              required: "password Required",
              pattern: {
                // Min 1 uppercase letter.Min 1 lowercase letter Min 1 special character.Min 1 number Min 8 characters.Max 30 characters.
                value:
                  /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
                message:
                  "MIN (1 uppercase ,1 lowercase letters 1 special character 1 number , 8 characters)",
              },
            })}
            error={!!errors?.password}
            helperText={errors?.password ? errors.password.message : null}
          />
        </Box>

        <Box mb={3}>
          {isSignup && (
            <TextField
              variant="outlined"
              label="confirm password"
              fullWidth
              type="password"
              autoComplete="cpassword"
              {...register("cpassword", {
                required: "require field",
              })}
              error={!!errors?.cpassword}
              helperText={errors?.cpassword ? errors.cpassword.message : null}
            />
          )}
          {watch("cpassword") !== watch("password") &&
          getValues("cpassword") ? (
            <small>password not match</small>
          ) : null}
        </Box>

        <Button
          mt={3}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          {isSignup ? "Sign Up" : "Login "}
        </Button>
        <Grid container mt={2}>
          <Grid item xs={6}>
            <Link
              href="#"
              variant="body2"
              style={{
                color: "#666",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              {isSignup ? "" : "Forget password "}
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              variant="body2"
              style={{
                color: "#666",
                fontSize: "14px",
                textDecoration: "none",
              }}
              onClick={resetState}
            >
              {isSignup ? " Login" : "Sign Up "}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
