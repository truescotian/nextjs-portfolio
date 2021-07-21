import React, { useState } from "react"

import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  container: {
    "& button": {
      color: "blue",
      background: "none",
      border: "none",
      cursor: "pointer"
    }
  }
})

const CreateCategory = ({ callback }) => {
  const [value, setValue] = useState("")
  const classes = useStyles()

  const onSubmit = async () => {
    try {
      const body = { title: value }
      const res = await fetch(`${window.location.origin}/api/categories/create`, {
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
    <div className={classes.container}>
      <input type="text" onChange={onChange} value={value} name="category" />
      <input type="button" onClick={onSubmit} value="Save" />
    </div>
  )
}

export default CreateCategory