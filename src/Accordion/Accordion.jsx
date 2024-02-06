import { useState } from "react"
import data from "./data"
import './styles.css'

export default function Accordion() {
  const [visible, setVisible] = useState('0');
  const [multiVisible, setMultiVisible] = useState(false);

  const handleSingleShow = (id) => {
    if (visible === id) {
      setVisible('0')
    } else {
      setVisible(id);
    }
  }

  return <div className="wrapper">
    <div className="card"
    onClick={() => setMultiVisible(!multiVisible)}>
      {
        multiVisible ?
        <div>Multiple Answers are allowed</div> :
        <div>Multiple Answers are NOT allowed</div>
      }
    </div>
    {data.map(dataItem => (
      <div key={dataItem.id} className="card"
      onClick={() => handleSingleShow(dataItem.id)}>
        <div className="question">{dataItem.question}</div>
        {dataItem.id === visible && <div className="answer">{dataItem.answer}</div>}
      </div>

    ))}
  </div>
}