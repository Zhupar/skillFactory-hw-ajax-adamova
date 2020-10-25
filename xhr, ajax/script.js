const btn = document.querySelector(".btn")
const resultNode = document.querySelector(".result")
const reqUrl = "https://picsum.photos/v2/list?limit=10" 

function isValid(input) {
	if (input > 11 && input < 0) {
		console.log ('число вне диапазона от 1 до 10')
	} else if (input < 11 && input > 0){		
		useRequest(reqUrl,displayResult,input)

	} else {
		console.log ('некорректные данные')
	}

}

function useRequest(url, callback, input) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {

      const result = JSON.parse(xhr.response).slice(0, input);
      
      // console.log(result)
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
    <div class="card result" style="width: 18rem; margin: 20px auto">
  		<img src="${item.download_url}" class="card-img-top" alt="...">
  		<div class="card-body">
    		<p class="card-text">${item.author}</p>
  		</div>
	</div>
	`;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

btn.addEventListener('click', () => {
	const input = document.querySelector("input").value
	isValid(input);	

})
