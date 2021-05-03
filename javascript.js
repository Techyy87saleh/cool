const countwords = ()=>{
    let noc = document.getElementById('word');  //noc for number of characters
   
   let now = document.getElementById('word');   // now for number of words
   let show = document.getElementById('show');   // to fetch the data of characters and words
   let show4 = document.getElementById('show2');
     
   let noc1 = noc.value; 
   show1.innerText = `Characters ${noc1.length}`;
     
     

    let now1 = now.value;
    now1 = now1.match(/\w+/g);

   show.innerText = `Words ${now1.length}`;
 
}