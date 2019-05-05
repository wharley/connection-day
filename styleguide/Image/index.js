const Image = ({ src, alt }) => (
  <div>
    <img src={ src } alt={ alt } />
    <style jsx>{`
      img {
        width: 300px;
        height: 100px;
        background-size: cover;

        min-height: 180px;
        background-position: center;
        background-color: #ccc;
      }
    `}</style>
  </div>
)

export default Image