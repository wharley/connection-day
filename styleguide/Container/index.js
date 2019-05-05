const Container = ({ children }) => (
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 20px;
      }
    `}</style>
  </div>
)

export default Container