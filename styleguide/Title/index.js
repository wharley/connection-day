const Title = ({ title }) => (
  <div>
    <div className="title">
      <h1>{ title }</h1>
    </div>
    <style jsx>{`
      h1 {
        display: grid;
        justify-content: center;
        color: #fff;
      }
      .title {
        display: grid;
        padding: 0 15px;
        margin-bottom: 1rem;

        background-color: #24292e;
      }
    `}</style>
  </div>
)

export default Title