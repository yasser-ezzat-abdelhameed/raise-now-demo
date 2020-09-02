import React from "react";

/**
 * The graphic that shows with the form card (for tablets and desktops only)
 */
function DescriptionImage() {
  return (
    <div className="description-image">
      <img
        src="/images/group-5.png"
        srcSet="
          /images/group-5@2x.png 2x,
          /images/group-5@3x.png 3x
        "
        alt="description"
      />
    </div>
  );
}

export default DescriptionImage;
