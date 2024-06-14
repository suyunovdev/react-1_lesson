export default function Hero() {
  return (
    <div className="Hero">
      <div className="hero-all">
        <div className="hero-word">
          <h1>Work at the speed of thought</h1>
          <p>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <div className="hero-btn">
            <button>Get started</button>
            <div className="stop">
              <button>
                <img src="./src/assets/stop.svg" alt="photo" />
                Watch the Video
              </button>
            </div>
          </div>
        </div>
        <div className="her-img">
          <img src="./src/assets/amico.png" alt="" />
        </div>
      </div>
    </div>
  );
}
