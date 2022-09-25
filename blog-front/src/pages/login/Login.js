import React, { useRef } from "react";
import { TextField, Container, Button, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  let password;
  let cpassword;
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  password = watch("password", "");
  cpassword = watch("cpassword", "");
  console.log(password, cpassword);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container maxWidth="xs" mt={5}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2} mt={5}>
          <TextField
            variant="outlined"
            label="full name"
            fullWidth
            autoComplete="name"
            autoFocus
            {...register("name", {
              required: "Required field",
              pattern: {
                value:
                  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
                message: "Invalide name",
              },
            })}
            error={!!errors?.name}
            helperText={errors?.name ? errors.name.message : null}
          />
        </Box>

        <Box mb={2} mt={5}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalide email adress",
              },
            })}
            error={!!errors?.email}
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>
        <Box mb={2} mt={5}>
          <TextField
            variant="outlined"
            label="password"
            fullWidth
            type="password"
            autoComplete="password"
            {...register("password", {
              required: "Required field",
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

        <Box mb={2} mt={5}>
          <TextField
            variant="outlined"
            label="confirm password"
            fullWidth
            type="password"
            autoComplete="cpassword"
            {...register("cpassword", {
              required: "require field",
            })}
          />
          {watch("cpassword") !== watch("password") &&
          getValues("cpassword") ? (
            <p>password not match</p>
          ) : null}
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forget password
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
