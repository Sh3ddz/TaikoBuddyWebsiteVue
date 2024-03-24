<template>
  <h1>OsuBuddy - osu!Standard all in one cheat</h1>
  <br>
  <h2>
    <center>Detection Status: <span>DETECTED</span></center>
  </h2>
  <br>
  <center><iframe width="640" height="360" src="https://www.youtube.com/embed/-Ovlmah32Y4" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></center>
  <h2>What is OsuBuddy?</h2>
  <p>
    OsuBuddy is an all in one cheat for osu!Standard (works with fullscreen ;) ) <br>
  </p>
  <h2>OsuBuddy Features</h2>
  <p>
    <b>Modules:</b>
  </p>
  <ul>
    <li><b><span>Aim Assist:</span></b> Will assist your mouse towards the next note!</li>
    <li><b><span>Relax:</span></b> Will automatically click the notes for you!</li>
    <li><b><span>Replay Player:</span></b> Will playback the selected replay, can also interpolate and flip replays.
      Also has the option to only play mouse and/or keyboard inputs</li>
  </ul>
  <h2>How to use OsuBuddy</h2>
  <p>
    Make sure you have osu! opened<br>
    Then run the packaged OsuBuddy.exe file, log into your TaikoBuddy account<br>
    Select the module's / settings you'd like enabled<br>
    Then play a map and enjoy!<br>
  </p>
  <br>
</template>

<script lang="ts">

export default
  {
    name: "OsuBuddy",
  }
</script>

<style scoped>
h1{
  font-size: 50px;
}
h2{
    font-size: 40px;
    margin: 20px 20%;
    text-align: left;
}
h3{
    font-size: 30px;
}
p{
    font-size: 20px;
    margin: 10px 20%;
    text-align: left;
}
ul{
  display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 25%;
    text-align: left;
}
li{
  display: list-item;
  text-align: -webkit-match-parent;
}
</style>