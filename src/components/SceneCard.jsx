function SceneCard({ scene }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "10px"
      }}
    >
      <h3>{scene.title}</h3>

      <p>{scene.description}</p>
    </div>
  );
}

export default SceneCard;