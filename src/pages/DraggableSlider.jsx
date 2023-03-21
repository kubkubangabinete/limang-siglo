export default function DraggableSlider() {
  return (
    <div className="drag-container">
      
      <label htmlFor="drag-checkbox-toggle" className="drag-label">

      <input type="checkbox" id="drag-checkbox-toggle" />

        
        <div className="drag-thumb-container">
          <div className="drag-outer">
            <div className="drag-inner" />
          </div>
        </div>

        <div className="drag-body" />
        
      </label>

    </div>
  );
}


{/* after drag-body

<div className="drag-toggle-btn" /> 

*/}