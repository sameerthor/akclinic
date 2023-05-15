const Progess = () => {
  return (
    <div className="progress_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="progress_txt">
              <div className="pr_h">Hair Growth after the Surgery</div>
              <div className="pr_p">
                How much time it will take to regrow? How many hair will grow
                every month? These are the common questions that people seek for
                after the surgery. It will take approximately 6-12 months for
                the new transplanted hair to grow. Following is a general growth
                illustration after the procedure.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/graph.png" style={{ height: "580px", width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Progess;
