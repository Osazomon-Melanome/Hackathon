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
            <h6>Basic Information</h6>
            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='What is your name or preferred username?'
            />
            <div>
              <h6>How would you describe your experience with makeup?</h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='step1'
                    value='Beginner'
                    checked={answers.step1 === 'Beginner'}
                    onChange={this.handleChange}
                  />
                  Beginner
                </label>
                <label>
                  <input
                    type='radio'
                    name='step1'
                    value='Intermediate'
                    checked={answers.step1 === 'Intermediate'}
                    onChange={this.handleChange}
                  />
                  Intermediate
                </label>
                <label>
                  <input
                    type='radio'
                    name='step1'
                    value='Expert'
                    checked={answers.step1 === 'Expert'}
                    onChange={this.handleChange}
                  />
                  Expert
                </label>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <h2>Skin Profile</h2>

            <div>
              {/* Question 1: Skin Type */}
              <h6>What is your skin type?</h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='skinType'
                    value='Oily'
                    checked={answers.skinType === 'Oily'}
                    onChange={this.handleChange}
                  />
                  Oily
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinType'
                    value='Dry'
                    checked={answers.skinType === 'Dry'}
                    onChange={this.handleChange}
                  />
                  Dry
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinType'
                    value='Combination'
                    checked={answers.skinType === 'Combination'}
                    onChange={this.handleChange}
                  />
                  Combination
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinType'
                    value='Normal'
                    checked={answers.skinType === 'Normal'}
                    onChange={this.handleChange}
                  />
                  Normal
                </label>
              </div>

              {/* Question 2: Skin Concerns */}
              <h6 style={{ marginTop: '16px' }}>
                Do you have specific skin concerns?
              </h6>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Acne'
                    checked={answers.skinConcerns === 'Acne'}
                    onChange={this.handleChange}
                  />
                  Acne
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Sensitivity'
                    checked={answers.skinConcerns === 'Sensitivity'}
                    onChange={this.handleChange}
                  />
                  Sensitivity
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Hyperpigmentation'
                    checked={answers.skinConcerns === 'Hyperpigmentation'}
                    onChange={this.handleChange}
                  />
                  Hyperpigmentation
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Wrinkles'
                    checked={answers.skinConcerns === 'Wrinkles'}
                    onChange={this.handleChange}
                  />
                  Wrinkles
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Redness'
                    checked={answers.skinConcerns === 'Redness'}
                    onChange={this.handleChange}
                  />
                  Redness
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinConcerns'
                    value='Other'
                    checked={answers.skinConcerns === 'Other'}
                    onChange={this.handleChange}
                  />
                  Other
                </label>
              </div>

              {/* Question 3: Skin Undertone */}
              <h6 style={{ marginTop: '16px' }}>
                How would you describe your skin undertone?
              </h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='skinUndertone'
                    value='Cool'
                    checked={answers.skinUndertone === 'Cool'}
                    onChange={this.handleChange}
                  />
                  Cool
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinUndertone'
                    value='Warm'
                    checked={answers.skinUndertone === 'Warm'}
                    onChange={this.handleChange}
                  />
                  Warm
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinUndertone'
                    value='Neutral'
                    checked={answers.skinUndertone === 'Neutral'}
                    onChange={this.handleChange}
                  />
                  Neutral
                </label>
                <label>
                  <input
                    type='radio'
                    name='skinUndertone'
                    value='Not Sure'
                    checked={answers.skinUndertone === 'Not Sure'}
                    onChange={this.handleChange}
                  />
                  Not Sure
                </label>
              </div>
            </div>

            <input
              type='text'
              name='step1'
              value={answers.step1}
              onChange={this.handleChange}
              placeholder='Do you have any allergies or sensitivities to certain ingredients?'
            />
          </div>
        )
      case 3:
        return (
          <div>
            <h5>Personal Preferences</h5>
            <div>
              <h6>
                What is most important to you when selecting beauty products?
              </h6>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Shade Match'
                    checked={answers.productImportance === 'Shade Match'}
                    onChange={this.handleChange}
                  />
                  Shade Match
                </label>
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Texture'
                    checked={answers.productImportance === 'Texture'}
                    onChange={this.handleChange}
                  />
                  Texture
                </label>
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Longevity'
                    checked={answers.productImportance === 'Longevity'}
                    onChange={this.handleChange}
                  />
                  Longevity
                </label>
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Ethical Standards'
                    checked={answers.productImportance === 'Ethical Standards'}
                    onChange={this.handleChange}
                  />
                  Ethical Standards
                </label>
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Ingredient Safety'
                    checked={answers.productImportance === 'Ingredient Safety'}
                    onChange={this.handleChange}
                  />
                  Ingredient Safety
                </label>
                <label>
                  <input
                    type='radio'
                    name='productImportance'
                    value='Other'
                    checked={answers.productImportance === 'Other'}
                    onChange={this.handleChange}
                  />
                  Other
                </label>
              </div>

              {/* Question 2: Cruelty-Free or Vegan Beauty Products */}
              <h6 style={{ marginTop: '16px' }}>
                Do you prioritize cruelty-free or vegan beauty products?
              </h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='crueltyFreeVegan'
                    value='Yes'
                    checked={answers.crueltyFreeVegan === 'Yes'}
                    onChange={this.handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type='radio'
                    name='crueltyFreeVegan'
                    value='No'
                    checked={answers.crueltyFreeVegan === 'No'}
                    onChange={this.handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type='radio'
                    name='crueltyFreeVegan'
                    value='Indifferent'
                    checked={answers.crueltyFreeVegan === 'Indifferent'}
                    onChange={this.handleChange}
                  />
                  Indifferent
                </label>
              </div>

              {/* Question 3: Finish Preference for Foundation or Powder */}
              <h6 style={{ marginTop: '16px' }}>
                What kind of finish do you prefer for your foundation or powder?
              </h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='finishPreference'
                    value='Matte'
                    checked={answers.finishPreference === 'Matte'}
                    onChange={this.handleChange}
                  />
                  Matte
                </label>
                <label>
                  <input
                    type='radio'
                    name='finishPreference'
                    value='Dewy'
                    checked={answers.finishPreference === 'Dewy'}
                    onChange={this.handleChange}
                  />
                  Dewy
                </label>
                <label>
                  <input
                    type='radio'
                    name='finishPreference'
                    value='Natural'
                    checked={answers.finishPreference === 'Natural'}
                    onChange={this.handleChange}
                  />
                  Natural
                </label>
                <label>
                  <input
                    type='radio'
                    name='finishPreference'
                    value='Satin'
                    checked={answers.finishPreference === 'Satin'}
                    onChange={this.handleChange}
                  />
                  Satin
                </label>
                <label>
                  <input
                    type='radio'
                    name='finishPreference'
                    value='Other'
                    checked={answers.finishPreference === 'Other'}
                    onChange={this.handleChange}
                  />
                  Other
                </label>
              </div>

              {/* Question 4: Coverage Preference for Foundation */}
              <h6 style={{ marginTop: '16px' }}>
                What coverage level do you prefer for foundation?
              </h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='coveragePreference'
                    value='Light'
                    checked={answers.coveragePreference === 'Light'}
                    onChange={this.handleChange}
                  />
                  Light
                </label>
                <label>
                  <input
                    type='radio'
                    name='coveragePreference'
                    value='Medium'
                    checked={answers.coveragePreference === 'Medium'}
                    onChange={this.handleChange}
                  />
                  Medium
                </label>
                <label>
                  <input
                    type='radio'
                    name='coveragePreference'
                    value='Full'
                    checked={answers.coveragePreference === 'Full'}
                    onChange={this.handleChange}
                  />
                  Full
                </label>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div>
            <h5>Shade Matching Inputs</h5>
            <h6>
              Would you like to upload a photo for personalized shade matching?
            </h6>
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
            {/* Privacy Disclaimer */}
            <div style={{ marginTop: '12px', fontSize: '12px', color: '#777' }}>
              <p>
                By uploading your photo, you agree to our{' '}
                <a href='/privacy-policy'>privacy policy</a>. Your photo will
                only be used for personalized shade matching and will not be
                shared without your consent.
              </p>
            </div>
            {/* <div>
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
            </div> */}
            <div>
              {/* Question: Lighting Condition for Makeup Application */}
              <h6>What lighting condition do you normally apply makeup in?</h6>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <label>
                  <input
                    type='radio'
                    name='lightingCondition'
                    value='Natural Light'
                    checked={answers.lightingCondition === 'Natural Light'}
                    onChange={this.handleChange}
                  />
                  Natural Light
                </label>
                <label>
                  <input
                    type='radio'
                    name='lightingCondition'
                    value='Indoor Lighting'
                    checked={answers.lightingCondition === 'Indoor Lighting'}
                    onChange={this.handleChange}
                  />
                  Indoor Lighting
                </label>
                <label>
                  <input
                    type='radio'
                    name='lightingCondition'
                    value='Studio Lighting'
                    checked={answers.lightingCondition === 'Studio Lighting'}
                    onChange={this.handleChange}
                  />
                  Studio Lighting
                </label>
                <label>
                  <input
                    type='radio'
                    name='lightingCondition'
                    value='Mixed'
                    checked={answers.lightingCondition === 'Mixed'}
                    onChange={this.handleChange}
                  />
                  Mixed
                </label>
              </div>
            </div>
          </div>
        )
      case 5:
        return (
          <div>
            {/* Question 1: Current Routine */}
            <h6>
              What foundation, concealer, or powder are you currently using (if
              any)?
            </h6>
            <div style={{ marginTop: '8px' }}>
              <input
                type='text'
                name='currentProduct'
                value={answers.currentProduct}
                onChange={this.handleChange}
                placeholder="Enter the products you're using"
                style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>

            {/* Question 2: Product Match to Skin Tone */}
            <h6 style={{ marginTop: '16px' }}>
              Do you feel your current product matches your skin tone
              accurately?
            </h6>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <label>
                <input
                  type='radio'
                  name='productMatch'
                  value='Yes'
                  checked={answers.productMatch === 'Yes'}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type='radio'
                  name='productMatch'
                  value='No'
                  checked={answers.productMatch === 'No'}
                  onChange={this.handleChange}
                />
                No
              </label>
              <label>
                <input
                  type='radio'
                  name='productMatch'
                  value='Sometimes'
                  checked={answers.productMatch === 'Sometimes'}
                  onChange={this.handleChange}
                />
                Sometimes
              </label>
            </div>

            {/* Question 3: Past Products */}
            <h6 style={{ marginTop: '16px' }}>
              What brands or products have worked well for you in the past?
            </h6>
            <div style={{ marginTop: '8px' }}>
              <input
                type='text'
                name='pastProducts'
                value={answers.pastProducts}
                onChange={this.handleChange}
                placeholder='Enter the brands or products'
                style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
          </div>
        )
      case 6:
        return (
          <div>
            {/* Question 1: What would you like to achieve with our platform? */}
            <h6>What would you like to achieve with our platform?</h6>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginTop: '8px',
                flexWrap: 'wrap',
              }}
            >
              <label>
                <input
                  type='radio'
                  name='goalAchievement'
                  value='Perfect Shade Match'
                  checked={answers.goalAchievement === 'Perfect Shade Match'}
                  onChange={this.handleChange}
                />
                Perfect Shade Match
              </label>
              <label>
                <input
                  type='radio'
                  name='goalAchievement'
                  value='Explore New Brands'
                  checked={answers.goalAchievement === 'Explore New Brands'}
                  onChange={this.handleChange}
                />
                Explore New Brands
              </label>
              <label>
                <input
                  type='radio'
                  name='goalAchievement'
                  value='Learn About My Skin'
                  checked={answers.goalAchievement === 'Learn About My Skin'}
                  onChange={this.handleChange}
                />
                Learn About My Skin
              </label>
              <label>
                <input
                  type='radio'
                  name='goalAchievement'
                  value='Ethical Product Suggestions'
                  checked={
                    answers.goalAchievement === 'Ethical Product Suggestions'
                  }
                  onChange={this.handleChange}
                />
                Ethical Product Suggestions
              </label>
              <label>
                <input
                  type='radio'
                  name='goalAchievement'
                  value='Other'
                  checked={answers.goalAchievement === 'Other'}
                  onChange={this.handleChange}
                />
                Other
              </label>
            </div>

            {/* Question 2: Personalized Recommendations */}
            <h6 style={{ marginTop: '16px' }}>
              Would you like personalized recommendations for products with
              active ingredients tailored to your skin concerns?
            </h6>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <label>
                <input
                  type='radio'
                  name='personalizedRecommendations'
                  value='Yes'
                  checked={answers.personalizedRecommendations === 'Yes'}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type='radio'
                  name='personalizedRecommendations'
                  value='No'
                  checked={answers.personalizedRecommendations === 'No'}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>
          </div>
        )
      case 7:
        return (
          <div>
            {/* Question 1: Frustration About Finding the Right Beauty Products */}
            <h6>
              What frustrates you most about finding the right beauty products?
            </h6>
            <div style={{ marginTop: '8px' }}>
              <textarea
                name='frustrationFeedback'
                value={answers.frustrationFeedback}
                onChange={this.handleChange}
                placeholder='Share your frustrations here'
                rows='4'
                style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                }}
              />
            </div>

            {/* Question 2: How Can We Improve the Process? */}
            <h6 style={{ marginTop: '16px' }}>
              How can we make this process easier or more enjoyable for you?
            </h6>
            <div style={{ marginTop: '8px' }}>
              <textarea
                name='improvementFeedback'
                value={answers.improvementFeedback}
                onChange={this.handleChange}
                placeholder='Share your suggestions here'
                rows='4'
                style={{
                  width: '100%',
                  padding: '8px',
                  fontSize: '14px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  resize: 'vertical',
                }}
              />
            </div>
          </div>
        )
      case 8:
        return (
          <div>
            {/* Question 1: Personalized Tips, Updates, and Offers */}
            <h6>
              Would you like to receive personalized tips, updates, and offers
              from OSAZ?
            </h6>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <label>
                <input
                  type='radio'
                  name='receiveUpdates'
                  value='Yes'
                  checked={answers.receiveUpdates === 'Yes'}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type='radio'
                  name='receiveUpdates'
                  value='No'
                  checked={answers.receiveUpdates === 'No'}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>

            {/* Question 2: Consent to Data Use for Shade Matching */}
            <h6 style={{ marginTop: '16px' }}>
              Do you consent to your data being used to improve your shade
              matching experience?
            </h6>
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <label>
                <input
                  type='radio'
                  name='dataConsent'
                  value='Yes'
                  checked={answers.dataConsent === 'Yes'}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type='radio'
                  name='dataConsent'
                  value='No'
                  checked={answers.dataConsent === 'No'}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  renderProgress = () => {
    const { currentStep } = this.state
    const progress = (currentStep / 8) * 100
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
            {currentStep < 8 && (
              <button className='allButtons' onClick={this.handleNext}>
                Next
              </button>
            )}
            {currentStep === 8 && (
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
