import { useContext } from "react"
import { useNavigate } from "react-router-dom"

// context
import { DiaryDispatchContext } from "../App"

// components
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"

// hooks
import usePageTitle from "../hooks/usePageTitle"

// css
import "../styles/New.css"

const New = () => {
  usePageTitle("새 일기 쓰기")
  const nav = useNavigate()
  const { onCreate } = useContext(DiaryDispatchContext)

  // 새로운 일기 작성
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content)
    nav("/", { replace: true })
  }

  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        leftChild={
          <Button
            onClick={() => {
              nav(-1)
            }}
            text={"< 뒤로 가기"}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  )
}

export default New
