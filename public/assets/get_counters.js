export default function () {
  getCounters();
}

async function getCounters() {
  try {
    const response = fetch('/data.json');
    const data = (await response).json();
    const res = await data;
    
    for(let itemCount in res.static){
      render(res.static[itemCount].count, res.static[itemCount].text);
    }
  } catch (error) {
    console.log(error);
  }
}

function render(count, text) {
  const markup = `<div class="count-inner">
                    <div class="count" data-count-users>${count}</div>
                    <div class="count-title">${text}</div>
                  </div>`;
   document.getElementById('counterWrapper').insertAdjacentHTML('beforeend', markup);
}
