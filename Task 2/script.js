const selectCountries = document.querySelectorAll("select");
const translateLang= document.querySelector("#trans");
const originalText= document.querySelector("#fromtext");
const translatedText= document.querySelector("#totext");

selectCountries.forEach((tag,id)=>{
    for(const countriesCode in countries){
        let selected;
        if(id==0 && countriesCode=="en-GB"){
            selected = "selected";
        }
        else if(id==1 && countriesCode=="hi-IN"){
            selected="selected";
        }
        let opt=`<option value="${countriesCode}" ${selected}>${countries[countriesCode]}</option>`;
        tag.insertAdjacentHTML("beforeend",opt);
    }
});

translateLang.addEventListener("click", ()=>{
    let oritext=originalText.value,
    translatefrom=selectCountries[0].value,
    translateto=selectCountries[1].value;
    let api=`https://api.mymemory.translated.net/get?q=${oritext}!&langpair=${translatefrom}|${translateto}`;

    fetch(api).then(res => res.json()).then(data => {
        translatedText.value=data.responseData.translatedText;
    });
});