import '../views/home.css';

export default function Footer({ style }) {
  return <footer className="home-footer" style={style}>
    <div className="home-container17">
      <img
        alt="image"
        src="/logo.png"
        className="home-image2"
      />
      <h3 className="home-text128">
        <span>FylDrop</span>
        <br></br>
      </h3>
    </div>

    <div>
      <a href='https://twitter.com/FylDrop' style={{ fontWeight: 600, color: "#0074f0" }}>Twitter</a>
      <span style={{ margin: "0px 10px 0px 10px", color: "lightgray" }}>|</span>
      <a href='/newsletter' style={{ fontWeight: 600, color: "#0074f0" }}>Newsletter</a>
      <span style={{ margin: "0px 10px 0px 10px", color: "lightgray" }}>|</span>
      <a href='mailto:info@fyldrop.com' style={{ fontWeight: 600, color: "#0074f0" }}>Contact Us</a>
    </div>

    <span className="home-text131">© {new Date().getFullYear()} FylDrop</span>
  </footer>
}