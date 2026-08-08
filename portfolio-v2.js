let portfolioLanguage='en';
function setPortfolioLanguage(language){
  portfolioLanguage=language;
  document.documentElement.lang=language;
  document.querySelectorAll('[data-en]').forEach((element)=>{
    element.textContent=element.dataset[language];
  });
}
function togglePortfolioLanguage(){
  setPortfolioLanguage(portfolioLanguage==='en'?'es':'en');
}
document.addEventListener('click',(event)=>{
  const target=event.target.closest('[data-language-toggle]');
  if(target){event.preventDefault();togglePortfolioLanguage();}
});
fetch('portfolio-v2-content.html')
  .then((response)=>response.ok?response.text():Promise.reject(response.status))
  .then((markup)=>{
    document.querySelector('#portfolio-content').innerHTML=markup;
    setPortfolioLanguage(portfolioLanguage);
  })
  .catch(()=>{
    document.querySelector('#portfolio-content').textContent='Portfolio content could not be loaded.';
  });
