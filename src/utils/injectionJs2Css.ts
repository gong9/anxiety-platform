interface DataType {
  [key: string]: unknown
}

const injectionJs2Css = (
  node: HTMLDivElement,
  data: DataType,
) => {
  const newData: DataType = {}

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key))
      newData[`--${key}`] = data[key]
  }

  if (node) {
    for (const key in newData) {
      if (Object.prototype.hasOwnProperty.call(newData, key)) {
        (node as HTMLElement).style.setProperty(
          key,
          newData[key] as string,
        )
      }
    }
  }
}

export default injectionJs2Css

