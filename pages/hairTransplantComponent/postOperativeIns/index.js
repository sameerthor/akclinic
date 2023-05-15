const PostOperativeIns = () => {
  return (
    <div className="p_o_i">
      <div className="container">
        <div className="p_o_h">Post-operative Instructions</div>
        <div className="p_o_p">
          <p>
            The time after your transplant procedure is significantly important.
            It is vital that to understand the goals, complications or
            limitations of the hair transplant. The surgeon & team will explain
            you the complete schedule during the consultation& after the
            procedure. He may ask you to avoid:
          </p>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="p_card">
              <img src="/po1.png" style={{ width: "74px", height: "74px" }} />
              <div className="po_h">
                wearing hair piece or cap for few weeks
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p_card">
              <img src="/po2.png" style={{ width: "74px", height: "74px" }} />
              <div className="po_h">hair styling tools or products</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p_card">
              <img src="/po3.png" style={{ width: "74px", height: "74px" }} />
              <div className="po_h">heavy lifting or workout</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p_card">
              <img src="/po4.png" style={{ width: "74px", height: "74px" }} />
              <div className="po_h">harsh shampoos etc.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostOperativeIns;
