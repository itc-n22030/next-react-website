import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locate/ja'

export default function ConverDate ({ dateISO }) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年mm月dd日', {
        locate: ja
      })}
    </time>
  )
}
