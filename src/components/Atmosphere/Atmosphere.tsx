/* Atmosphere — fixed background layers (grid, glow, scanline, grain) that sit
 * behind all content and give the terminal aesthetic its depth. */
export default function Atmosphere() {
  return (
    <>
      <div className="atmos atmos-grid" aria-hidden="true" />
      <div className="atmos atmos-glow" aria-hidden="true" />
      <div className="atmos atmos-scan" aria-hidden="true" />
      <div className="atmos atmos-grain" aria-hidden="true" />
    </>
  );
}
