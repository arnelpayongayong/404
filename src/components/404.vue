<template>
    <div class="row">
        <div class="col" style="padding-top:6%">
            <img src="./../assets/Scarecrow.png" height="550px"/>
        </div>

        <div class="col">
            <p class="main-title">I have bad news for you</p>

            <p class="sub-title">The page you are looking for might be removed or is temporarily unavailable</p>

            <button class="btn">Back to homepage</button>
        </div>
    </div>
</template>

<style>

.row{
    display: flex;
    margin-top: 3%;
    padding: 0% 10% 0 10%;
    flex-direction: row;
}
.row img{
    height: 350px;
}
.col{
    margin-left: 10%;
}
.main-title{
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
}
.sub-title{
    font-family: Space Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
}
.btn{
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: -0.035em;
    text-transform: uppercase;
    background: #333333;
    border: none;
    color: white;
    padding: 2% 5% 2% 5%;
}

@media screen and (max-width: 1200px) {
.row{
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: center;
}
.row img{
    margin: 0 auto;
}
}

</style>