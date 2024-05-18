

//declaring costant/variable for checking audio:-
const song= new Audio('audio/arjit/2.mp3');
// song.play();


//js for add songs banner, name & singer:-

// declaring array in which songs we can add :-
const albums = [
    {
        id:1,
        songName:`Naina ishque na ho<br> 
        <div class="subtitle">Arjit singh</div>`,
        banner: "img/arjit/1.jpg"
    },
    {
        id:2,
        songName:`Khairiyat <br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/2.jpg"
    },
    {
        id:3,
        songName:`Desh Mere <br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/3.jpg"
    },
    {
        id:4,
        songName:`Dhoka <br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/4.jpg"
    },
    {
        id:5,
        songName:`Tera Yar hoon Main<br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/5.jpg"
    },
    {
        id:6,
        songName:`Vande Mataram-ABCD 2<br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/6.jpg"
    },
    {
        id:7,
        songName:`Galtise Mistake..<br> 
        <div class="subtitle">Arjit singh</div>`,
        banner: "img/arjit/7.jpg"
    },
    {
        id:8,
        songName:` Hamari Adhuri Kahani<br> 
        <div class="subtitle">Arjit singh</div>`,
        banner: "img/arjit/8.jpg"
    },
    {
        id:9,
        songName:`Neki ki raho tu chal.<br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/9.jpg"
    },
    {
        id:10,
        songName:`Bulave Tuze aaj meri Galiyaan<br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/10.jpg"
    },
    {
        id:11,
        songName:`jo tu mera humdard hain<br> 
        <div class="subtitle">Arjit singh</div>`,
        banner: "img/arjit/11.jpg"
    },
    {
        id:12,
        songName:`Nashe Se Chad Gayi<br> 
        <div class="subtitle">Arjit Singh</div>`,
        banner: "img/arjit/12.jpg"
    },
    
    {
        id:13,
        songName:`Baarishein<br> 
        <div class="subtitle">Atif Aslam</div>`,
        banner: "img/arjit/13.jpg"
    },
    {
        id:14,
        songName:`Vaste<br> 
        <div class="subtitle">Dhwani Bhanushali</div>`,
        banner: "img/arjit/14.jpg"
    },
    {
        id:15,
        songName:`Kutti Mohabbat ne..! <br> 
        <div class="subtitle">Jubin Nautiyaal</div>`,
        banner: "img/arjit/15.jpg"
    },
    // 5 songs are less
]

//making default setting in which songs name,banner,are added successfully! 
Array.from(document.getElementsByClassName('songitem')).forEach((e,i) =>{
      e.getElementsByTagName('img')[0].src = albums[i].banner;
      e.getElementsByTagName('h6')[0].innerHTML = albums[i].songName;
})

//search bar setting :-
//  search data start:-
let results = document.getElementsByClassName('results')[0];

albums.forEach(element=>{
    const {id,songName,banner} = element;
    console.log(id);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href="#" + id;

    card.innerHTML=`
    <img src="${banner}" alt="">
    <div class="songdata">
       ${songName}
   </div> 
    `;
    results.appendChild(card);
});

// serach filter:-
let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
    let input_value =input.value.toUpperCase();
    let items = results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('songdata')[0];
       let textvalue =as.textContent || as.innerHTML;

       if (textvalue.toUpperCase().indexOf(input_value)>-1) {
         items[index].style.display="flex";
        } else {
           items[index].style.display="none";
        }
        if(input.value==0){
            results.style.display="none";
        }
        else{
            results.style.display="";
        }
        
    }
});
//  search data end:-
//js for masterplay box:-

//js for play button:-
let masterplay=document.getElementById('masterplay');
//js for wave (at left bottom corner:)
let wave=document.getElementById('wave');

masterplay.addEventListener('click',()=>{
    if (song.paused || song.currentTime<=0){
        song.play();
        wave.classList.add('active1');
        masterplay.classList.add('bi-pause-fill')
        masterplay.classList.remove('bi-play-fill')
        
    }else{
        song.pause();   
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
});

// js for making for emplementing song functionality like play,pause:-
const songbyplays =()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}


//making js function for song by hoverness in page: 
const songbybackground =()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background ='rgb(105,105,105,.0)';
    })
}

// js for big hits box left right btn (geting data from user):-
let b_left = document.getElementById('hit_song_left');
let b_right = document.getElementById('hit_song_right');
let b= document.getElementsByClassName('b')[0];

//logic to scroll left right buttons within box big hits (Event listning when button click):-
b_right.addEventListener('click',()=>{
    b.scrollLeft += 330;
});
b_left.addEventListener('click',()=>{
    b.scrollLeft -= 330;
});

//js for trending artist box (getting data from box):-
let singers_left=document.getElementById('artist_left');
let singers_right=document.getElementById('artist_right');
let singers=document.getElementsByClassName('singers')[0];

//logic to scroll left right buttons within box trending artist(Event listning when button click):-
singers_right.addEventListener('click',()=>{
    singers.scrollLeft +=330;
});
singers_left.addEventListener('click',()=>{
    singers.scrollLeft -=330;
});

//At start index value is 0 of audio /img ,etc...

let index = 0;
let banner_master_play = document.getElementById('banner_master_play'); //back-img;
let downloadsong = document.getElementById('downloadsong');             //download button
let title= document.getElementById('title');                            //title of songs  

//making array for envent listning js for one by one steps:-
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
        e.addEventListener('click',(el)=>{
         index=el.target.id;
        // console.log(index);
        song.src=`audio/arjit/${index}.mp3`;
        banner_master_play.src=`img/arjit/${index}.jpg`;
        song.play();
        wave.classList.add('active1');
        masterplay.classList.add('bi-pause-fill');
        masterplay.classList.remove('bi-play-fill');
        downloadsong.href=`audio/arjit/${index}.mp3`;

        
        let titles = albums.filter((xyz) =>{
            return xyz.id ==index;
        });

        titles.forEach(xyzz =>{
            let {songName} = xyzz;
            title.innerHTML = songName;
            downloadsong.setAttribute('download',songName);
         });

         //function call to see background hoverness of songby background.
           songbybackground();
           Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
           songbyplays();
           el.target.classList.remove('bi-play-circle-fill');
           el.target.classList.add('bi-pause-circle-fill');
    });
})

//giving start&end to song for that  getting data from user or range bar of song:-
let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let bar3 =document.getElementsByClassName('bar3')[0];

song.addEventListener('timeupdate',()=>{
    let song_current = song.currentTime;
    let song_duration = song.duration;
     //console.log(song_duration);
     let min1=Math.floor(song_duration /60);
     let sec1=Math.floor(song_duration %60);
     //console.log(min1);

     if(sec1<10){
        sec1 =`0${sec1}`;
     }
     currentEnd.innerText=`${min1}:${sec1}`;
     let min2 =Math.floor(song_current /60);
     let sec2 =Math.floor(song_current %60);

     if(sec2<10){
         sec2 =`0${sec2}`;
    }
        currentStart.innerText =`${min2}:${sec2}`;


        let rangebar = parseInt ((song_current/song_duration)*100);
        seek.value=rangebar;
        // console.log(seek.value); 
        let seekbar =seek.value;
        bar2.style.width=`${seekbar}%`;
        bar3.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    song.currentTime =seek.value*song.duration/100;
});

// volume button js:-
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
      vol_icon.classList.remove('bi-volume-up-fill');
      vol_icon.classList.remove('bi-volume-down-fill');
      vol_icon.classList.add('bi-volume-off-fill');    
    }
    if(vol.value> 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');    
    }
    if(vol.value> 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');    
    }
    let vol_control =vol.value;
    vol_bar.style.width=`${vol_control}%`;
    vol_dot.style.left=`${vol_control}%`;
    song.volume=vol_control/100;
});

//back & next button moment:-
let back = document.getElementById('back');
let next = document.getElementById("next");

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
       index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    song.src=`audio/arjit/${index}.mp3`;
        banner_master_play.src=`img/${index}.jpg`;
        song.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill')
        
        let titles = albums.filter((xyz) =>{
            return xyz.id ==index;
        });

        titles.forEach(xyzz =>{
            let {songName} = xyzz;
            title.innerHTML = songName;
         });

         //function call to see background hoverness of songby background.
           songbybackground();
           Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
           songbyplays();
           el.target.classList.remove('bi-play-circle-fill');
           el.target.classList.add('bi-pause-circle-fill');
});
   
next.addEventListener('click',()=>{
    index ++;
    if(index<1){
       index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    if(index>20){
        index = Array.from(document.getElementsByClassName('songitem')).length;
        index =1;
     }
    song.src=`audio/arjit/${index}.mp3`;
        banner_master_play.src=`img/arjit/${index}.jpg`;
        song.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        
        let titles = albums.filter((xyz) =>{
            return xyz.id ==index;
        });

        titles.forEach(xyzz =>{
            let {songName} = xyzz;
            title.innerHTML = songName;
         });

         //function call to see background hoverness of songby background.
           songbybackground();
           Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
           songbyplays();
           el.target.classList.remove('bi-play-circle-fill');
           el.target.classList.add('bi-pause-circle-fill');
});
   
let shuffle =document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a= shuffle.innerHTML;
    switch(a){
        case "next":
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='repeat';
        break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML='random';
        break;
        case "random":
        shuffle.classList.remove('bi-arrow-repeat');
        shuffle.classList.add('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML='next';
        break;    
    }
});


const next_song =() =>{
    //  index++;
    if(index==albums.length){
        index=1;
    }
    else{
        index++;
    }
    // console.log(index);
    song.src=`audio/arjit/${index}.mp3`;
    banner_master_play.src=`img/${index}.jpg`;
    song.play();
    wave.classList.add('active1');
    masterplay.classList.add('bi-pause-fill');
    masterplay.classList.remove('bi-play-fill');
    downloadsong.href=`audio/${index}.mp3`;


    
    let titles = albums.filter((xyz) =>{
        return xyz.id ==index;
    });

    titles.forEach(xyzz =>{
        let {songName} = xyzz;
        title.innerHTML = songName;
        downloadsong.setAttribute('download',songName);
     });

     //function call to see background hoverness of songby background.
       songbybackground();
       Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
       songbyplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
}

const repeat_song =() =>{
    index;
   // console.log(index);
   song.src=`audio/arjit/${index}.mp3`;
   banner_master_play.src=`img/${index}.jpg`;
   song.play();
   wave.classList.add('active1');
   masterplay.classList.add('bi-pause-fill');
   masterplay.classList.remove('bi-play-fill');
   downloadsong.href=`audio/${index}.mp3`;

   
   let titles = albums.filter((xyz) =>{
       return xyz.id ==index;
   });

   titles.forEach(xyzz =>{
       let {songName} = xyzz;
       title.innerHTML = songName;
       downloadsong.setAttribute('download',songName);
    });

    //function call to see background hoverness of songby background.
      songbybackground();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
      songbyplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
}

const random_song =() =>{
    if (index==albums.length) {
        index =1;
    } else {
        index =Math.floor((Math.random()*albums.length)+1);
    }
   // console.log(index);
   song.src=`audio/arjit/${index}.mp3`;
   banner_master_play.src=`img/${index}.jpg`;
   song.play();
   wave.classList.add('active1');
   masterplay.classList.add('bi-pause-fill');
   masterplay.classList.remove('bi-play-fill');
   downloadsong.href=`audio/${index}.mp3`;

   
   let titles = albums.filter((xyz) =>{
       return xyz.id ==index;
   });

   titles.forEach(xyzz =>{
       let {songName} = xyzz;
       title.innerHTML = songName;
       downloadsong.setAttribute('download',songName);
    });

    //function call to see background hoverness of songby background.
      songbybackground();
      Array.from(document.getElementsByClassName('songitem'))[index-1].style.background = "rgb(105,105,105,.1)";
      songbyplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
}

song.addEventListener('ended',()=>{
    // index++;
   let b= shuffle.innerHTML;
   switch(b){
    case 'next':next_song();
    break;

    case 'repeat':repeat_song();
    break;

    case 'random':random_song();
    break;
   }
})

let button = document.getElementsByTagName('button')[0];//taking video tag
let play =document.getElementById('play'); //

 play.addEventListener('click',()=>{
  if (song.paused) {
    song.play();
    play.innerHTML =`Pause`
} 
else {
    song.pause();
    play.innerHTML =`Play`
 }
});




// Function to play a specific song
function playSong(albumId) {
    const selectedAlbum = albums.find(album => album.id === albumId);
    if (selectedAlbum) {
        // Update song details and play
        song.src = `audio/${selectedAlbum.id}.mp3`;
        banner_master_play.src = `img/${selectedAlbum.id}.jpg`;
        title.innerHTML = selectedAlbum.songName;
        song.play();

        // Update UI for active song
        songbybackground();
        const songItem = document.querySelector(`.songitem[data-id="${albumId}"]`);
        if (songItem) {
            songItem.style.background = "rgba(105,105,105,.1)";
            songbyplays();
            const playlistPlayButton = songItem.querySelector('.playlistplay');
            playlistPlayButton.classList.remove('bi-play-circle-fill');
            playlistPlayButton.classList.add('bi-pause-circle-fill');
        }
    }
}

// Function to display filtered albums with play button event
function displayAlbums(albums) {
    const choiceSongContainer = document.querySelector('.choice_song');
    choiceSongContainer.innerHTML = '';

    albums.forEach(album => {
        const songItem = document.createElement('li');
        songItem.classList.add('songitem');
        songItem.dataset.id = album.id; // Set dataset for identifying the album ID

        songItem.innerHTML = `
            <span>${album.id}</span>
            <img src="${album.banner}" alt="">
            <h6>${album.songName}</h6>
            <i class="bi playlistplay bi-play-circle-fill" data-id="${album.id}"></i>
        `;
        

        // Attach play event to the play button within the song item
        const playlistPlayButton = songItem.querySelector('.playlistplay');
        playlistPlayButton.addEventListener('click', () => {
            playSong(album.id); // Play the selected song            
        });
        choiceSongContainer.appendChild(songItem);
    });
}

// Update the playlistContainer click event listener
const playlistContainer = document.querySelector('.playlist');
playlistContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'H4') {
        playlistContainer.querySelectorAll('h4').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');

        const category = event.target.dataset.category;
        let filteredAlbums = [];

        switch (category) {
            case 'playlist':
                filteredAlbums = albums;
                break;
            case 'librery':
                filteredAlbums = albums.filter(album => album.id <= 5);
                break;
            case 'recommended':
                filteredAlbums = albums.filter(album => album.songName.includes('Alan Walker'));
                break;
            case 'MostListen':
                filteredAlbums = albums.filter(album => [1, 5, 10, 15].includes(album.id));
                break;
            default:
                filteredAlbums = albums;
        }

        displayAlbums(filteredAlbums);
    }
});

// Initial display of albums (assumed you want to display all albums initially)
displayAlbums(albums);
