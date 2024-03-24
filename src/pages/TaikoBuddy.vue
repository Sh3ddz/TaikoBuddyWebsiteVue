<template>
  <div>
    <h1>TaikoBuddy</h1>
    <h1>TaikoBuddy - osu!Taiko all in one cheat</h1>
    <br>
    <h2>
      <center>Detection Status: <span>UNDETECTED</span></center>
    </h2>
    <br>
    <center><iframe width="640" height="360" src="https://www.youtube.com/embed/4EX-1PxmYjs" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      class="justify-center"></iframe></center>
    <h2>What is TaikoBuddy?</h2>
    <p>
      TaikoBuddy is the most advanced osu taiko hack to date! <br>
      <span>UNDETECTABLE</span> if used properly.<br>
    </p>
    <h2>How does TaikoBuddy work?</h2>
    <p>
      TaikoBuddy works by searching a small area on your screen to detect what notes to hit.</br>
      It uses a color-based search algorithm along with many other methods to determine what note is to be hit.</br>
      This is why a custom skin is packaged with the program and must be used in order for it to work properly.</br>
    </p>
    <h2>TaikoBuddy Features</h2>
    <p>
      <b>Multiple Modes:</b>
    </p>
    <ul>
      <li><b><span>Full auto:</span></b> The bot will hit every note automatically</li>
      <li><b><span>Relax:</span></b> Press any key on your keyboard (other than the default taiko ones) and the bot will
        detect which note it is and hit it with the correct one.</li>
    </ul>
    <p>
      <b>Modularity:</b> Control essentially every aspect of how the bot plays<br>
      <b>Global Hotkeys:</b> Control the bots values while in a map!<br>
    </p>

    <h2>How to use TaikoBuddy</h2>
    <p>
      Simply run the packaged TaikoBuddy jar file, log into your TaikoBuddy account<br>
      Then open osu!, make sure the skin file packaged with this program is selected<br>
      Then make sure all your settings are correct, press R to cycle through TaikoBuddy modes, and play a map<br>
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
  </div>
</template>

<script lang="ts">

export default
  {
    name: "TaikoBuddy",
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