<script lang="ts">
    import { resolve } from '$app/paths';
    import { goto } from '$app/navigation';

    const handleClick = (emotion: string) => {
        console.log('Clicked');
        goto(resolve(`/emotions/${emotion.toLowerCase()}`))

    };

    const emotions = [
        { id: 1, emotion: "Amazed", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzF6M2x5bzFwbHk3ajJkbmRjdWh2ankwOTFkMXIwbXRjMTdqc2c1ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JVva1meR4f9C0/giphy.gif" },

        { id: 2, emotion: "Angry", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjN0djl5ZDd0YXp4bzBpMWVvZHR1aGZ4bDg5ajcwN3lzMXR0dGhxYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11tTNkNy1SdXGg/giphy.gif" },

        { id: 7, emotion: "Confused", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmVoamZwNHh4bTk2Ymt1dWxibGFhdGplaWcyaGcxcDYydWs0ZGhkcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT0xeuOy2Fcl9vDGiA/giphy.gif" },

        { id: 3, emotion: "Happy", gif: "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c2ZoNWN1ZHNtZTlsNDI4MXlnbzNsbzAxZzg3ODZna2l3bjAwaHpqZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VbKLOdvCxBFNZpYvhL/giphy.gif" },

        { id: 4, emotion: "Iritated", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGZuZ2ZqY216bzdvYWMxZjc3dDUwdGh4NWZlemxrcmFpZjRlb2NvaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KQvFZomRO2ApMj3D6w/giphy.gif"},

        { id: 5, emotion: "Sad", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW95MXRoOHFxOTRpcTlmcWd5bXozcnVxYzR5a25kYWl4YTgyNng5NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lGBecpB2dIMwt6ohfI/giphy.gif"},

        { id: 6, emotion: "Terrified", gif: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGxrcGxvaHRvdm0waHI2YjB1YThnZ2t4MW9wd212NDVna3QzczZsMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT9IgLslLoHoY4cdos/giphy.gif" },
    ]
</script>


<div class="flex flex-col items-center justify-center">
    <h1 class="text-2xl mb-5 font-bold text-center">How do you feel?</h1>

    <div class="flex flex-row gap-3">
        {#each emotions as emotion (emotion.id)}
            <button 
                type="button"
                class="border border-slate-300 p-2 hover:bg-sky-200 shadow-xl flex flex-col items-center rounded-lg" 
                onclick={() => handleClick(emotion.emotion)}
            >

                <p class="font-medium text-2xl text-gray-700 wrap-break-word pb-3 ">{emotion.emotion}</p>
                <img src={emotion?.gif} alt={emotion.emotion} class="w-32 h-32 rounded-lg" />
            
            </button>
        {/each}
    </div>
</div>


<!-- <h1>Welcome to SvelteKit</h1>
<div class="flex flex-col items-center justify-center gap-3">
    <a href={resolve("/about")} class="text-violet-600 underline">About</a>

    <button onclick={handleClick} class="p-1 border bg-amber-100 hover:bg-slate-300">
        List of Profiles
    </button>

</div> -->
