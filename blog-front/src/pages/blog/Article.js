import React from "react";
import { Container, Box, height, margin } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";

const Article = () => {
  return (
    <Container>
      <Box>
        <Box display="flex" alignItems="center" p={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, margin: 2 }}
          />
          <Typography color="#777" fontSize="medium" marginRight={1.5}>
            UserName
          </Typography>
          <Typography color="#777" fontSize="small">
            19 Octobre, 2020
          </Typography>
        </Box>
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          marginBottom={4}
        >
          Excellent article avec zero faute
        </Typography>
        <Box textAlign="center" marginBottom={5}>
          <img
            src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=900"
            alt="imagetitle"
          />
        </Box>
        <Typography
          textAlign="center"
          lineHeight="2"
          color="#616161"
          fontSize={17}
          maxWidth="80%"
          margin="auto"
          marginBottom={10}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut
          quia adipisci velit exercitationem labore voluptate, voluptatem ut
          facere aperiam tempora, ipsam delectus? Expedita perferendis itaque
          explicabo voluptate soluta officia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum aut quia adipisci velit
          exercitationem labore voluptate, voluptatem ut facere aperiam tempora,
          ipsam delectus? Expedita perferendis itaque explicabo voluptate soluta
          officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum aut quia adipisci velit exercitationem labore voluptate,
          voluptatem ut facere aperiam tempora, ipsam delectus? Expedita
          perferendis itaque explicabo voluptate soluta officia? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum aut quia adipisci
          velit exercitationem labore voluptate, voluptatem ut facere aperiam
          tempora, ipsam delectus? Expedita perferendis itaque explicabo
          voluptate soluta officia? ipsam delectus? Expedita perferendis itaque
          explicabo voluptate soluta officia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Harum aut quia adipisci velit
          exercitationem labore voluptate, voluptatem ut facere aperiam tempora,
          ipsam delectus? Expedita perferendis itaque explicabo voluptate soluta
          officia? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Harum aut quia adipisci velit exercitationem labore voluptate,
          voluptatem ut facere aperiam tempora, ipsam delectus? Expedita
          perferendis itaque explicabo voluptate soluta officia?
        </Typography>
        <Box borderBottom={1} pb={1} marginBottom={2}>
          Commentaires
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Box sx={{ borderBottom: ".5px solid #ede6e6" }}>
          <Box display="flex" alignItems="center" p={1}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 40, height: 40, margin: 2 }}
            />
            <Typography color="#777" fontSize="medium" marginRight={1.5}>
              UserName
            </Typography>
            <Typography color="#777" fontSize="small">
              19 Octobre, 2020
            </Typography>
          </Box>
          <Typography
            pl={8}
            fontSize={15}
            color="#555"
            maxWidth="70%"
            marginBottom={2}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut vel id
            facere iste, alias quo ea voluptatum, ipsa amet quos labore tenetur
            voluptatibus enim eaque. Maiores impedit reiciendis iure explicabo?
            ...
          </Typography>
        </Box>
        <Button size="lg" disabled="flex">
          Plus
        </Button>
        <Box
          sx={{
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Textarea
              placeholder="Try to submit with empty text!"
              required
              sx={{ mb: 1, width: "800px", minHeight: "200px", mt: 7 }}
            />
            <Button
              type="submit"
              sx={{
                mb: 1,
                background: "#1b99d5",
                color: "white",
                margin: "20px 0 90px 0",

                "&:hover": {
                  color: "#1b99d5",
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Article;
