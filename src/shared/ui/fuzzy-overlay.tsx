export const FuzzyOverlay = () => {
  return (
    <div
      className="fuzzy-overlay pointer-events-none absolute -inset-[100%] opacity-[15%]"
      style={{
        backgroundImage: 'url("/black-noise.png")'
      }}
    />
  )
}
