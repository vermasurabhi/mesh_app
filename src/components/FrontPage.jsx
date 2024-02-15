function FrontPage() {
  return (
    <>
      <div
        id="name"
        style={{
          backgroundColor: " #ffc8bd",
          width: "100%",
          height: "100vh",
          backgroundImage:
            "radial-gradient(at 0% 0%, #f5dc61, transparent 50%), radial-gradient(at -1% 52%, #f79797, transparent 50%), radial-gradient(at 100% 0%, #8ff0e9, transparent 50%), radial-gradient(at 35% 103%, #ec79a1, transparent 50%), radial-gradient(at 65% 52%, #e3abf2, transparent 50%), radial-gradient(at 67% 90%, #fde363, transparent 50%), radial-gradient(at 98% 96%, #d4c577, transparent 50%)",
        }}
      >
        <div className="position-absolute top-50 mx-auto">
          <div className={`mx-auto`} style={{ width: "40%" }}>
            Create Your own Mesh!
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
