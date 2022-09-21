import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          maxHeight: "80vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="description"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h2 sx={{ color: "#233069", fontSize: { xs: "22px", md: "32px" } }}>
          {item.title}
        </h2>
      </div>
    </Paper>
  );
}
export default Item;
