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
      <div style={ChaptersOverlayStyles} onClick={onClose} className="terms-overlay"/>
      <div style={ChaptersContainerStyles}>
        <div className="terms-privacy-modal-container">
          <div className="terms-privacy-modal-text">
            
            <h3 className="terms-privacy-h3">terms and conditions</h3>
			<p className="terms-privacy-p">
			These Terms & Conditions ("Agreement") govern your use of the 5Siglo website ("Site"), which is owned and operated by Unyon ng mga Manggagawa sa Agrikultura. Please read this Agreement carefully before using the Site. By using the Site, you agree to be bound by this Agreement. If you do not agree to be bound by this Agreement, you may not use the Site.
            </p>

			<h2 className="terms-privacy-h2">use of site</h2>
            <p className="terms-privacy-p">
			The Site provides multimedia content about the Filipino peasantry for educational purposes and to spread awareness about the plight of the Filipino peasantry for peasant empowerment. The content on the Site is not intended to be a substitute for professional advice, diagnosis, or treatment. The Site is available to anyone for use, and is not protected by copyright or intellectual property laws. The Site does not sell any products or advertise any commercial commodities.
            </p>

			<h2 className="terms-privacy-h2">educational use</h2>
            <p className="terms-privacy-p">
			The Site may be used for educational purposes and by like-minded organizations and individuals, granted that this website will be used for spreading awareness about the Filipino peasantry for peasant empowerment. The non-governmental organization reserves the right to monitor such use and may revoke permission at any time.
            </p>

			<h2 className="terms-privacy-h2">feedback forms</h2>
            <p className="terms-privacy-p">
			The Site may contain feedback forms that allow users to submit comments or suggestions to the non-governmental organization. By submitting a feedback form, you acknowledge and agree that the non-governmental organization may use the feedback for any purpose without compensation or attribution to you. The feedback forms are the only user-generated content on the Site.
            </p>

			<h2 className="terms-privacy-h2">disclaimer of warranties</h2>
            <p className="terms-privacy-p">
			The Site is provided "as is" and without warranties of any kind, whether express or implied. To the fullest extent permissible pursuant to applicable law, the non-governmental organization disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose and non-infringement. The non-governmental organization does not represent or warrant that the Site will be uninterrupted or error-free, that any defects will be corrected, or that the Site or the server that makes the Site available are free of viruses or anything else harmful.
            </p>

			<h2 className="terms-privacy-h2">limitation of liability</h2>
            <p className="terms-privacy-p">
			The non-governmental organization shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or relating to the use or inability to use the Site or any content on the Site. This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if the non-governmental organization has been advised of the possibility of such damage. The scope of liability is limited to the extent permitted by applicable law, and you acknowledge and agree that this limitation of liability is reasonable.
            </p>

			<h2 className="terms-privacy-h2">indemnification</h2>
            <p className="terms-privacy-p">
			You agree to indemnify, defend, and hold harmless the non-governmental organization, its officers, directors, employees, agents, licensors, and suppliers from and against all claims, losses, expenses, damages, and costs, including reasonable attorneys' fees, arising out of or relating to your use of the Site or any violation of this Agreement by you.
            </p>

			<h2 className="terms-privacy-h2">governing law and jurisdiction</h2>
            <p className="terms-privacy-p">
			This Agreement shall be governed by and construed in accordance with the laws of the Philippines, without regard to its conflict of law provisions. Any dispute arising out of or relating to this Agreement or the breach thereof shall be settled by arbitration in the Philippines in accordance with the rules of the Philippine Dispute Resolution Center, and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.
            </p>

			<h2 className="terms-privacy-h2">modification of agreement</h2>
            <p className="terms-privacy-p">
			The non-governmental organization may modify this Agreement at any time by posting a revised version of the Agreement on the Site. Your continued use of the Site following any such modification constitutes your agreement to be bound by the modified Agreement. The non-governmental organization will also endeavor to notify users of any updates to the Agreement.
            </p>

			<p className="terms-privacy-p">
			By using this Site, you acknowledge that you have read and agree to be bound by this Agreement. If you do not agree to be bound by this Agreement, do not use the Site.
            </p>

			<p className="terms-privacy-p">
			If you have any questions or concerns about these Terms & Conditions, please contact us at uma.pilipinas@gmail.com. Thank you for using 5Siglo.
            </p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
