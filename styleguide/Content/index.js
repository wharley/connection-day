const Content = ({ children }) => (
  <div className="content">
    { children }
    <style jsx>{`
      .content {
        padding: 15px;
      }
    `}</style>
  </div>
)

export default Content