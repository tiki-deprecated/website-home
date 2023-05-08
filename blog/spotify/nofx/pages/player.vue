<template>
  <div class="grid h-[100vh] place-content-center">
    <h1>{{ track }}</h1>
    <audio controls autoplay>
      <source :src="song.default" type="audio/mp3" />
    </audio>
  </div>
</template>

<script setup lang="ts">
import * as song1 from '~/assets/music/dadabots - Bot Prownies.mp3'
import * as song2 from '~/assets/music/dadabots - Brain Bricks.mp3'
import * as song3 from '~/assets/music/dadabots - Jong Out.mp3'
import * as song4 from '~/assets/music/dadabots - Just From the Cake.mp3'
import * as song5 from '~/assets/music/dadabots - Lose Home.mp3'
import * as song6 from '~/assets/music/dadabots - One Million Governments.mp3'
import * as song7 from '~/assets/music/dadabots - Perfect God Sex.mp3'
import * as song8 from '~/assets/music/dadabots - Sloppy Cops.mp3'
import * as song9 from '~/assets/music/dadabots - The Rationality of my Party Bottles in Session.mp3'
import * as song10 from '~/assets/music/dadabots - Wead.mp3'

const num = Math.floor(Math.random() * 10)

let song = song1
let track = 'Bot Prownies'
switch (num) {
  case 0:
    song = song1
    track = 'Bot Prownies'
    break
  case 1:
    song = song2
    track = 'Brain Bricks'
    break
  case 2:
    song = song3
    track = 'Jong Out'
    break
  case 3:
    song = song4
    track = 'Just From the Cake'
    break
  case 4:
    song = song5
    track = 'Lose Home'
    break
  case 5:
    song = song6
    track = 'One Million Governments'
    break
  case 6:
    song = song7
    track = 'Perfect God Sex'
    break
  case 7:
    song = song8
    track = 'Sloppy Cops'
    break
  case 8:
    song = song9
    track = 'The Rationality of my Party Bottles in Session'
    break
  case 9:
    song = song10
    track = 'Wead'
    break
  default:
    song = song1
    track = 'Bot Prownies'
    break
}
</script>
