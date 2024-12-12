const Container = ({ children }) => {
  return (
    <div className="bd-example m-0 border-0">
      <div className="card" style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  );
};

export default Container;
