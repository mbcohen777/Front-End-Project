const submitBtn = document.getElementsByClassName("btn-primary");
let resultContainer = document.getElementById("result-container")
submitBtn[0].addEventListener('click', () => {
    resultContainer.innerHTML = '';
    dog()
})

function dog() {
    const input = document.getElementById("formEntry").value;
    if (input === '') {
      alert ('please enter a name');
    }
    const URL = `https://api.nationalize.io/?name=${input}`;
    fetch(URL).then(response => response.json()).then(data => {
        for (let n in data.country) {
            var popBox = document.getElementById('result-container');
            popBox.style.removeProperty("display");
            let countryList = data.country[n]
            let resultBox = document.createElement("div");
            resultBox.id = "name-box";
            resultBox.innerText = countryList.country_id
            resultContainer.append(resultBox);
        }
    });
}

const submitBtn2 = document.getElementsByClassName("btn-secondary");
submitBtn2[0].addEventListener('click', cat);
function cat() {
    const input = document.getElementById("formEntry2").value;
    if (input === '') {
      alert ('please enter a two letter country abbreviation')
    }
    else {
    const URL = ` http://api.worldbank.org/v2/country/${input}?format=json`;
    fetch(URL).then(response => response.json()).then(data => {
        // let resultContainer2 = document.getElementById("result-container2")
        let country = data[1][0].name;
        // let resultBox2 = document.createElement("div");
        // resultBox2.id = "country-box";
        // resultBox2.append(country);
        // resultContainer2.append(resultBox2);
        alert(country);

    })};
}
