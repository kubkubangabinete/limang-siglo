import { useParams } from 'react-router-dom'

const ChapterIPage = () => {
    const { id } = useParams()

    return (
      <div>
        Chapter I yo! with an id of {id}
      </div>
  
    )
  }
  
  export default ChapterIPage
  