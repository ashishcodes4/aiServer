/* global Clarifai */
// /* global FACE_DETECT_MODEL */
const inputUrl = document.querySelector('#url');
const sbBtn = document.querySelector('#sb-btn');
const inputImg = document.querySelector('#inputImage');




sbBtn.addEventListener('click', function(){
    let link = inputUrl.value;
    console.log(link);
    
});



// const clarifai = new Clarifai.App({
//     apiKey: 'c9a7740b61cd42139a16a93d5a2da926'
// });

// clarifai.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
// .then(
//     function(response) {
//       console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
//     }
//   )
//   .catch(function(err){
//       console.log(err);
//   });