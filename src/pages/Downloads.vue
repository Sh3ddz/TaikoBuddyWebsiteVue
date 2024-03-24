<template>
    <div class="downloads-div justify-center items-center">
        <h1>Downloads</h1>
        <br>
        <h2>
            <center>OsuBuddy most recent release (3/8/2024)</center>
        </h2>
        <center><img src="/src/res/OsuBuddyDOWNLOAD.png" id="osubuddyDLImage" onclick="downloadOsuBuddy()" alt="OsuBuddy"
            style="width:480px;height:120px;"></center>
        <p id="osubuddyDL">
        </p>
        <br>
        <h2>
            <center>TaikoBuddy most recent release (1/28/2024)</center>
        </h2>
        <center><img src="/src/res/TaikoBuddyDOWNLOAD.png" id="taikobuddyDLImage" onclick="downloadTaikoBuddy()" alt="TaikoBuddy"
            style="width:480px;height:120px;"></center>
        <p id="taikobuddyDL">
        </p>
        <br>
        <h2>
            <center>AimBuddy most recent release (2/6/2024)</center>
        </h2>
        <center><img src="/src/res/AimBuddyDOWNLOAD.png" id="aimbuddyDLImage" onclick="downloadAimBuddy()" alt="AimBuddy"
            style="width:480px;height:120px;"></center>
        <p id="aimbuddyDL">
        </p>
    </div>
</template>

<script lang="ts">

export default
    {
        name: "Downloads",
    }
</script>