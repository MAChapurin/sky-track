export const BackgroundMap = () => {
  const zoom = 5;
  const location = "Moscow";

  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    location
  )}&t=k&z=${zoom}&output=embed`;

  return (
    <iframe
      title="Google Maps Satellite Background"
      src={src}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{
        background: "#11111120",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        zIndex: -1,
        // filter: "brightness(0.8) grayscale(0.8)",
      }}
    />
  );
};
