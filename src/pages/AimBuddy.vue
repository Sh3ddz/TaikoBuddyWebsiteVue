<template>
  <h1>AimBuddy - osu!Standard Aim Assist</h1>
  <br>
  <h2>
    <center>Detection Status: <span>UNDETECTED</span></center>
  </h2>
  <br>
  <center><iframe width="640" height="360" src="https://www.youtube.com/embed/h8m3VdpAkF4" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe></center>
  <h2>What is AimBuddy?</h2>
  <p>
    AimBuddy is an Aim Assist for osu!Standard <br>
    <span>UNDETECTABLE</span> if used properly.<br>
  </p>
  <h2>How does AimBuddy work?</h2>
  <p>
    AimBuddy works by searching your screen for the given hit circle image to detect hit circles.</br>
    It then filters out the given hit circles to find which one is the next one you're supposed to aim to.</br>
    Once close enough to a note, AimBuddy will assist you in moving your cursor towards the note based on which mode
    you're using.</br>
  </p>
  <h2>AimBuddy Features</h2>
  <p>
    <b>Multiple Modes:</b>
  </p>
  <ul>
    <li><b><span>Aim Assist:</span></b> Will assist your mouse towards the next note</li>
    <li><b><span>Aim Accentuate:</span></b> Will accentuate your mouse movements depending on if you're moving closer or
      farther away from the next note.</li>
  </ul>
  <p>
    <b>Vision:</b>
  </p>
  <ul>
    <li>See exactly how the bot is seeing in the vision tab!</li>
    <li>Change the hitcircle image to match the one in your skin to get it to work with any skin!</li>
    <li>Adjust the hit circle threshold value to determine how lenient the bot is at detecting a hit circle</li>
  </ul>

  <h2>Why is AimBuddy undetectable?</h2>
  <p>
    If used properly, AimBuddy is 100% <span>Undetectable.</span><br>
    That being said, if you use this program with the highest possible settings, you will get banned.<br>
    Peppy's main source of cheat detection (at the moment) is detecting for injected files and DLL's, to see if any of
    osu's files have been read/modified.<br>
    AimBuddy is fully external. It doesn't read or write memory, giving peppy no way of detecting it this way.<br>
  </p>
  <h2>How to use AimBuddy</h2>
  <p>
    Simply run the packaged AimBuddy jar file, log into your TaikoBuddy account<br>
    Then open osu!, make sure the hit circle image matches the one in your skin<br>
    Then make sure all your settings are correct, press R to cycle through AimBuddy modes, and play a map<br>
  </p>
  <h2>osu! Settings:</h2>
  <table>
    <tbody>
      <tr>
        <th>Setting</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Frame Limiter</td>
        <td>Unlimited</td>
      </tr>
      <tr>
        <td>Resolution</td>
        <td>Fullscreen (Borderless)</td>
      </tr>
      <tr>
        <td>Fullscreen mode</td>
        <td>Off</td>
      </tr>
      <tr>
        <td>Shaders</td>
        <td>Off</td>
      </tr>
    </tbody>
  </table>
  <br>
</template>

<script lang="ts">

export default
  {
    name: "AimBuddy",
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