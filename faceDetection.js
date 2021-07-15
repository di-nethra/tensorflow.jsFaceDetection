let video = document.getElementById("video");
let model;
const webCam = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: { width: 600, height: 400 },
      audio: false,
    })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch(console.error);
};

const detectFace = async () => {
  const prediction = model.estimateFaces(video, false);
  console.log(prediction);
};

webCam();
video.addEventListener("loadeddata", async () => {
  model = blazeface.load();
  detectFace();
});
