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
      if (visible[id]) {
        setVisible({...visible, [id]: !visible[id]})
      }
      if (!visible[id]) {
        setVisible({...visible, [id]: true})
      }
    }

    // Settings for single answer visible
    if (!multiVisible) {
      if (visible[id]) {
        setVisible({[id]: !visible[id]})
      }
      if (!visible[id]) {
        setVisible({[id]: true})
      }
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
        <div className="question">{dataItem.question}</div>
        {visible[dataItem.id] === true && <div className="answer">{dataItem.answer}</div>}
      </div>

    ))}
  </div>
}