// util
import getEmotionImg from "../util/get-emotion-img"
import { emotionList } from "../util/constants"

// css
import "../styles/Viewer.css"

const Viewer = ({ emotionId, content }) => {
  // 현재 일기 감정 데이터(이미지, 상태 메시지)
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  )
  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImg(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
}

export default Viewer
