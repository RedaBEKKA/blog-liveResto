import React, { useEffect} from "react";
import { TextField, Container, Button, Box, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
 useEffect(() => {
    document.title = "Login";
  });

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

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
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Button
          mt={3}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          connexion
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
              Mot de passe oublié
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href="#"
              variant="body2"
              to={"/signup"}
              style={{
                color: "#666",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              S'inscrire
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
