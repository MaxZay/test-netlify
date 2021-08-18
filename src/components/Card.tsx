import '../styles/card.css'

interface IData {
  data: any
}

export const Card: React.FC<IData> = (props) => {
  const date = Date.parse(props.data.publishedAt)
  const temp = new Date(date)
  const res = `${temp.getDate()}-${temp.getMonth()}-${temp.getFullYear()}`

  return (
    <div className="card-item">
      <div>
        <img
          className="card-item__img"
          src={props.data.urlToImage}
          alt="news_image"
          width="200"
          height="120"
        />
      </div>
      <div className="card-item__block">
        <p className="card-item__title">{props.data.title}</p>
        <p className="card-item__description">{props.data.description}</p>
        <p className="card-item__date">{res}</p>
        <p className="card-item__author">{props.data.author}</p>
      </div>
    </div>
  )
}
