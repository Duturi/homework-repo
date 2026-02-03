function Card() {
  const name = "김용수";
  const birthYear = 2000;
  const hobbies = ["코딩", "음악", "게임"];
  const currentYear = new Date().getFullYear();
  return (
    <div className="profile-card">
      <h1
        style={{
          color: "yellow",
          backgroundColor: "orange",
          padding: "5px",
        }}
      >
        {name}
      </h1>
      <p style={{ color: "purple", fontWeight: "bold" }}>
        나이: {currentYear - birthYear}세
      </p>
      <p style={{ color: "green", fontWeight: "bold" }}>
        취미: {hobbies.join(", ")}
      </p>
    </div>
  );
}

export default Card;
