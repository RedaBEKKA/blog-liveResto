import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "80vh", backgroundSize: "cover" }}
      />
      <div
        className="description"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h2 style={{ color: "#233069", fontSize: "35px" }}>{item.title}</h2>
      </div>
    </Paper>
  );
}
export default Item;
