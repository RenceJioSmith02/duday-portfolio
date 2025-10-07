import React, { useState } from "react";
import styles from "../css/customStyle.module.css";

export default function ProjectCard({ title, desc, tags, link, image }) {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className={`${styles.cardRoot} card-project position-relative text-light`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className={styles.cardOverlay}></div>

        {/* Content */}
        <div className="p-3 position-absolute bottom-0 w-100">
          <h5 className="fw-bold">{title}</h5>
          <p className="small mb-2">{desc}</p>
          <div className="mb-2">
            {tags.map((t, i) => (
              <span className="tag me-1" key={i}>
                {t}
              </span>
            ))}
          </div>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setShowPreview(true)}
          >
            View
          </button>
        </div>
      </div>

      {/* Modal Preview */}
      {showPreview && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setShowPreview(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close X button */}
            <button
              className={styles.modalClose}
              onClick={() => setShowPreview(false)}
            >
              &times;
            </button>

            {/* Image */}
            <img src={image} alt={title} className="img-fluid rounded" />
          </div>
        </div>
      )}
    </>
  );
}
