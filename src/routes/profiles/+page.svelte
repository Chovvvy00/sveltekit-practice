<script lang="ts">
    import { resolve } from '$app/paths';

    const profiles = [
        { id: 1, name: 'John Doughnut' },
        { id: 2, name: 'Luke Skywalker' },
        { id: 3, name: 'Lissandra Mirage' },
        { id: 4, name: 'Iron Stone' },
        { id: 5, name: 'Yoone Boomx' }
    ];
</script>

<div class="flex flex-col items-center justify-cente gap-4">
    
    <h3>List of Profiles</h3>

    <ul>
        {#each profiles as profile (profile.id)}
            <li class="p-2 m-2 text-2xl text-blue-600 outline-1 hover:bg-amber-200">
                <a href={resolve('/profiles/[profileId]', { profileId: String(profile.id) })}>
                    {profile.name}
                </a>
            </li>
        {/each}
    </ul>
</div>
