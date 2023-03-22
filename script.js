  const bar = document.querySelectorAll('.bar');
  
  fetch('data.json')
  .then(response => response.json())
  .then(data =>{
    const seconKeyValues = data.map(obj => obj.amount);
    const maxValue = Math.max(...seconKeyValues);
    
    let day;
    for(let i=0; i<data.length; i++){
        let percent = (data[i].amount)/maxValue;
        bar[i].style.height = `${percent * 140}px`; 
        bar[i].value = data[i].amount;
        bar[i].addEventListener('mouseover', ()=>{
            bar[i].previousElementSibling.classList.toggle('show');
            bar[i].previousElementSibling.textContent = '$ ' + bar[i].value;
        })
        bar[i].addEventListener('click', ()=>{
            bar[i].previousElementSibling.classList.toggle('show');
            bar[i].previousElementSibling.textContent = '$ ' + bar[i].value;
        })
        
    }
    const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const today = new Date();
    
    if(today.getDay() == 0){
        day = daysOfTheWeek[6];
       
    } else{
        day = daysOfTheWeek[today.getDay() -1]
    }
    document.querySelector(`.${day} .bar`).style.backgroundColor = '#76B5BC';
    
    


  })
  .catch(error => console.log(error));

  



   /* const secondKeyValues = data.map(obj => obj.amount);
    const maxValue = Math.max(...secondKeyValues);
    console.log(maxValue); */