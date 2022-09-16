import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Button, CardActions, Typography } from "@mui/material";
const CardPost = () => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          title="Shrimp and Chorizo Paella"
          subheader=" createAt September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat et
            vero ea adipisci nihil vitae ducimus harum obcaecati modi delectus
            recusandae quibusdam, cum autem eius reiciendis, excepturi vel dolor
            eveniet?
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Plus</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardPost;
