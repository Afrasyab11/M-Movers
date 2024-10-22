import React from "react";
import feedBack from "./../images/feedback.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
export default class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      image: "",
    };

    // Aos.init({ duration: 1000 });
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
    componentDidMount() {
      Aos.init({ duration: 1000 })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: "",
      image: "",
      description: "",
      showAlert: true,
    });

    // Automatically close the alert after 3 seconds
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 3000);
    console.log(this.state);
  };
  handleCloseModal = () => {
    // Close the modal and reset form fields
    this.setState({
      showModal: false,
      name: "",
      description: "",
      image: "",
    });
  };
  render() {
    const { name, description, image } = this.state;
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-6 pt-3 d-none d-lg-block " data-aos="flip-left">
            <img className="img-fluid p-0 m-0" src={feedBack} alt="" />
          </div>
          <div className="col-lg-6 col-sm-12 " data-aos="flip-left">
            <form
              className="border border-primary rounded my-3 px-2 py-2"
              onSubmit={this.handleSubmit}
            >
              <div className="text-center text-primary">
                <h2>{this.props.texts.feedback}</h2>
                {this.state.showAlert && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {this.props.texts.feedbackSuccessResp}
                    <button
                      type="button"
                      className="btn-close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => this.setState({ showAlert: false })}
                    ></button>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {this.props.texts.feedbackName}
                </label>
                <input
                  type="text"
                  className="form-control  shadow-none  "
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  {this.props.texts.feedbackImage}
                </label>
                <input
                  type="file"
                  className="form-control shadow-none"
                  id="image"
                  name="image"
                  value={image}
                  required
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                {this.props.texts.feedbackDesc}
                </label>
                <textarea
                  className="form-control shadow-none"
                  id="description"
                  name="description"
                  value={description}
                  onChange={this.handleInputChange}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="text-center col-4  mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary form-control shadow-none btn-xl"
                >
                  {this.props.texts.feedbackSubmit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
