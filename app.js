const submitBtn = document.getElementsByClassName("btn-primary");
submitBtn[0].addEventListener('click', dog)

function dog() {
    const input = document.getElementById("formEntry").value;
    const URL = `https://api.nationalize.io/?name=${input}`;
    fetch(URL).then(response => response.json()).then(data => {
      // console.log(data)
      for (let i = 0; i<data.country.length; i++) {
      
        let resultContainer = document.getElementById("result-container")
        let countryList = data.country[i]
        let resultBox = document.createElement("div");
        resultBox.id = "name-box";
        resultBox.append(countryList.country_id)
        resultContainer.append(resultBox);
      }
    });
  }

  const submitBtn2 = document.getElementsByClassName("btn-secondary");
  submitBtn2[0].addEventListener('click', cat);
  
  function cat() {
      const input = document.getElementById("formEntry2").value;
      const URL = ` http://api.worldbank.org/v2/country/${input}?format=json`;
      fetch(URL).then(response => response.json()).then(data => {
        console.log(data)
          
          let resultContainer2 = document.getElementById("result-container2")
          let country = data[1][0].name;
          let resultBox2 = document.createElement("div");
          resultBox2.id = "country-box";
          resultBox2.append(country);
          resultContainer2.append(resultBox2);
        
      });
    }

