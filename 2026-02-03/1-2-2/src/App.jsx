import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  // const name = "김용수";
  // const birthYear = 2000;
  // const hobbies = ["코딩", "음악", "게임"];
  // const currentYear = new Date().getFullYear();
  return (
    <>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
      {/* <div
        className="profile-card"
        style={{
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "yellow",
            backgroundColor: "orange",
            padding: "10px",
          }}
        >
          {name}
        </h1>
        <p style={{ fontWeight: "bold" }}>나이: {currentYear - birthYear}세</p>
        <p style={{ fontWeight: "bold" }}>취미: {hobbies.join(", ")}</p>
      </div> */}
    </>
  );
}

export default App;
