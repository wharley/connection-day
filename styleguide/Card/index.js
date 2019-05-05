const Card = ({ children }) => (
  <div className="card">
    { children }
    <style jsx>{`
      .card {
        border: 1px solid #d3d3d3;
        border-radius: .25rem;
      }
    `}</style>
  </div>
)

export default Card