<template>
    <!-- The slides-per-view auto property allows us to keep both the main and options elements on the screen at the same time   -->
    <swiper :slides-per-view="'auto'" :class="style.container">
        <swiper-slide><div :class="style.main">Swipe me from right to left</div></swiper-slide>
        <swiper-slide :class="style.optionsContainer">
            <div :class="style.options">
                <button :class="style.option">Option 1</button>
                <button :class="style.option">Option 2</button>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
import { defineComponent, useCssModule } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
    name: "SideSwipeCard",
    components: {
        Swiper,
        SwiperSlide,
    },
    setup: () => {
        return {
            style: useCssModule(),
        };
    },
});
</script>

<style module lang="scss">
.container {
    background: #ff7043;
}

.main {
    border: 0.1rem solid lightgray;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    background: white;
}

// We have to set the swiper-slide width in order to
.optionsContainer {
    width: fit-content !important;
}

.options {
    border: 0.1rem solid #ff7043;
    height: 4rem;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    background: #ff7043;
}

.option {
    flex: 1;
    background: #ff7043;
    border: none;
    color: white;
    padding: 0 2rem;
}
</style>
