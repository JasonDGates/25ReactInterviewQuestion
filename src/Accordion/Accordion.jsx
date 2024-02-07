import { useState } from "react"
import data from "./data"
import './styles.css'

export default function Accordion() {
  const [visible, setVisible] = useState({});
  const [multiVisible, setMultiVisible] = useState(false);

  console.log('Multiple Visible: ', multiVisible)

  const handleShow = (id) => {
    // settings for multiple answers visible
    if (multiVisible) {
      setVisible(visible[id] ? {...visible, [id]: !visible[id]} : {...visible, [id]: true})
    }

    // Settings for single answer visible
    if (!multiVisible) {
      setVisible(visible[id] ? {[id]: !visible[id]} : {[id]: true})
    }
  }

  return <div className="wrapper">
    <div className="card"
    onClick={() => {setMultiVisible(!multiVisible); setVisible({})}}>
      {
        multiVisible ?
        <div>Multiple Answers are allowed</div> :
        <div>Multiple Answers are NOT allowed</div>
      }
    </div>
    {data.map(dataItem => (
      <div key={dataItem.id} className="card"
      onClick={() => handleShow(dataItem.id)}>
        <div className="question">
          <div>{dataItem.question}</div>
          <span>{visible[dataItem.id] ? "-" : "+"}</span>
        </div>
        {visible[dataItem.id] === true && <div className="answer">{dataItem.answer}</div>}
      </div>

    ))}
  </div>
}