import React, { Component } from 'react'
import './ModalComponen.css'

class ModalComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      answers: {
        step1: '',
        step2: '',
        step3: '',
        step4: '',
      },
      uploadedImage: null, // To store the uploaded image
      uploadedVideo: null, // To store the uploaded video
    }
  }

  handleNext = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }))
  }

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [name]: value,
      },
    }))
  }

  handleSubmit = () => {
    console.log('Submitted Answers:', this.state.answers)
    alert('Answers submitted successfully!')
    this.props.closeModal() // Close modal after submission
  }

  handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      this.setState({ uploadedImage: imageURL })
    }
  }

  // Handling video upload
  handleVideoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const videoURL = URL.createObjectURL(file)
      this.setState({ uploadedVideo: videoURL })
    }
  }

  renderStepContent = () => {
    const { currentStep, answers, uploadedImage, uploadedVideo } = this.state

    switch (currentStep) {
      case 1:
        return (
          <div>
            <h6>Step 1: Question</h6>
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
          </div>
        )
      case 2:
        return (
          <div>
            <h2>Step 2: Question</h2>
            <input
              type='text'
              name='step2'
              value={answers.step2}
              onChange={this.handleChange}
              placeholder='Your answer for step 2'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h2>Step 3: Question</h2>
            <input
              type='text'
              name='step3'
              value={answers.step3}
              onChange={this.handleChange}
              placeholder='Your answer for step 3'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Your answer for step 1'
            />
          </div>
        )
      case 4:
        return (
          <div>
            <h2>Step 4: Upload Image and Video</h2>
            <input
              type='text'
              name='step4'
              value={answers.step4}
              onChange={this.handleChange}
              placeholder='Your answer for step 4'
            />
            <div>
              <h3>Upload Image</h3>
              <input
                type='file'
                accept='image/*'
                onChange={this.handleImageUpload}
              />
              {uploadedImage && (
                <div>
                  <h4>Uploaded Image:</h4>
                  <img
                    src={uploadedImage}
                    alt='Uploaded'
                    style={{ width: '200px' }}
                  />
                </div>
              )}
            </div>
            <div>
              <h3>Upload Video</h3>
              <input
                type='file'
                accept='video/*'
                onChange={this.handleVideoUpload}
              />
              {uploadedVideo && (
                <div>
                  <h4>Uploaded Video:</h4>
                  <video controls style={{ width: '200px' }}>
                    <source src={uploadedVideo} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  renderProgress = () => {
    const { currentStep } = this.state
    const progress = (currentStep / 4) * 100
    return (
      <div className='progress-bar' style={{ marginBottom: '20px' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '10px',
            backgroundColor: 'blue',
          }}
        />
      </div>
    )
  }

  render() {
    const { currentStep } = this.state
    const { show, closeModal } = this.props

    if (!show) return null // Don't render anything if the modal is not visible

    return (
      <div className='modal'>
        <div className='modal-content'>
          <button className='close-modal-btn' onClick={closeModal}>
            X
          </button>
          <h5>Please answer the following questions to get Recommendation</h5>
          {this.renderProgress()}
          {this.renderStepContent()}
          <div className='modal-actions'>
            {currentStep > 1 && (
              <button className='allButtons' onClick={this.handlePrevious}>
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button className='allButtons' onClick={this.handleNext}>
                Next
              </button>
            )}
            {currentStep === 4 && (
              <button className='allButtons' onClick={this.handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ModalComponent
