import React, { useState } from "react";
import ReactDOM from "react-dom";

const ChaptersContainerStyles = {
	position: "fixed",
	overflow: "hidden",
	display: "flex",
	top: "50%",
	left: "50%",
   
	zIndex: 1000000,
  };
  
  const ChaptersOverlayStyles = {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, .3)",
	backdropFilter: "blur(10px)",
	zIndex: 1000000,
  };

export default function Terms({ open, onClose }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} />
      <div style={ChaptersOverlayStyles} onClick={onClose} />
      <div style={ChaptersContainerStyles}>
        <div className="terms-privacy-modal-container">
          <div className="terms-privacy-modal-text">
            
            <h3 className="terms-privacy-h3">privacy policy</h3>
			<p className="terms-privacy-p">
			This Privacy Policy ("Policy") outlines how 5Siglo, a website owned and operated by Unyon ng mga Manggagawa sa Agrikultura, collects, uses, and protects any personal information that users may provide while using the website. Please read this Policy carefully before using the website. By using the website, you agree to be bound by this Policy.
            </p>

			<h2 className="terms-privacy-h2">data collection</h2>
            <p className="terms-privacy-p">
			5Siglo does not collect any personal information from its users. The website is a single-page application that provides multimedia content about the Filipino peasantry for educational purposes and to spread awareness about the plight of the Filipino peasantry for peasant empowerment. The website is public, can be navigated by anyone, and not protected by copyright or intellectual property laws. The website does not use cookies, and it does not have a database for storing personal information.
            </p>

			<h2 className="terms-privacy-h2">feedback forms</h2>
            <p className="terms-privacy-p">
			The website may contain feedback forms that allow users to submit comments or suggestions to the non-governmental organization. By submitting a feedback form, you acknowledge and agree that the non-governmental organization may use the feedback for any purpose without compensation or attribution to you. The feedback forms are the only user-generated content on the website, and they do not require users to provide personal information.
            </p>

			<h2 className="terms-privacy-h2">protection of personal information</h2>
            <p className="terms-privacy-p">
			Since the website does not collect personal information, no user data is stored or processed on the website. Any feedback provided through the feedback forms is solely used by the non-governmental organization for internal purposes and is not shared with any third parties.
            </p>

			<h2 className="terms-privacy-h2">target audience</h2>
            <p className="terms-privacy-p">
			The website's originally intended target audience is the urban youth sector. However, it is not exclusive to them, and anyone can access the website for educational purposes and to spread awareness about the Filipino peasantry.
            </p>

			<h2 className="terms-privacy-h2">modification of policy</h2>
            <p className="terms-privacy-p">
			The non-governmental organization may modify this Policy at any time by posting a revised version of the Policy on the website. Your continued use of the website following any such modification constitutes your agreement to be bound by the modified Policy. The non-governmental organization will also endeavor to notify users of any updates to the Policy.
            </p>

            <p className="terms-privacy-p">
			By using this website, you acknowledge that you have read and agree to be bound by this Policy. If you do not agree to be bound by this Policy, do not use the website.
            </p>

            <p className="terms-privacy-p">
			If you have any questions or concerns about this Policy, please contact us at uma.pilipinas@gmail.com. Thank you for using 5Siglo.
            </p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
