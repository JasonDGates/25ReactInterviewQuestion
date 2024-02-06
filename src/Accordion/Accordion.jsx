import data from "./data"
import './styles.css'

export default function Accordion() {
  console.log(data)
  return <div className="wrapper">
    {data.map(dataItem => (
      <div key={dataItem.id}>{dataItem.question}</div>
    ))}
  </div>
}