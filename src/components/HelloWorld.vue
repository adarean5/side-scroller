<template>
    <side-swipe-card></side-swipe-card>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { RootActions } from "../store";
import SideSwipeCard from "./side-swipe-card/SideSwipeCard.vue";

export default defineComponent({
    name: "HelloWorld",
    components: { SideSwipeCard },
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    setup: () => {
        const store = useStore();

        return {
            count: computed(() => store.getters.count),
            increment: () => {
                store.dispatch(RootActions.increment);
            },
        };
    },
});
</script>

<style module lang="scss">
.cssModuleTest {
    color: white;
    background: #304455;
}

a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
