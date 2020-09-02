import React from "react";
import { connect } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingIndicator = ({ loading }) => {
  return (
    <div
      className="loading-indicator"
      style={{
        display: loading ? "flex" : "none",
      }}
    >
      <div className="sweet-loading">
        <ClipLoader size={150} color="#9e2058" loading={loading} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(LoadingIndicator);
