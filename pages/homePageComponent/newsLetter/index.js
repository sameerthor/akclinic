const NewsLetter = () => {
  return (
    <div className="news_letter">
      <div className="container">
        <div className="newsletter_head wow fadeInUp">
          Are you losing your hair & confidence?
        </div>
        <div className="newsletter_subhead wow fadeInUp">
          Please register yourself to get a Call Back.
        </div>
        <div className="form_news">
          <span className="name_input">
            <div className="form__group">
              <input type="text" className="form__field" placeholder="Name*" />
              <label htmlFor="name" className="form__label">
                Name*
              </label>
            </div>
          </span>
          <span className="age_input">
            <div className="form__group">
              <input type="number" className="form__field" placeholder="Age*" />
              <label htmlFor="age" className="form__label">
                Age
              </label>
            </div>
          </span>
          <span className="name_input">
            <div className="form__group">
              <input type="text" className="form__field" placeholder="Email*" />
              <label htmlFor="email" className="form__label">
                Email*
              </label>
            </div>
          </span>
          <span className="name_input">
            <div className="form__group">
              <input
                type="number"
                className="form__field"
                placeholder="Phone*"
              />
              <label htmlFor="pone" className="form__label">
                Phone*
              </label>
            </div>
          </span>
          <button className="newsleter_btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
