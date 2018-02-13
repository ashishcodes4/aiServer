/* global Clarifai */
const clarifai = new Clarifai.App({
    apiKey: 'c9a7740b61cd42139a16a93d5a2da926'
});

clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
.then(function(response){
    console.log(response)
})
.catch(function(err){
    console.log(err)
})