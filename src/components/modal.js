import React, { Component } from 'react';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      image: '',
      showModal: false, // Add this state for the modal visibility
    };
  }

  // ... Rest of your code

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log(this.state);

    // Show the modal after successful form submission
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    // Close the modal and reset form fields
    this.setState({
      showModal: false,
      name: '',
      description: '',
      image: '',
    });
  };

  render() {
    // ... Existing code

    return (
      <div className="container mt-4">
        {/* ... Existing form code */}
        
        {/* Modal */}
        <div
          className={`modal fade ${this.state.showModal ? 'show d-block' : ''}`}
          tabIndex="-1"
          role="dialog"
          style={{ display: this.state.showModal ? 'block' : 'none' }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thank You for Your Feedback</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Your feedback has been submitted successfully.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackForm;
