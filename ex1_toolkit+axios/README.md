### redux-toolkit 적용하기
공식문서 : https://ko.redux.js.org/introduction/why-rtk-is-redux-today<br>
<br>

### 리덕스는 무엇인가?
- 전역의 상태를 포함하는 하나의 store (단일저장소)

### redux의 세 가지 원칙
공식 문서에 나와있는 세 가지 원칙이 redux를 가장 잘 설명해준다.
- 1. store는 오직 하나만 존재한다.<br>
동일한 데이터는 store라는 하나뿐인 데이터 공간에서 json object로 관리된다. 그래서 전체 상태를 저장하고 불러오기가 쉽다. 
- 2. store의 state는 오직 action을 통해서만 변경할 수 있다.<br>
- 3. reducer는 pure function이다.<br>
reducer는 action과 이전 state를 입력으로 받아서 새로운 state를 리턴하는 함수이다. 같은 action과 state를 입력으로 주면 항상 같은 state를 리턴한다.<br>
<br>

### 모든 데이터를 redux로 관리해야 하나?<br>
애플리케이션의 모든 상태를 redux로 관리할 필요는 없지만, <br>
다음의 경우에 해당되는 데이터는 redux로 관리하는 게 좋다.<br>
- 애플리케이션의 여러 곳에서 공유되는 데이터<br>
- 다른 페이지를 갔다가 돌아왔을 때 그 상태를 유지할 필요가 있는 데이터
<br>
<br>

### Redux-tookit
