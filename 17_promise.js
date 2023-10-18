
// // setTimeout(function () {
// //     console.log(`Inside show function`);
// // })

// // new promiseNotes = new Promise(function(resolve ,reject){
// //  console.log(`Promise is pending state`);

//  const promiseNotes = new Promise(function(resolve, reject){
//     console.log('Promise is pending state');
//  isNotesPrepared = true;
//  if ( isNotesPrepared ) {
//     resolve(`Notes is prepared and here is the notes guys..`)
//  }else{
//     reject(`sorry guys, I din't get time, please prepare notes.`)
//  }

// })

// //catch methon when promise uncomplete
// //then method when we u promise successful
// console.log(`=======then Method()============)`);
// promiseNotes.then ( function (success) {
//     console.log(success);
//     console.log(`Thank you...`);

//     console.log(`=======catch Method()============)`);
// }).catch(function (failure) {
//     console.log(failure);
//     console.log(`Are yar...`);

  
// }).finally(function () {
   // console.log(`=======Finally Method()============)`);
//     console.log(`I must have  Notes...`);
//     console.log("05_conversion.jsIn case Sir won't share it, will prepare my self");
// })



const promiseNotes = new Promise(function(resolve, reject){
    console.log('Promise is pending state');
    const isNotesPrepared = false;
    if (isNotesPrepared) {
        resolve('Notes is prepared and here is the notes guys...') 
    }else{
        reject("Sorry guys, I din't get time, Please prepare notes your self");
    }
})
promiseNotes.then( function(success){
    console.log(`========= then() ============`);
    console.log(success);
    console.log('Thank you....');
}).catch(function(failure){
    console.log(`========= catch() ============`);
    console.log(failure);
    console.log(`Are yar.... `);
}).finally(function(){
    console.log(`========= finally block() ============`);
    console.log('I must have notes... ');
    console.log("05_conversion.jsIn case Sir won't share it, will prepare my self");
})