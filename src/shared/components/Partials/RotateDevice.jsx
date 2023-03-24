import rotateDeviceIcon from "../../../assets/rotate-device.svg";

const RotateDevice = () => {
  return (
      <div className="rotate-device-overlay">
        <div className="rotate-device-container">
          <img src={rotateDeviceIcon} className="rotate-device-icon" />
          <p className="rotate-device-text">
            Rotate device for better experience
          </p>
        </div>
      </div>
  );
};

export default RotateDevice;
