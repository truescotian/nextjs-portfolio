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
  const [value, setValue] = useState("")
  const classes = useStyles()

  const onSubmit = async () => {
    try {
      const body = { title: value }
      const res = await fetch(`http://localhost:3000/api/tags/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      setValue("")
      callback(data)
      console.debug("Created")
    } catch (error) {
      console.error(error)
    }
  }

  const onChange = e => setValue(e.target.value)

  return (
    <div className={classes.createTag}>
      <input required minLength="5" type="text" onChange={onChange} value={value} name="tag" />
      <input type="button" value="Save" onClick={onSubmit} />
    </div>
  )
}

export default CreateTag