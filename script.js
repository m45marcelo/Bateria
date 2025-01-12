document.body.addEventListener('keydown', (e)=>{
    playsound(e.code.toLowerCase())
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.getElementById('input').value;
    if(song !== ''){
        let songArray = song.split('')
        playComposition(songArray);
    }
})

function playsound(sound){
    let audioElement = document.getElementById(`s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('active');
        setInterval(()=>{
            keyElement.classList.remove('active');
        },300)
    }

};

function playComposition(songArray){
    let wait = 0;

    for(let songItem of songArray){

        setTimeout(()=>{
            playsound(`key${songItem}`);
        },wait)

        wait += 250
    }
}