document.getElementById('Button-Random').onclick = function(){
  let l = 20;
  let result =[];
  let max = 1;
  let min = 100;
  let random_result = document.getElementById('result');
  let sort_block = document.getElementById('Sort-number-coneiner');

  /* Show Sort-Block */
  random_result.style.display = "block";
  sort_block.style.display = "flex";

  /* Show Random-Block */
  for (let i = 0; i<l; i++){
    result.push(randomInteger(min,max));
  }

  let result_str = result.join(' ');
  random_result.innerHTML = result_str ;
  
  /*Sort metod*/
  document.getElementById('Button-Sort').onclick = function() {
    for (let option of document.getElementById("Sort-metod-list").options){
      if (option.value === 'Bubble'){
        BubbleSort (result);
        Out();
      }
      if (option.value === 'Heapsort'){
        HeapSort (result);
        Out();
      }
    }
  }
   /* Sort result out*/
   function Out(){
    let sorted_numbers = document.getElementById('sort');
    let result_str = result.join(' ')
    sorted_numbers.style.display = "block";
    sorted_numbers.innerHTML = result_str;
  }
  
}

/* Random number function */
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

/*Heapsort function*/
function HeapSort(result) {
  let n = result.length;
  let i = Math.floor(n/2);
  let j, k, t;
  while (true){
    if (i > 0){
      t = result[--i];
    }
    else { 
      n--;
      if (n == 0){
        return result;
      }
      t = result[n];  
      result[n] = result[0];
    }        
    j = i;  
    k = j*2+1;
    while (k < n){ 
      if (k+1 < n && result[k+1] > result[k]){
        k++;
      }
      if (result[k] > t){ 
        result[j] = result[k];  
        j = k;  
        k = j*2+1; 
      }
      else break;
    }
    result[j] = t; 
    }
  }

/* Bubble Sort function*/
function BubbleSort (result) {
  for (let n = 0; n < result.length; n++) {
    for (let i = 0; i < result.length - 1 - n; i++) {
      if (result[i] > result[i + 1]) {
        const buff = result[i];
        result[i] = result[i + 1];
        result[i + 1] = buff;
      }
    }
  }
  return result;
}


  




