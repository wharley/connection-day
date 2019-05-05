const CardTitle = ({ user, url }) => (
  <div>
    <h4>{ user }</h4>
    <a href={ url } target="_blank">{ url }</a>
    <style jsx>{`
      a {
          text-decoration: none;
        }
    `}</style>
  </div>
)

export default CardTitle