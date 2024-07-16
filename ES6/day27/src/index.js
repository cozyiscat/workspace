console.log ('test');

//클래스 명으로 엘리먼트 얻기 => HTML Collection 타입
const containers = document.getElementsByClassName('container');
console.log('containers =>', containers);

//querySelector로 엘리먼트 얻기
const container = document.querySelector('.container');
console.log (container);

// querySelectorAll로 엘리먼트 얻기 => Node List 타입
const containers2 = document.querySelectorAll('.container');
console.log (containers2);

//요소 생성 (create Element)-----------------------------
// const divEle = document.createElement('div');
// console.log (divEle);

// const pEle = document.createElement('p');
// const h2Ele = document.createElement('h2');
// divEle.appendChild(pEle);
// divEle.appendChild(h2Ele);
// console.log (divEle);

//영역 1에 버튼 추가하기
// const btnEle = document.createElement('button');
// btnEle.textContent = '버튼';
// const divEle = document.querySelector('.container');
// divEle.appendChild(btnEle);

//요소삭제 => 부모요소.removeChild (삭제할 요소)
const h1Ele = document.getElementById('title');
console.log(h1Ele);
const mainEle = h1Ele.parentElement;
console.log(mainEle)
mainEle.removeChild(h1Ele);
// mainEle.remove(); //자신 삭제
mainEle.textContent = null;
// mainEle.innerHTML = '안녕하세요';
// mainEle.innerText = '안녕ㅎ세요';
