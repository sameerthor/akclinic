import CountUp from "react-countup";
const Counter = (props) => {
  return (
    <div className="counter">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="counter_grid">
              <span className="conter_text">
                <CountUp duration={5} end={50} enableScrollSpy={true} />+
              </span>
              <span className="counter_desc">DOCTORS AND NURSES ON STAFF</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter_grid">
              <span className="conter_text">
                <CountUp duration={5} end={2170} enableScrollSpy={true} />+
              </span>
              <span className="counter_desc">REVIEWS, 4.97 STAR AVERAGE</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="counter_grid">
              <span className="conter_text">
                <CountUp duration={5} end={15000} enableScrollSpy={true} />+
              </span>
              <span className="counter_desc">SUCCESSFUL PROCEDURES</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
