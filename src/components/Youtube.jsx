
import tsagiinZoruu from "./Time";
import { Dot, EllipsisVertical } from "lucide-react";
import { useState } from "react";

const Videos = ({ youtubes }) => {

  const [menuOpen, setMenuOpen] = useState(null); // Track open menu

  const handleMenuToggle = (title) => {
    setMenuOpen(menuOpen === title ? null : title);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        padding: "16px",
      }}
    >
      {youtubes.map((youtube) => (
        <div key={youtube.title} style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={youtube.image}
            alt={`Thumbnail for ${youtube.title}`}
            style={{
              width: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
            }}
          />
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <div style={{ flex: "0 0 auto" }}>
              {youtube.logo && (
                <img
                  src={youtube.logo}
                  alt={`${youtube.title} channel logo`}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              )}
            </div>
            <div style={{ flex: "1 1 auto" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3
                  style={{
                    color: "#333",
                    fontSize: "16px",
                    margin: "0",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {youtube.title}
                </h3>
                <EllipsisVertical
                  style={{ color: "#606060", cursor: "pointer" }}
                  aria-label={`More options for ${youtube.title}`}
                  onClick={() => handleMenuToggle(youtube.title)}
                />
              </div>
              {youtube.desc && (
                <p style={{ color: "#606060", fontSize: "14px", margin: "4px 0" }}>
                  {youtube.desc}
                </p>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {youtube.views && (
                  <p style={{ color: "#606060", fontSize: "14px" }}>{youtube.views}</p>
                )}
                <Dot style={{ color: "#606060" }} />
                <p style={{ color: "#606060", fontSize: "14px" }}>
                  {tsagiinZoruu(youtube.postedTime, { justNowThreshold: 30 })}
                </p>
              </div>
              {menuOpen === youtube.title && (
                <div
                  style={{
                    position: "absolute",
                    background: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "4px",
                    padding: "8px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", 
                  }}
                >
                  <p style={{ margin: "0", padding: "4px 8px", cursor: "pointer" }}>
                    Add to playlist
                  </p>
                  <p style={{ margin: "0", padding: "4px 8px", cursor: "pointer" }}>
                    Share
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;