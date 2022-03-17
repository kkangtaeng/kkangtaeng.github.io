var store = [{
        "title": "변수, 함수, 타입",
        "excerpt":"코드 스테이츠에 합류하게 되면서 생에 처음으로 블로그를 작성해본다. 처음이다 보니 낯설고 약간은?! 오글거리지만 최대한 틈나는 대로 작성해보려고 한다. 변수 변수 선언 및 할당 변수는 이름이 붙은 값를 의미하고 상황에 따라 변할 수 있는 값이다. 변수 할당은 “같다”라는 의미가 아닌 “대입”이란 의미의 “=”를 사용한다. let name; // 변수 선언 name =...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS1/",
        "teaser": null
      },{
        "title": "조건문, 문자열, 메소드",
        "excerpt":"조건문 조건문은 어떠한 조건을 판별하는 기준을 만드는 것이며 반드시 비교 연산자(comparison operator)가 필요하다. 비교연산자 연산자 설명 &gt; 초과 &lt; 미만 &gt;= 이상 &lt;= 이하 === 같다 !== 다르다 조건문은 다음과 같이 쓸 수 있다. if (조건1) { // 조건1이 통과할 경우 } else if (조건2) { // 조건1이 통과하지 않고...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS2/",
        "teaser": null
      },{
        "title": "반복문",
        "excerpt":"반복문 반복문은 같거나 비슷한 코드를 여러 번 실행시켜야 할 경우에 쓰는 구문이다. For 구문 조건식이 언제 끝나는지 알고 있을 때 사용한다. for(초기화; 조건식; 증감문){ 반복해서 실행할 코드 } // for 구문의 형식 let sum = 1; for(let i = 2; i &lt;= 4; i++){ // 'i++'는 'i = i +...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS3/",
        "teaser": null
      },{
        "title": "HTML구조와 문법",
        "excerpt":"HTML HTML은 구조를 담당하는 마크업 언어이다 HTML은 Tag들의 집합이다 Tag란 부등호(&lt;&gt;)로 묶인 HTML의 기본 구성 요소이다 //HTML은 트리구조 &lt;!DOCTYPE html&gt; // 이 문서가 HTML 문서임을 명시 &lt;html&gt; // html 시작 태그로, 문서 전체의 틀을 구성 &lt;head&gt; // head 태그는 문서에 사용되는 메타데이터의 집합을 의미 &lt;title&gt;Page title&lt;/title&gt; // 문서의 제목이 브라우저...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/HTML1/",
        "teaser": null
      },{
        "title": "HTML 태그 정리",
        "excerpt":"아직 태그를 사용하는 법이나 정확한 의미는 모르지만 앞으로 참고할일을 대비해 자주 사용하는 태그들만 찾아서 정리해보려고 한다!! 자주 사용되는 태그(Tag) &lt;a&gt; 태그 다른 컨텐츠와 연결되는 하이퍼링크를 정의하는 태그 href 속성으로 링크를 넣을 수 있다 //ex &lt;a href=\"https://kkangtaeng.github.io\"&gt;이동!!&lt;/a&gt; &lt;br&gt; 태그 텍스트 내의 줄바꿈을 정의하는 태그 닫는 태그없이 사용한다 &lt;button&gt; 태그 클릭할 수...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/HTML2/",
        "teaser": null
      },{
        "title": "CSS 기초",
        "excerpt":"개발자라면 최소한의 ui는 직접 만들 수 있어야 한다!!!! CSS CSS는 HTML과 같은 마크업 언어가 표현되는 방법을 결정한다. HTML이 웹 페이지의 구조를 담당한다면, CSS는 구조의 외부와 내부를 꾸미는 역활을 담당한다. CSS의 문법 구성 CSS 파일을 HTML 파일에 연결할 때는 link 태그 안에서 href 속성을 통해 파일을 연결한다. &lt;link rel=\"stylesheet\" href=\"index.css\" /&gt;...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS1/",
        "teaser": null
      },{
        "title": "CSS 계산기",
        "excerpt":"오늘은 HTML, CSS, Javascript를 이용해서 계산기를 만들어 보았다. 먼저 기본틀이 주어졌다. 이것을 CSS와 자바스크립트를 이용하여 디자인과 계산기능이 가능하게 만들어보았다. 먼저 위 계산기를 CSS를 이용하여 크기와 색상을 조금 변경해보았다. 나는 검정색을 좋아하고 깔끔한것을 선호하기 때문에 최대한 깔끔하게 만들어봤다 ㅎㅎㅎ .calculator { background-color: black; width: 350px; height: 550px; border-radius: 30px; padding: 30px 10px 0px 10px; border : solid 10px gray; border-bottom: solid 10px whitesmoke; border-top: solid 10px whitesmoke; } // 위...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS2/",
        "teaser": null
      },{
        "title": "CLI 명령어",
        "excerpt":"CLI 명령어 pwd 현재 폴더가 위치한 경로를 확인하는 명령어 mkdir + 폴더명 새로운 폴더를 생성하는 명령어 mkdir &lt;폴더이름&gt; // 명령어와 폴더의 이름을 space키로 구분 ls 현재 폴더의 포함된 폴더나 파일을 확인하는 명령어 |명령어|설명| |—|—| |ls -a|숨어있는 폴더나 파일을 포함한 모든 항목을 출력| |ls -l|폴더나 파일의 포맷을 전부 출력| |ls -la,...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC1/",
        "teaser": null
      },{
        "title": "Git 명령어",
        "excerpt":"Git 명령어 Fork 깃허브 우측 상단에 Fork 버튼을 클릭하여 유저 네임을 클릭 다른 계정의 remote repository를 자신 계정의 repository로 가지고 올 때 사용 Fork 한 시점부터 프로젝트가 자신의 repository에 복사본으로 저장됨 git clone git clone &lt;repository 주소&gt; 원격 repository를 내 local에서 이용할 수 있도록 복사할 때 사용 자신의 remote repository에...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC2/",
        "teaser": null
      },{
        "title": "배열",
        "excerpt":"배열 배열은 순서가 있는 값이다 여기서 값은 element (요소) 라고 하고 순서는 index (인덱스)라고 부른다 index 는 1이 아닌 0부터 번호를 매긴다 let myNumber = [73, 98, 86, 61, 96]; myNumber[3]; // 61 // myNumber라는 배열의 3번째 index를 조회한다 myNumber[3] = 200; // 200 // myNumber라는 배열의 3번째 index의 값을...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS4/",
        "teaser": null
      },{
        "title": "객체",
        "excerpt":"객체 객체는 의미를 가진 값이다 객체는 키와 값 쌍으로 이루어져 있고 쉼표로 구분한다 객체는 중괄호를 이용해서 만든다 let user = { firstName: \"Taeng\", lastName: \"Kkang\", city: \"Incheon\", }; // firstName = 키 , 'Taeng' = 값 // 키, 값 사이는 :(콜론)으로 구분한다 객체의 값을 사용하는 방법 Dot notation - ....","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS5/",
        "teaser": null
      },{
        "title": "CSS selector, flexbox, 단위",
        "excerpt":"CSS selector CSS selector는 CSS 의 특정 요소들을 선택하여 적용할 수 있게 한다 selector - 모든 요소를 선택한다 * { color: green; } class selector - 주어진 값을 class 속성값으로 가진 HTML 요소를 찾아 선택한다 // HTML &lt;div class=\"class1\"&gt;username&lt;/div&gt; // CSS .class {color: red} //class 선택자는 .을 사용한다 ID selector-...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS3/",
        "teaser": null
      },{
        "title": "스코프와 클로저",
        "excerpt":"스코프 (Scope) 스코프는 중괄호(블록) 또는 함수에 의해 나누어지는 유효 범위를 의미한다 바깥쪽 스코프에서 선언한 변수는 안쪽 스코프에서 사용이 가능하다 반대로, 안쪽에서 선언한 변수는 바깥쪽 스코프에서 사용이 불가능하다 let username = 'Kkangtaeng'; // 바깥쪽 if (username) { // 안쪽 let message = `Hello, ${username}!`; // 안쪽 console.log(message); // 'Hello, Kkangtaeng!' //...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS6/",
        "teaser": null
      },{
        "title": "Spread/Rest, 구조 분해",
        "excerpt":"Spread/Rest 문법 Spread 문법 주로 배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소를 넣을 때에 사용한다. function sum(x, y, z) { return x + y + z; } const number = [1, 2, 3]; sum(...numbers); // 6 // ... 을 사용해 number에 있는 배열을 풀어서 인자로 전달되어 // 1 +...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS7/",
        "teaser": null
      },{
        "title": "DOM",
        "excerpt":"DOM DOM은 Document Object Model의 약자로, HTML 요소를 javascript로 조작할 수 있다. DOM은 Javascript를 이용해서 엘리먼트의 속성값을 얻어내거나, 변경하는 방법이다. HTML의 구조가 Javascript 객체의 구조와 같이 트리구조로 되어 있어 DOM의 브라우저에 접근하기 가장 바람직하다. HTML에 Javascript 적용하기 HTML에서 Javascript를 적용하기 위해서는 &lt;script&gt; 태그를 이용한다. &lt;script src=\"index.js\"&gt;&lt;/script&gt; createElement() - 새로운 element를...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS8/",
        "teaser": null
      },{
        "title": "고차함수",
        "excerpt":"일급 객체 자바스크립트에서 함수는 특별한 대우를 받는 일급 객체이다. 자바스크립트에서 함수는 변수에 할당할 수 있다. 다른 함수의 인자로 전달될 수 있다. 다른 함수의 결과로서 리턴될 수 있다. 함수를 변수에 할당할 수 있기 때문에, 함수를 배열의 요소나 객체의 속성값으로 저장할 수 있다. 이는 함수를 데이터(string, number, boolean, array, object) 를 다룰...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS9/",
        "teaser": null
      },{
        "title": "React 기초",
        "excerpt":"React React는 프론트엔드 개발을 위한 Javascript 오픈소스 라이브러리 이다. React의 3가지 특징 선언형 프로그래밍 코드를 자세히 분석하지 않아도 코드를 분명히 알 수 있게 작성하는 것을 의미한다. React는 한 페이지를 보여주기 위해 HTML, CSS, Javascript로 나눠서 적기보다 하나의 파일에 JSX를 활용해 명시적으로 작성하여 코드를 작성할 수 있다. 컴포넌트 기반 하나의 기능...","categories": ["React"],
        "tags": [],
        "url": "/react/React1/",
        "teaser": null
      },{
        "title": "React SPA, React Router",
        "excerpt":"SPA 서버로부터 모든 새로운 페이지를 불러오지 않고 페이지 갱신에 필요한 데이터만 받아 그 정보를 기준으로 현재의 페이지를 업데이트하는 웹 어플리케이션이다. SPA의 장점 전체 페이지가 아니라 필요한 부분의 데이터만 받아서 화면을 업데이트 하므로 빠르게 반응한다. 서버에서 요청 받은 데이터만 넘겨주면 되기 때문에 서버 과부하 문제가 현저히 줄어든다. 전체 페이지를 렌더링 할...","categories": ["React"],
        "tags": [],
        "url": "/react/React2/",
        "teaser": null
      },{
        "title": "React Props, State",
        "excerpt":"Props 컴포넌트의 속성을 의미한다. props는 성별이나 이름처럼 변하지 않는 외부로부터 전달받은 값으로, 웹 어플리케이션에서 해당 컴포넌트가 가진 속성에 해당한다. Props의 특징 props는 부모(상위) 컴포넌트로부터 전달받은 값이다. props는 어떤 타입의 값도 넣어 전달할 수 있도록 객체의 형태를 가진다. props는 함부로 변경될 수 없는 읽기 전용 객체이다. Props의 사용 방법 하위 컴포넌트에...","categories": ["React"],
        "tags": [],
        "url": "/react/React3/",
        "teaser": null
      },{
        "title": "객체 지향",
        "excerpt":"객체 지향 프로그래밍 객체 지향 프로그래밍은 데이터와 기능을 한곳에 묶어서 처리한다. 속성과 메소드가 하나의 객체라는 개념에 포함되며, 이는 자바스크립트 내장 타입은 object와는 다르게, class라고 한다. 클래스와 인스턴스 객체 지향 프로그래밍은 하나의 모델이 되는 청사진을 만들고, 그 청사진을 바탕으로 한 객체를 만드는 프로그래밍 패턴인데, 이 때, 청사진을 바탕으로 한 객체는 인스턴스(instance)라고...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS10/",
        "teaser": null
      },{
        "title": "재귀",
        "excerpt":"재귀 함수 재귀함수란 함수가 자신을 호출하여 반복하는 함수이다. 재귀함수는 탈출조건이 있어야한다. 탈출 조건이 없으면 무한반복을 하고, 탈출조건을 작성하여 도달하면 그 함수를 멈추고 탈출한다. 재귀는 언제 사용할까? 주어진 문제를 비슷한 구조의 더 작은 문제로 나눌 수 있는 경우 중첩된 반복문이 많거나 반복문의 중첩 횟수를 예측하기 어려운 경우 반복문을 재귀함수로 바꾸기 자연수로...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS11/",
        "teaser": null
      },{
        "title": "JSON",
        "excerpt":"JSON JSON은 서로 다른 프로그램 사이에서 데이터를 교환하기 위한 포맷이다. 객체는 타입변환을 이용해 String으로 변환할 경우 객체 내용을 포함하지 않아 [object object]라는 결과를 리턴한다. 따라서 객체를 JSON의 형태로 변환하거나 JSON을 객체의 형태로 변환하는 방법을 사용한다. JSON.stringify 객체 타입을 JSON으로 변환한다. 이같은 과정을 직렬화 한다고 한다. let message = { name:...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS12/",
        "teaser": null
      },{
        "title": "자료구조 기초 1",
        "excerpt":"Stack 데이터를 순서대로 쌓는 자료구조를 의미한다. Stack의 특징은 입력과 출력이 하나의 방향으로 이루어지는 제한적 접근에 있다. 가장 먼저 들어간 데이터는 가장 나중에 나오고, 가장 나중에 들어간 데이터는 가장 먼저 나올 수 있다. 이것을 LIFO(Last In First Out) 또는 FILO(First In Last Out)라고 한다. // 예시 let stack = []; stack.push(1);...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL1/",
        "teaser": null
      },{
        "title": "자료구조 기초 2",
        "excerpt":"Tree traversal 특정 목적을 위해 트리의 모든 노드를 한번씩 방문하는 것을 트리 순회라고 한다. 트리 순회의 종류 전위 순회 루트에서 시작해 왼쪽의 노드들을 순차적으로 방문하고, 왼쪽의 노드 탐색이 끝나면 오른쪽 노드를 방문한다. A -&gt; B -&gt; D -&gt; E -&gt; C -&gt; F -&gt; G 중위 순회 루트에서 시작해 왼쪽의...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL2/",
        "teaser": null
      },{
        "title": "[Stack] 브라우저 뒤로가기 앞으로가기",
        "excerpt":"// 문제 개발자가 되고 싶은 김코딩은 자료구조를 공부하고 있습니다. 인터넷 브라우저를 통해 스택에 대해 검색을 하면서 다양한 페이지에 접속하게 되었는데 \"뒤로 가기\", \"앞으로 가기\"를 반복하면서 여러 페이지를 참고하고 있었습니다. 그런데 새로운 페이지를 접속하게 되면 \"앞으로 가기\" 버튼이 비활성화돼서 다시 보고 싶던 페이지로 갈 수 없었습니다. 이러기를 반복하다가 김코딩은 스택 자료구조를...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL3/",
        "teaser": null
      },{
        "title": "[Queue] 박스 포장",
        "excerpt":"// 문제 마트에서 장을 보고 박스를 포장하려고 합니다. 박스를 포장하는 데는 폭이 너무 좁습니다. 그렇기에 한 줄로 서 있어야 하고, 들어온 순서대로 한 명씩 나가야 합니다. 불행 중 다행은, 인원에 맞게 포장할 수 있는 기구들이 놓여 있어, 모두가 포장을 할 수 있다는 것입니다. 짐이 많은 사람은 짐이 적은 사람보다 포장하는...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL4/",
        "teaser": null
      },{
        "title": "비동기",
        "excerpt":"동기(Synchronous) 요청에 대한 결과가 동시에 일어난다 즉, 요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작이 살행되는 방식을 말한다. 동기(Synchronous)의 예시 1. 손님 1이 아메리카노를 주문한다. 2. 접수를 받은 직원이 아메리카노를 만든다. 3. 직원이 손님 1에게 아메리카노를 전달한다. 4. 손님 2가 카페라떼를 주문한다. 5. 접수를 받은 직원이 카페라떼를 만든다. 6....","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS13/",
        "teaser": null
      },{
        "title": "fetch",
        "excerpt":"fetch fetch API는 네트워크를 통해 URL로 요청하는 것을 가능하게 해주는 API이다. fetch 사용법 fetch는 인자로 URL을 받고, Promise 타입의 객체를 반환한다. let url = \"https://test.com/testing\"; fetch(url) .then((res) =&gt; res.json()) // 자체적으로 있는 json()메소드를 사용해, 응답을 JSON형태로 변환시켜 다음 promise로 전달 .then((json) =&gt; console.log(json)) // 콘솔에 json을 출력 .catch((err) =&gt; console.log(err));...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS14/",
        "teaser": null
      },{
        "title": "[Queue] 프린터",
        "excerpt":"// 문제 김코딩은 최근 인쇄할 일이 많이 생겨 창고에서 안 쓰던 프린터를 꺼냈습니다. 이 프린터의 성능을 테스트하여 새로운 프린터를 장만할지 결정하려고 합니다. 김코딩은 프린터의 인쇄 작업 목록의 크기와 최대 용량을 가정하고 각기 다른 용량의 문서를 차례대로 인쇄하여 모든 문서가 인쇄되는데 최소 몇 초가 걸리는지 테스트하기로 했습니다. 프린터 인쇄 작업 목록의...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL5/",
        "teaser": null
      },{
        "title": "HTTP와 네트워크",
        "excerpt":"클라이언트 - 서버 아키텍처 2티어 아키텍처 리소스를 사용하는 앱과 리소스가 존재하는 곳을 분리시킨 것을 말한다. 즉, 리소스를 사용하는 앱(클라이언트)에서 리소스가 존재하는 곳(서버)로 요청을 보내고, 그 보낸 요청에 따라 리소스가 존재하는 곳(서버)는 응답을 하는 것을 말한다. 3티어 아키텍처 하지만 서버는 리소스를 전달만 해줄뿐, 저장하고 있지 않고 데이터베이스에 리소스를 저장하고 있다. 이처럼,...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC3/",
        "teaser": null
      },{
        "title": "[Graph] 인접 행렬 생성하기",
        "excerpt":"// 문제 방향이 있는 간선과 방향이 없는 간선들의 목록들을 받아 2차원 배열의 인접행렬을 반환하는 함수를 작성하세요. // 조건 각 간선은 3가지 정보를 담고 있습니다. - 0번째: 간선의 시작 정점 (0 이상의 정수) - 1번째: 간선의 도착 정점 (0 이상의 정수) - 2번째: 방향성 ('undirected' 일시 무향, 'directed' 일시 방향) //...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL6/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 핸드폰 번호 가리기",
        "excerpt":"알고리즘 공부를 하고 너무 어려웠다.. 아직도 익숙하지 않고 프로그래밍적 사고?!를 하기에 익숙하지 않은것 같아 알고리즘 문제를 틈틈히 조금씩 풀어보려고 한다!! 오늘부터 천천히 가즈아!! 풀이 slice 메소드를 이용해 뒤번호와 나머지 앞번호를 나누고 앞번호 길이만큼 *로 바꾼후 리턴한다. function solution(phone_number) { let back = phone_number.slice(-4); let front = phone_number.slice(0, -4); let star...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL7/",
        "teaser": null
      },{
        "title": "React의 데이터 흐름과 비동기 요청",
        "excerpt":"React 데이터 흐름 React의 개발 방식은 페이지 단위가 아닌, 컴포넌트 단위로 시작한다. 먼저 컴포넌트를 만들고, 그 컴포넌트를 이용하여 페이지를 조립하여 만든다. 즉, React는 상향식(bottom-up)으로 앱을 만든다. 하지만 데이터는 위에서 아래로 하향식(bottom-down)으로 컴포넌트 바깥에서 props를 이용해 데이터를 마치 인자 처럼 전달한다. 즉, 데이터를 전달하는 주체는 부모 컴포넌트이다. 이는 단항향 데이터 흐름을...","categories": ["React"],
        "tags": [],
        "url": "/react/React4/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 하샤드 수",
        "excerpt":"풀이 입력받은 숫자를 문자열로 변환 후 반복문을 돌려 자릿수 합을 구한 뒤 해당 수로 나누어 떨어지는지 확인한다. function solution(x) { let word = String(x); let result = 0; for (let n = 0; n &lt; word.length; n++) { result += Number(word[n]); } if (x % result === 0) { return...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL8/",
        "teaser": null
      },{
        "title": "Web Server 기초",
        "excerpt":"Node.js 노드를 통해 다양한 자바스크립트 어플리케이션을 실행할 수 있으며, 서버를 실행하는데 제일 많이 사용되는 Javascript 런타임이다. Express.js Node.js 환경에서 웹 서버, 또는 API 서버를 제작하기 위해 사용되는 프레임워크이다. Routing 라우팅은 어플리케이션 URI 및 특정한 HTTP 요청 메소드(GET, POST 등)인 특정 엔드포인트에 대한 클라이언트 요청에 어플리케이션이 응답하는 방법을 결정하는 것을 말한다....","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS15/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 제일 작은 수 제거하기",
        "excerpt":"   풀이   Math.min 과 filter 함수를 사용해 보았다.   function solution(arr) {   if (arr.length === 1) {     return [-1];   }   let small = Math.min(...arr);   return arr.filter((ele) =&gt; {     return ele !== small;   }); }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL9/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 문자열 내 p와 y의 개수",
        "excerpt":"풀이 전부 소문자로 변경 후 각 개수를 구하고 같은지 다른지 확인한다! function solution(s){ let lowerCase = s.toLowerCase() let smallp = 0 let smally = 0 for(let n = 0 ; n &lt; s.length ; n++) { if(lowerCase[n] === 'p') { smallp++ } else if(lowerCase[n] === 'y') { smally++ } }...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL10/",
        "teaser": null
      },{
        "title": "컴포넌트 디자인",
        "excerpt":"CDD(Component Driven Development) 디자인을 부품 단위로 UI 컴포넌트를 만들어 조립해 나가는 개발을 하는 방법이다. Storybook Component Explorer(컴포넌트 탐색기) 중 하나로 UI 개발을 하기 위한 도구이다. Storybook과 같은 UI 개발 도구를 사용하는 이유 독립적인 개발 환경으로 어플리케이션의 다양한 상황에 구애받지 않고 UI 컴포넌트를 집중적으로 개발할 수 있다. 회사의 UI 라이브러리로써 사용하거나,...","categories": ["React"],
        "tags": [],
        "url": "/react/React5/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 약수의 개수와 덧셈",
        "excerpt":"    풀이   function solution(left, right) {   let result = 0   for(let i = left ; i &lt;= right ; i++) {       if(Number.isInteger(Math.sqrt(i))) {           result -= i       } else {           result += i       }   }     return result }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL11/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.2 JadenCase 문자열 만들기",
        "excerpt":"   풀이   function solution(s) {     let result = ''     result += s[0].toUpperCase()     for(let n = 1 ; n &lt; s.length ; n++) {         if(s[n-1] === ' ') {             result += s[n].toUpperCase()         }         else {             result += s[n].toLowerCase()         }     }     return result }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL12/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.2 행렬의 곱셈",
        "excerpt":"풀이 function solution(arr1, arr2) { let result = [] for(let i = 0 ; i &lt; arr1.length ; i++) { let arr = [] for(let n = 0 ; n &lt; arr2[0].length ; n++) { let sum = 0 for(let m = 0 ; m &lt; arr1[0].length ; m++) {...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL13/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.2 최댓값과 최솟값",
        "excerpt":"   풀이   function solution(s) {     let num = s.split(' ')     let min = Math.min(...num)     let max = Math.max(...num)     let result = `${min} ${max}`     return result }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL14/",
        "teaser": null
      },{
        "title": "Redux",
        "excerpt":"Redux Javascript 상태관리 라이브러리이다. Redux의 3가지 원칙 Single source of truth 동일한 데이터는 항상 같은 곳에서 가지고 온다. 즉, 데이터를 저장하는 Store라는 공간이 있다는 것이다. State is read-only React에서는 setState를 통해 상태 변경이 가능했지만 Redux는 Action이라는 객체를 통해서만 상태를 변경할 수 있다. Changes are made with pure functions 변경은 순수함수로만...","categories": ["React"],
        "tags": [],
        "url": "/react/React6/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.2 최솟값 만들기",
        "excerpt":"   풀이   function solution(A,B){     let sortA = A.sort((a,b) =&gt; a - b)     let sortB = B.sort((a,b) =&gt; b - a)     let result = 0     for(let n = 0 ; n &lt; A.length ; n++) {         result += sortA[n] * sortB[n]     }     return result }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL15/",
        "teaser": null
      },{
        "title": "Linux 사용권한과 환경변수",
        "excerpt":"사용권한 명령어 ls -l을 입력하면 파일의 권한을 알 수 있다. 처음 시작은 -와 d로 각각 not directory와 directory로 파일이면 - 폴더이면 d를 나타낸다. 다음으로 r은 read permission으로 일기 권한, w는 write permission으로 쓰기 권한, x는 execute permission으로 실행 권한을 나타낸다. user: 파일의 소유자로 기본적으로 파일을 만든 사람이 소유자가 된다. 따라서...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC4/",
        "teaser": null
      },{
        "title": "Big-O와 Greedy",
        "excerpt":"Big-O Big-O 표기법은 입력값의 변화에 따라, 연산을 실행할 때, 연산 횟수에 비해 소요되는 시간을 표기하는 방법이다. O(1) - constant complexity 입력값의 크기와 상관없이, 즉시 출력값을 출력하는 시간을 가진 알고리즘이다. function 0_1_algorithm(arr, index) { return arr[index]; } let arr = [1, 2, 3, 4, 5]; let index = 1; let result...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL16/",
        "teaser": null
      },{
        "title": "수학 알고리즘",
        "excerpt":"순열과 조합 [A, B, C, D, E]로 이루어진 5장의 카드 중 3장을 선택하여 나열하려고 한다. 순열 - 순서를 생각하며 3장을 선택한다. 위 조건을 만족하려면, 다음과 같은 방법으로 경우의 수를 구한다. 첫번째 나열하는 카드를 선택하는 방법에는 5가지가 있다. 첫번째 카드를 나열하고 난 다음, 두번째 카드를 선택하는 방법에는 4가지가 있다. 두번째 카드를...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL17/",
        "teaser": null
      },{
        "title": "SQL 데이터베이스 명령어",
        "excerpt":"SQL SQL(Structured Query Language)은 데이터베이스 용 플고그래밍 언어로, 데이터베이스에 Query를 보내 원하는 데이터를 가져오거나 삽입할 수 있다. 데이터가 구조화된 테이블을 사용하는 데이터베이스에서 활용할 수 있다. (구조화된 Query 언어이다.) 데이터베이스 명령어 데이터베이스 생성, 삭제 데이터베이스 생성 CREATE DATABASE 이름; 데이터베이스 삭제 DROP DATABASE 이름; 데이터베이스 사용 데이터베이스를 이용해 테이블을 만들거나 수정,...","categories": ["Database"],
        "tags": [],
        "url": "/database/DB1/",
        "teaser": null
      },{
        "title": "SQL 기본 명령어",
        "excerpt":"SELECT SELECT 명령어는 데이터베이스로부터 데이터를 선택하여 불러온다. SELECT DISTINCT 고유한 값만을 데이터베이스로부터 불러온다. FROM 결과를 가져올 데이터베이스 테이블을 명시한다. SELECT 레코드명 FROM 테이블명 //예시 SELECT name FROM Users // User 테이블로 부터 name 열을 불러온다. SELECT * FROM Users // User 테이블의 모든 정보를 불러온다. WHERE 필터역활을 하는 쿼리문으로, 선택적으로...","categories": ["Database"],
        "tags": [],
        "url": "/database/DB2/",
        "teaser": null
      },{
        "title": "데이터베이스 설계 및 SQL 내장함수",
        "excerpt":"관계형 데이터베이스 구조화된 데이터는 하나의 테이블로 표현할 수 있고, 사전에 정의된 테이블을 사용하는 데이터베이스 이다. 관계형 데이터베이스의 키워드 데이터 (data) - 각 항목에 저장되는 값 테이블 (table) - 사전에 정의된 열의 데이터 타입대로 작성된 데이터가 행으로 축적되는 표 칼럼, 열 (column, field) - 테이블의 열 레코드, 행 (record, tuple) -...","categories": ["Database"],
        "tags": [],
        "url": "/database/DB3/",
        "teaser": null
      },{
        "title": "[Greedy] 짐나르기",
        "excerpt":"// 문제 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다. 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL18/",
        "teaser": null
      },{
        "title": "MVC",
        "excerpt":"MVC (Model, View, Controller) Model, View, Controller 의 약자로 애플리케이션을 구현할 때 3부분으로 구분을 해서 효율적인 구현과 코드에 대한 유지보수를 편하게 하기 위한 코드 구성방식으로 소프트웨어 디자인 패턴중 하나 이다. Model 데이터와 관련된 일을 하는 부분으로 데이터베이스와 연결되어 있어 데이터를 핸들링하는 역활을 한다. View 사용자한테 보여지는 부분으로 시각적으로 보여주는 역활을...","categories": ["Database"],
        "tags": [],
        "url": "/database/DB4/",
        "teaser": null
      },{
        "title": "[Greedy] 편의점 알바",
        "excerpt":"// 문제 편의점에서 아르바이트를 하고 있는 중에, 하필이면 피크 시간대에 손님에게 거스름돈으로 줄 동전이 부족하다는 것을 알게 되었습니다. 현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원으로 오름차순으로 정렬되어 있고, 각 동전들은 서로 배수 관계에 있습니다. 동전 개수를 최소화하여 거스름돈 K를 만들어야 합니다. 이때, 필요한 동전 개수의 최솟값을 구하는...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL19/",
        "teaser": null
      },{
        "title": "ORM",
        "excerpt":"ORM Javascript의 객체와 클래스를 ORM을 통해 데이터베이스의 엔티티, 레코드 들을 다루는 일을 한다. 즉, Javascript의 객체와 관계형 데이터베이스의 중개자 역활을 한다. Sequelize Promise기반의 Node.js ORM이다. Sequelize 설치 npm install --save sequelize Sequelize-cli 설치 Migration을 할 수 있도록 돕는 툴로, CLI에서 Model을 생성해 주거나, 스키마 적용을 할 수 있도록 한다. npx...","categories": ["Database"],
        "tags": [],
        "url": "/database/DB5/",
        "teaser": null
      },{
        "title": "MongoDB",
        "excerpt":"MongoDB      대표적인 NoSQL document 데이터베이스 이다. document 데이터베이스는 데이터를 테이블이 아닌, 문서처럼 저장하는 데이터베이스를 말한다. 일반적으로 도큐먼트 데이터베이스에서는 JSON 유사 형식으로 데이터를 문서화하며, 각각의 도큐먼트는 데이터를 필드-값 의 형태로 가지고 있고, 컬렉션이라고 하는 그룹으로 묶어서 관리합니다.   ","categories": ["Database"],
        "tags": [],
        "url": "/database/DB6/",
        "teaser": null
      },{
        "title": "인증/보안 1",
        "excerpt":"HTTPS HTTP에 secure 즉, 보안을 추가한 것으로, 기본 골격이나 목적 등은 HTTP와 같지만 데이터를 주고받는 과정에서 내용을 암호화하여 데이터를 전송하는 방법으로 보안성을 추가한 것이다. 인증에서는 SSL 혹은 TLS라는 알고리즘을 이용하여 암호화 한다. SSL: 암호화 기반 인터넷 보안 프로토콜로서, 개인정보 보호, 인증, 무결성을 인터넷 통신에 제공하는 역활을 한다. TLS: 인증서 브라우저는...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC5/",
        "teaser": null
      },{
        "title": "인증/보안 2",
        "excerpt":"토큰 (Token) 토큰 기반 인증 (Token-based Authentication) 세션 기반 인증에서 매 요청마다 데이터베이스를 살펴보는 부담을 덜어내기 위해 클리이언트에서 인증 정보를 보관하는 방법으로 토큰 기반 인증이 고안되었다. JWT (JSON Web Token) 클라이언트에서 XSS, CSRF 공격에 노출이 될 위험으로 보호하기 위해 JSON 포맷으로 사용자에 대한 속성을 저장하는 웹 토큰이다. JWT의 종류 Access...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC6/",
        "teaser": null
      },{
        "title": "인증/보안 3",
        "excerpt":"Oauth 인증을 위한 표준 프로토콜의 한 종류로서 보안된 리소스에 액세스 하기위해 클라이언트에게 권한을 제공하는 프로세스를 단순화하는 프로토콜 중 한 방법이다. 즉, 사용자 정보를 가지고 있는 웹서비스에서 사용자의 인증을 대신해주고, 접근 권한에 대한 토큰을 발급한 후, 이를 이용해 서버에서 인증이 이루어진다. Oauth 용어 용어 설명 Resource Owner 엑세스 중인 리소스의 유저...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC7/",
        "teaser": null
      },{
        "title": "컴퓨터 공학 기초 1",
        "excerpt":"문자열 유니코드 (Unicode) 유니코드(Unicode)는 유니코드 협회가 제정하는 전 세계의 모든 문자를 컴퓨터에서 일관되게 표한하고 다룰 수 있도록 설계된 산업 표준이다. 이 표준에는 ISO 10646 문자 집합, 문자 인코딩, 문자 정보 데이터베이스, 문자를 다루기 위한 알고리즘 등을 포함하고 있다. ASCII 문자 영문 알파벳을 사용하는 대표적인 문자 인코딩이다. 7bit로 모든 영어 알파벳을...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC8/",
        "teaser": null
      },{
        "title": "컴퓨터 공학 기초 2",
        "excerpt":"가비지 컬렉션 가비지 컬렉션은 프로그램에서 더 이상 사용하지 않는 메모리를 자동으로 정리하는 것을 말한다. (Java, C#, Javascript 등이 있다.) 대표적인 가비지 컬렉션 방법 트레이싱 한 객체에 flag를 두고, 가비지 컬렉션 사이클마다 flag에 표시 후 삭제하는 mark and sweep 방법이다. 객체에 in-use flag를 두고, 사이클마다 메모리 관리자가 모든 객체를 추적해서 사용...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC9/",
        "teaser": null
      },{
        "title": "네트워크 심화",
        "excerpt":"IP와 IP Packet 클라이언트와 서버는 IP(인터넷 프로토콜) 주소를 컴퓨터에 부여하여 이를 이용해 통신한다. IP는 지정한 IP 주소에 패킷(Packet)이라는 통신 단위로 데이터를 전달한다. IP 패킷은 소포로 비유하여 보면 우체국 송장처럼 전송 데이터를 전송하기 위해 출발지 IP, 목적지 IP와 같은 정보가 포함되어 있다. 패킷 단위로 전송을 하면 목적지 IP에 도달하기 위해 서로...","categories": ["TIL-ETC"],
        "tags": [],
        "url": "/til-etc/TIL-ETC10/",
        "teaser": null
      },{
        "title": "개발자 환경 초기설정",
        "excerpt":"용량과 작은 문제로 인해 포맷을 하게되어서 초기설정을 다시 하게되면서 블로그를 작성해보았다. 초기설정은 어려워… 개발자 환경 설정 — Xcode Command Line Tools homebrew를 설치하기 이전에 Xcode Command Line Tools를 먼저 설치해야한다 xcode-select--install // 위 명령어를 입력해 설치를 진행한다 — Homebrew homebrew 사이트 : https://brew.sh/ /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\" // 위...","categories": ["Etc"],
        "tags": [],
        "url": "/etc/macsetting/",
        "teaser": null
      },{
        "title": "Err_Handling 1",
        "excerpt":"코드 작성 중에 axios 통신으로 데이터(배열형태)를 받아와서 map 함수를 사용하려는데 갑자기.. TypeError: Cannot read properties of undefined (reading 'map') 라는 오류가 발생하였다. 분명히 잘못된것이 없는데 계속 오류가 떠서 찾아보니 React에서 처음 렌더링이 되면서 return에서 map함수를 반복실행할 때 처음에 데이터가 없어서 ‘undefined’인 상태에서 실행되면서 ‘undefined’를 map하려고 하니 오류가 났던것이었다. 그래서 해결책으로...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/err1/",
        "teaser": null
      },{
        "title": "Project_Log 1",
        "excerpt":"오늘 한것 회원삭제 페이지의 CSS와 대략적인 틀을 구성하였다. 로그인이 되지 않았을때 띄울 로그인 요청 모달을 만들었다. 따로 api를 요청해서 데이터를 받아올 수 없기 때문에 프로젝트에 사용될 데이터를 검색하고 정리하였다. 힘든 점 media 쿼리를 사용해 반응형으로 페이지를 구성하는게 어려웠다. 다른 사이트의 페이지처럼 모바일에도 대응할 수 있도록 최소넓이 320px을 맞추고 하는것이 다른...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log1/",
        "teaser": null
      },{
        "title": "Err_Handling 2",
        "excerpt":"PR을 보내고 깃허브 페이지에서 merge를 하려고 하니 충돌로 인해 웹에서 merge가 불가능하다고 나왔다. 이제까지 팀원들과 깃허브에서 merge를 했기때문에 갑작스런? 오류에 많이 당황했다.. 충돌이 많이 일어나?! 웹에서 불가능한것 같았다. 웹에서 불가능 하단것을 보고 local에서 merge를 한 후 다시 PR을 보내면 되지않을까하는 생각이 들었다. 그래서 현재 branch에서 dev branch로 이동 후 다시...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/err2/",
        "teaser": null
      },{
        "title": "Project_Log 2",
        "excerpt":"오늘 한것 로그인 후 로그인했을 때와 로그아웃 했을 때 상세페이지를 구현하였다. localStorage에 로그인 유무, 유저정보, 토큰을 저장했다!! const isLogin = window.localStorage.getItem(\"isLogin\"); // 로그인 유무 const loginUserInfo = window.localStorage.getItem(\"loginUserInfo\"); // 유저정보 const accessToken = window.localStorage.getItem(\"accessToken\"); // 토큰 useEffect(() =&gt; { window.localStorage.setItem(\"loginUserInfo\", loginUserInfo); }, [loginUserInfo]); useEffect(() =&gt; { window.localStorage.setItem(\"accessToken\", accessToken); }, [accessToken]);...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log2/",
        "teaser": null
      },{
        "title": "Project_Log 3",
        "excerpt":"오늘 한것 가격표시 컴포넌트에서 가격 클릭시 클릭한 value값을 불러와 구독 추가 버튼 클릭시 오류없이 axios 요청 후 버튼 상태 변경 및 데이터 베이스 정보 추가 로그인 유무에 따른 구독 버튼 구현 대략적인 더미데이터 추가 힘든 점 서버와의 통신에서 잦은 오류가 계속 발생하였다ㅠ 필수 데이터를 빼고 보내거나 서버에서 와야하는 데이터가 안오거나...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log3/",
        "teaser": null
      },{
        "title": "Axios multiple request",
        "excerpt":"프로젝트를 하던 중에, 한 컴포넌트 안에서 axios 요청을 두번 보내야 하는 상황이 생겼다. useEffect(() =&gt; { axios .get(`/scrap/${ServiceId}`, { headers: { authorization: `Bearer ${state.accessToken}` }, }) .then((res) =&gt; { setIsScrap(isScrap.data.isScrap); }); }); useEffect(() =&gt; { axios .get(`/subscribe/${ServiceId}`, { headers: { authorization: `Bearer ${state.accessToken}` }, }) .then((res) =&gt; { setIsSub(isSub.data.isSubscribe); });...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/etc1/",
        "teaser": null
      },{
        "title": "Project_Log 4",
        "excerpt":"오늘 한것 배포 작업을 완료했다!!! 힘든 점 로드밸런서 설정 중 ec2와 연결하기 위해 health 체크를 하는데 이 상황에서 계속 unhealthy 상태이고 health status에 404 에러로 health 체크가 실패했다고 나왔다… 왜 연결이 안될까 찾다가 health 체크하는 코드가 없었던 것을 알아챘다!! route.use(\"/health\", (req, res, next) =&gt; { res.send({\"title\": \"success\"}); }); routes 폴더의...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log4/",
        "teaser": null
      },{
        "title": "Project_Log 5",
        "excerpt":"오늘 한것 상세보기 페이지를 redux를 최상위에서 사용하기로 했다가 오류가 있어서 다시 해당 페이지에서 axios요청을 보내는 코드로 수정하였다. 이유 redux를 사용하기로 했는데 막상 보니 한 페이지당 1단계의 자식 컴포넌트들 밖에 없었고 1단계에서의 상태 공유면 props로 바로 내려주는것이 더 쉽지 않을까? 생각이 들었다 redux를 사용하는 이유는 크게 많은 컴포넌트들로 props 사용이 불편하고...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log5/",
        "teaser": null
      },{
        "title": "Project_Log 6",
        "excerpt":"오늘 한것 상세보기 페이지에서 모든 기능을 완료하였고 추가적인 css 작업과 약간의 수정만 하면 모두 완성된다!! 모두보기 페이지에서 필터링 기능구현을 시도하였다. 힘든 점 모두보기 페이지에서 필터링하는 기능이 많이 어려운것 같다.. 알고리즘 푸는 느낌이기도하고.. 한가지 기준만 적용이되면 쉬웠지만 3가지의 기준과 각 기준에서의 항목을 적용하여 필터링하는것이 생각보다 복잡했다… const filterServices = (category, price,...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log6/",
        "teaser": null
      },{
        "title": "Err_Handling 3",
        "excerpt":"new Date()로 현재 시간을 할당하고 slice를 사용하여 잘라 사용하려 했지만 에러가 났다. TypeError: date.slice is not a function 왜 slice가 안될까.. 타입을 확인해보니 웬걸 객체 타입이었다..그래서 toString을 이용하여 문자열로 변경 후 사용하였지만 추가적으로 변경하는 방법이 더 있었다!! toString() - 'Tue Dec 14 2021 01:58:19 GMT+0900 (한국 표준시)' toDateString() - 'Tue...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/err3/",
        "teaser": null
      },{
        "title": "Project_Log 7",
        "excerpt":"오늘 한것 모두보기 페이지 필터링 기능 구현완료!! 상세보기 페이지 기능 구현 완료 및 추가적으로 발생한 버그 수정 회원정보변경 페이지 비밀번호 변경 컴포넌트 기능 구현 완료 회원정보변경 페이지 회원정보(닉네임, 프로필사진) 컴포넌트 대략적인 기능 구현 힘든 점 필터기능을 구현하는게 조금 힘들었다.. 3가지 기준에서 각 항목을 전부 적용해야 했기에 접근방법이 어려웠던것 같다. 처음에는...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log7/",
        "teaser": null
      },{
        "title": "Project_Log 8",
        "excerpt":"오늘 한것 상세보기 페이지 반응형 및 css 추가 수정 회원정보변경 페이지 s3를 이용한 이미지 서버 구축 및 연결 회원정보변경 페이지 회원정보(닉네임, 프로필사진) 컴포넌트 axios 통신 및 기능 구현 회원삭제 페이지 axios 통신 및 기능 구현 힘든 점 css는 계속 어렵다..ㅎㅎㅎ 일단 반응형을 위해 미디어쿼리를 사용해 min-width로 768px을 주어 작성하였고 css...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log8/",
        "teaser": null
      },{
        "title": "AWS S3 이미지 서버 구축 및 연결",
        "excerpt":"이미지를 업로드 하고 배포환경에서도 이미지를 불러오려면 어떻게 해야될지 고민하다가 url을 받아 그 url을 데이터베이스에 저장하고 불러올 수 있지 않을까 고민하던 중 S3 이미지 서버 구축을 하여 연결할 수 있다는 것을 알았다 - AWS S3 이미지 서버 구축 1. IAM 역활 설정 IAM 메뉴에 들어와 AWS에 접근할 수 있는 권한을 먼저...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/etc2/",
        "teaser": null
      },{
        "title": "Project_Log 9",
        "excerpt":"오늘 한것 전체적인 CSS 수정 및 반응형 작업을 했다. 힘든 점 힘든점 까진 아니였지만 label태그에서 margin-top값이 들어가질 않았다… 찾아보니 display:inline-flex를 넣으면 된다고 하여 넣어보니 이상없이 들어갔다. @media only screen and (min-width: 768px) { margin: 0; display: flex; div { label { display: inline-flex; margin-top: 3rem; } } button { margin-top:...","categories": ["Subllet"],
        "tags": [],
        "url": "/subllet/log9/",
        "teaser": null
      },{
        "title": "호이스팅과 var, let, const의 차이점",
        "excerpt":"호이스팅 (Hoisting) 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 Javascript 고유의 특징을 변수 호이스팅이라고 한다. Javascript에서 선언문이 최상위로 끌어올려지는 것을 의미한다. 1. console.log(x); // undefined 2. var x; // 변수 선언문보다 변수를 참조하는 코드가 앞에 있다. Javascript 코드는 한줄 씩 순차적으로 실행되므로 1번이 가장 먼저 실행되고 순차적으로 2번이 실행된다....","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON1/",
        "teaser": null
      },{
        "title": "Javascript와 Node.js의 차이점",
        "excerpt":"Javascript HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어로 client에 대한 개발을 하는 것이다. Node.js 구글 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임이다. 브라우저의 자바스크립트 엔진에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서도 동작할 수 있도록 자바스크립트 엔진을 브라우저에서 독립시킨 자바스크립트 실행 환경이다. 정리 Javascript Node.js 프로그래밍...","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON2/",
        "teaser": null
      },{
        "title": "REST API",
        "excerpt":"REST API REST는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍처이고, REST API는 REST를 기반으로 서비스 API를 구현한 것을 의미한다. REST 6가지 원칙 Uniform (유니폼 인터페이스) 유니폼 인터페이스는 URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일을 말한다. Stateless (무상태성) 상태 정보를 따로 저장하고 관리하지 않기 때문에...","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON3/",
        "teaser": null
      },{
        "title": "HTTP와 HTTPS의 차이점",
        "excerpt":"HTTP Hyper Text Transfer Protocol의 약자로 인터넷에서 클라이언트와 서버간에 데이터를 주고 받을 수 있는 통신 프로토콜이다. HTTPS Hyper Text Transfer Protocol Secure의 약자로 기본 골격이나 목적 등은 같지만 보안을 추가한 버전이다. SSL (Secure Sockets Layer) 인증서를 이용하여 공개키 암호화 방식이라는 알고리즘을 통해 보안을 강화한다. 공개키 암호화 방식 암호화와 복호화에 다른...","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON4/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 부족한 금액 계산하기",
        "excerpt":"   풀이   function solution(price, money, count) {     let total = 0     for(let n = 1 ; n &lt;= count ; n++) {         total += price * n     }     let result = total - money     return result &gt; 0 ? result : 0 }  ","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL20/",
        "teaser": null
      },{
        "title": "padding과 margin의 차이점",
        "excerpt":"   padding은 Object내의 내부 여백을 의미한다.  반대로, margin은 Object 외부 여백을 의미한다.   즉, Object의 테두리인 border의 안쪽을 padding 바깥쪽을 margin이라고 한다.  ","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON5/",
        "teaser": null
      },{
        "title": "브라우저의 동작원리",
        "excerpt":"브라우저의 동작원리 브라우저는 웹페이지를 서버에 요청하고 서버의 응답을 받아 표시한다. 서버로부터 HTML, CSS, Javascript를 받는데 HTML, CSS 파일은 렌더링 엔진의 HTML 파서와 CSS 파서에 의해 파싱되어 DOM, CSSOM 트리로 변환되고 렌더 트리로 결합된다. 이렇게 생성된 렌더 트리를 기반으로 브라우저는 웹페이지를 표시한다. Javascript의 동작원리 Javascript는 렌더링 엔진이 아닌 Javascript 엔진이 처리하는데...","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON6/",
        "teaser": null
      },{
        "title": "promise와 callback함수의 차이점",
        "excerpt":"promise Javascript 비동기 처리에 사용되는 객체이다. promise가 필요한 이유 주로 서버에서 받아온 데이터를 처리할 때 사용하며 fetch 등으로 서버에서 데이터를 요청하고 다 받아온 뒤에 처리하기 위해 사용한다. callback 과 promise의 차이점 callback 함수는 함수안에서만 비동기 처리 결과값을 알 수 있지만 promise는 비동기 로직에서 처리된 결과값이 promise 객체에 저장되기 때문에 로직...","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON7/",
        "teaser": null
      },{
        "title": "웹의 동작 원리",
        "excerpt":"웹 브라우저에 URL 입력하면 일어나는 일 웹 브라우저 주소창에 웹 페이지의 URL 주소를 입력한다. 입력한 URL 주소 중에서 도메인 이름을 DNS 서버에서 검색한다. DNS 서버에서 해당 도메인 이름에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함꼐 전달한다. URL 정보와 전달받은 IP 주소는 HTTP 프로토콜을 사용하여 HTTP 요청 메세지를 생성한다....","categories": ["Concept"],
        "tags": [],
        "url": "/concept/CON8/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 2016년",
        "excerpt":"풀이 function solution(a, b) { let week = [\"FRI\", \"SAT\", \"SUN\", \"MON\", \"TUE\", \"WED\"]; let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; let month = 0; for (let i = 0; i &lt; a - 1; i++) { month += days[i]; } month...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL21/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 소수 만들기",
        "excerpt":"풀이 function solution(nums) { let result = []; for (let i = 0; i &lt; nums.length - 2; i++) { for (let j = i + 1; j &lt; nums.length - 1; j++) { for (let k = j + 1; k &lt; nums.length; k++) { let div = nums[i]...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL22/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 두 개 뽑아서 더하기",
        "excerpt":"풀이 function solution(numbers) { let result = []; let sorted = numbers.sort((a, b) =&gt; a - b); for (let n = 0; n &lt; sorted.length - 1; n++) { for (let m = n + 1; m &lt; sorted.length; m++) { let plus = sorted[n] + sorted[m]; if (result.includes(plus)) {...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL23/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.2 구명보트",
        "excerpt":"풀이 function solution(people, limit) { let sorted = people.sort((a, b) =&gt; a - b); let large = sorted.length - 1; let small = 0; let count = 0; while (large &gt; small) { if (sorted[large] + sorted[small] &lt;= limit) { count++; small++; large--; } else { large--; } } return...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL24/",
        "teaser": null
      },{
        "title": "프로그래머스 LV.1 K번째수",
        "excerpt":"풀이 function solution(array, commands) { let result = []; for (let i = 0; i &lt; commands.length; i++) { let arr = []; for (let j = commands[i][0] - 1; j &lt; commands[i][1]; j++) { arr.push(array[j]); } // let sorted = arr.sort((a, b) =&gt; a - b); result.push(arr.sort((a, b) =&gt;...","categories": ["Algorithm"],
        "tags": [],
        "url": "/algorithm/AL25/",
        "teaser": null
      },{
        "title": "CSS selector",
        "excerpt":"복합 셀렉터 (Combinator) 자신의 한단계 상위에 속하는 요소를 부모 요소, 한단계 하위에 속하는 요소를 자손(자식) 요소라고 한다. 자신보다 한단계 이상 하위에 속하는 요소는 후손 요소라고 한다. 후손 샐렉터 (Descendant Combinator) 후손 셀렉터는 셀렉터A의 모든 후손 요소 중 셀렉터B와 일치하는 요소를 선택한다. 셀렉터A 셀렉터B // 예시 div p { color: red;...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS4/",
        "teaser": null
      },{
        "title": "display, visibilty, opacity",
        "excerpt":"display display 프로퍼티는 layout 정의에 자주 사용되는 중요한 프로퍼티이다. display 프로퍼티를 적용하지 않아도 기본적으로 디폴트 값을 가진다. (block 또는 inline) block 항상 새로운 라인에서 시작한다. 화면 크기 전체의 가로폭을 차지한다. (width:100%) width, height, margin, padding 프로퍼티 지정이 가능하다. block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다. 예시 div,...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS5/",
        "teaser": null
      },{
        "title": "position",
        "excerpt":"position position 프로퍼티는 요소의 위치를 정의하며 top, bottom, left, right 프로퍼티와 함께 사용하여 위치를 지정한다. static (기본위치) static은 position 프로퍼티의 기본값으로 아무것도 지정하지 않았을 때와 같다. 기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치된다....","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS6/",
        "teaser": null
      },{
        "title": "Shadow와 Gradient",
        "excerpt":"Shadow 텍스트나 요소에 그림자 효과를 부여하기 위해 사용한다. text-shadow 텍스트에 그림자 효과를 부여한다. 선택자 { text-shadow: Horizontal-offset Vertical-offset Blur-Radius Shadow-Color; } // 예시 div { text-shadow: 5px 5px 5px red; } 프로퍼티값 단위 설명 생략 Horizontal-offset px 그림자를 텍스트의 오른쪽으로 지정값만큼 이동 X Vertical-offset px 그림자를 텍스트의 아래로 지정값만큼 이동...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS7/",
        "teaser": null
      },{
        "title": "animation",
        "excerpt":"@keyframes 애니메이션이 어떤 모양에서 어떤 모양으로 변할지 정한다. @keyframes name { from { ... } to { ... } n% { ... } } // 예시 @keyframes big { from { width: 0px; height: 0px; } to { width: 150px; height: 150px; } } 이름 설명 name 애니메이션의 이름 from...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS8/",
        "teaser": null
      },{
        "title": "transform",
        "excerpt":"transform 트랜스폼은 요소에 이동, 회전, 확대축소, 비틀기 효과를 부여한다. 2D transform transform 함수 설명 단위 translate(x, y) 요소의 위치가 X축으로 x만큼, Y축으로 y만큼 이동 px, %, em 등 translateX(n) 요소의 위치가 X축으로 x만큼 이동 px, %, em 등 translateY(n) 요소의 위치가 Y축으로 y만큼 이동 px, %, em 등 scale(x,y) 요소의...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS9/",
        "teaser": null
      },{
        "title": "transition",
        "excerpt":"transition transition은 애니메이션이 일정 시간에 걸쳐 진행되도록 한다. transition은 가상 클래스 선택자 또는 Javascript의 부수적인 액션에 의해 발동된다. (자동으로 발동되지 않음) transition-duration transition이 끝날 때까지 걸리는 시간을 정한다. // 예시 transition-duration: time // 기본값은 0이다. transition-delay transition이 시작하는 시간을 지연시킨다. // 예시 transition-delay: time // 기본값은 0이다. transition-property transition이 적용될...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS10/",
        "teaser": null
      },{
        "title": "Sass 데이터타입, 변수, 연산자",
        "excerpt":"Sass CSS 전처리기로 CSS의 한계와 단점을 보완하여 보다 가독성이 높고 코드의 재사용에 유리한 확장이다. 프로젝트의 규모가 커지고 수정이 빈번히 발생함에 따라 유지보수를 용이하게 하기위해 사용한다. SASS의 장점 CSS보다 심플한 표기법으로 CSS를 구조화하여 표현 가능하다. 스킬 레벨이 다른 팀원들과의 작업 시 발생할 수 있는 구문의 수준 차이를 평준화할 수 있다. CSS에는...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS11/",
        "teaser": null
      },{
        "title": "Sass nesting, 조건문과 반복문, 주석",
        "excerpt":"nesting nesting은 Sass의 유용한 확장 기능으로 선언을 중첩하는 기능이다. CSS는 후손 셀렉터의 경우 부모요소를 기술해야 하지만 SASS는 간단히 작성할 수 있다. 하지만 너무 깊은 nesting은 가독성을 나쁘게 하고 셀렉터를 복잡하게 하기 때문에 주의해야 한다. // CSS .nav { width: 80%; height: 20px; } .nav ul { list-style: none; } .nav...","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS12/",
        "teaser": null
      },{
        "title": "Sass @import, @extend, Mixin",
        "excerpt":"@import 1개의 CSS 파일에 모든 스타일을 작성하면 유지보수하기 힘들고 가독성이 좋지 않은 단점에 따라 CSS 파일을 분리해서 사용하면 재사용 및 유지보수 측면에 유리하다. SASS는 @import를 사용하여 분리된 stylesheet 파일을 import할 수 있다. @import \"foo.scss\"; @import \"foo\"; // 확장자는 생략 가능 @import \"nav\", \"footer\"; // 여러개의 파일을 한번에 임포트할 수 있다....","categories": ["HTML & CSS"],
        "tags": [],
        "url": "/html%20&%20css/CSS13/",
        "teaser": null
      },{
        "title": "Project_Log 1",
        "excerpt":"Lohas 인테리어 회사 소개 및 시공사례 (포트폴리오) 게시 사이트 관리자 로그인 및 관리자 사진 밑 글 작성 기능 추가적으로 커뮤니티 기능도 생각중 오늘 한것 사이트 탐색 및 대략적인 구상 대략적인 툴 준비 사용 예정 스택 (프론트엔드) Javascript React Styled-components 다음엔!! 인테리어 하는 친구의 부탁으로 연습 겸 만들어 볼 예정이다!! 앞으로...","categories": ["Lohas"],
        "tags": [],
        "url": "/lohas/log1/",
        "teaser": null
      },{
        "title": "Project_Log 2",
        "excerpt":"오늘 한것      Wiki 대략적인 틀 구성   대략적인 Requirements 및 Wireframe 작성   대략적인 스키마 및 API 작성   Client 페이지 작성 및 라우팅 연결   내일은!!      Server 초기 개발 환경 설계 및 구축   대략적인 Prototype 및 UI 디자인  ","categories": ["Lohas"],
        "tags": [],
        "url": "/lohas/log2/",
        "teaser": null
      },{
        "title": "TypeScript의 사용 이유와 기본 타입",
        "excerpt":"TypeScript를 사용하는 이유 Javascript는 타입 시스템이 없는 동적 프로그래밍 언어로, 변수에 문자열, 숫자, 불린 등 여러 타입의 값을 가질 수 있다. 그로인해 유연하게 개발할 수 있는 환경을 제공하는 장점이 있지만, 런타임 환경에서 쉽게 에러가 발생할 수 있는 단점이 있다. // 예시를 한번 보자 // Javascript function add(num1, num2) { console.log(num1...","categories": ["JavaScript"],
        "tags": [],
        "url": "/javascript/JS16/",
        "teaser": null
      },{
        "title": "Err_Handling 1",
        "excerpt":"ERROR 1364: Field ‘createdAt’ doesn’t have a default value migration 후 seed를 연결하려고 하니 계속 위와 같은 에러가 떳다.. createdAt과 updatedAt은 자동으로 생성되어 문제가 발생하지 않을것 같았는데 뭐가 문제인지 몰랐다.. 시도1 일단 기본값이 없다고 하는것을 보고 sequelize 기본값 설정을 검색하며 찾아보았다 defaultValue란 키가 있어서 적용해보았지만 되지 않았다.. createdAt: { allowNull:...","categories": ["Lohas"],
        "tags": [],
        "url": "/lohas/err1/",
        "teaser": null
      },{
        "title": "Sequelize 연결 및 MVC",
        "excerpt":"Sequelize Sequelize-cli 설치 npm install --save-dev sequelize-cli 위 명령어를 입력해 설치한다. Sequelize-cli 초기세팅 npx sequelize-cli init 위 명령어를 입력하면 config, models, migrations, seeders 폴더가 생성된다. config에는 처음에 config.json파일로 { \"development\": { \"username\": \"root\", \"password\": null, \"database\": \"database_development\", \"host\": \"127.0.0.1\", \"dialect\": \"mysql\" }, \"test\": { \"username\": \"root\", \"password\": null, \"database\": \"database_test\",...","categories": ["Lohas"],
        "tags": [],
        "url": "/lohas/etc1/",
        "teaser": null
      },{
        "title": "Project_Log 3",
        "excerpt":"오늘 한것      스키마 수정            portfolio 테이블 수정           서버 초기 환경세팅   sequelize 연결 및 테스트   마이그레이션 및 시드 연결   사설 인증서 발급 및 https 서버 구현   내일은!!      토근기반 인증 구현   로컬환경에서 서버 기능 테스트  ","categories": ["Lohas"],
        "tags": [],
        "url": "/lohas/log3/",
        "teaser": null
      }]
