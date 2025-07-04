export const HighlightMatch = ({
  item,
  query
}: {
  item: string
  query: string
}) => {
  const lowerItem = item.toLowerCase()
  const lowerQuery = query.toLowerCase()

  const matchIndex = lowerItem.indexOf(lowerQuery)

  if (matchIndex === -1 || !query.trim()) return item

  return (
    <>
      {item.slice(0, matchIndex)}
      <span className="text-accent dark:text-accent-dark bg-muted dark:bg-muted-dark font-semibold">
        {item.slice(matchIndex, matchIndex + query.length)}
      </span>
      {item.slice(matchIndex + query.length)}
    </>
  )
}
