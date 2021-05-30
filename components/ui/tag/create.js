import React, { useState } from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  createTag: {
    "& button": {
      color: "blue",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }
})

const CreateTag = ({ callback }) => {
  const [tagValue, setTagValue] = useState("")
  const classes = useStyles()

  const onCreateTag = async () => {
    try {
      const body = {
        title: tagValue
      }
      const res = await fetch(`http://localhost:3000/api/tags/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      setTagValue("")
      callback(data)
      console.debug("Created")
    } catch (error) {
      console.error(error)
    }
  }

  const onChangeTag = e => setTagValue(e.target.value)

  return (
    <div className={classes.createTag}>
      <input type="text" onChange={onChangeTag} value={tagValue} name="tag" />
      <button onClick={onCreateTag}>Save</button>
    </div>
  )
}

export default CreateTag