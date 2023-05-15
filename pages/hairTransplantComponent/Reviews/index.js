const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="rew_h">Is the content scientifically based?</div>
            <div className="rew_p">
              Only answer if you have proven medical knowledge
            </div>
            <div className="btn_grp">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rew_h">Was this information helpful?</div>
            <div className="rew_p">Tell us what you think</div>
            <div className="btn_grp">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
