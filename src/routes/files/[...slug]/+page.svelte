<script>
    import {page} from '$app/state';
    const slugArray = page.params.slug?.split('/') || [];
</script>

<h1>Files Page {slugArray?.join(' -> ')}</h1>

{#if slugArray?.length === 1}
    <p>First level of directory</p>
{:else if slugArray?.length >= 2}
    <p>Second level of directory</p>

    <div>
        <h3>
            first [{slugArray[0]}] second [{slugArray[1]}]
        </h3>
    </div>
{/if}