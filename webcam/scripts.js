const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d'); //this is where the work happens
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap'); //audio for every video played
//get the video being piped in to the video element
function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})//this returns a promise so we can a dot then on it
    .then(localMediaStream => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      alert('Oh no please give the camera permissions!!!!', err);
    });
}

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;

}
getVideo();
