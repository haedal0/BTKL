## BTKL (Better Korean Time Left)
남은 시간을 보기 좋게 만들어주는 간단한 라이브러리입니다.

### 예시
```js
import { convert } = '@haedal0/btkl'

const today = new Date()
const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)
const nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)

print(convert(today)) // 오늘
print(convert(tomorrow)) // 내일
print(convert(nextweek)) // 다음 주 ?요일
```
